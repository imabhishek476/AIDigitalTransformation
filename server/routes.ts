import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertUserProgressSchema, 
  insertUserActivitySchema,
  insertAchievementSchema,
  insertUserAchievementSchema
} from "@shared/schema";
import { z } from "zod";
import { emailService } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body using our schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store in the database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        await emailService.sendContactNotification(submission);
        console.log('Email notification sent for contact form submission');
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Failed to send email notification:', emailError);
      }
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        data: submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Please check your form data and try again',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      
      // Database or server errors
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        message: 'We encountered an issue processing your request. Please try again or contact us directly.',
        error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      });
    }
  });

  // Get all contact submissions (you can add authentication to this later)
  app.get('/api/contact-submissions', async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve contact submissions'
      });
    }
  });

  // Gamification API Routes
  
  // Get user progress
  app.get('/api/gamification/progress/:userId', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
      }

      let progress = await storage.getUserProgress(userId);
      
      // Create initial progress if none exists
      if (!progress) {
        progress = await storage.createUserProgress({
          userId,
          totalPoints: 0,
          currentLevel: 1,
          currentLevelProgress: 0,
          streak: 0
        });
      }

      res.status(200).json(progress);
    } catch (error) {
      console.error('Error fetching user progress:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve progress' });
    }
  });

  // Update user progress
  app.put('/api/gamification/progress/:userId', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
      }

      const progressData = insertUserProgressSchema.parse(req.body);
      const updatedProgress = await storage.updateUserProgress(userId, progressData);
      
      res.status(200).json(updatedProgress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating user progress:', error);
      res.status(500).json({ success: false, message: 'Failed to update progress' });
    }
  });

  // Record user activity
  app.post('/api/gamification/activity', async (req, res) => {
    try {
      const activityData = insertUserActivitySchema.parse(req.body);
      const activity = await storage.createUserActivity(activityData);
      
      // Auto-update user progress based on activity
      const currentProgress = await storage.getUserProgress(activityData.userId);
      if (currentProgress && activityData.pointsEarned > 0) {
        const newTotalPoints = currentProgress.totalPoints + activityData.pointsEarned;
        const newLevel = Math.floor(newTotalPoints / 100) + 1; // 100 points per level
        const newLevelProgress = newTotalPoints % 100;
        
        await storage.updateUserProgress(activityData.userId, {
          totalPoints: newTotalPoints,
          currentLevel: newLevel,
          currentLevelProgress: newLevelProgress,
          lastActivityDate: new Date()
        });
      }
      
      res.status(201).json(activity);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error recording activity:', error);
      res.status(500).json({ success: false, message: 'Failed to record activity' });
    }
  });

  // Get user activities
  app.get('/api/gamification/activities/:userId', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const limit = parseInt(req.query.limit as string) || 50;
      
      if (isNaN(userId)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
      }

      const activities = await storage.getUserActivities(userId, limit);
      res.status(200).json(activities);
    } catch (error) {
      console.error('Error fetching user activities:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve activities' });
    }
  });

  // Get all achievements
  app.get('/api/gamification/achievements', async (req, res) => {
    try {
      const achievements = await storage.getAchievements();
      res.status(200).json(achievements);
    } catch (error) {
      console.error('Error fetching achievements:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve achievements' });
    }
  });

  // Get user achievements
  app.get('/api/gamification/achievements/:userId', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID' });
      }

      const userAchievements = await storage.getUserAchievements(userId);
      res.status(200).json(userAchievements);
    } catch (error) {
      console.error('Error fetching user achievements:', error);
      res.status(500).json({ success: false, message: 'Failed to retrieve achievements' });
    }
  });

  // Award achievement to user
  app.post('/api/gamification/achievements/award', async (req, res) => {
    try {
      const awardData = insertUserAchievementSchema.parse(req.body);
      const userAchievement = await storage.createUserAchievement(awardData);
      
      res.status(201).json(userAchievement);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error awarding achievement:', error);
      res.status(500).json({ success: false, message: 'Failed to award achievement' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
