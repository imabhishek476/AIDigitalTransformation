import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real app, you might want to store this in the database
      // or send it via email
      console.log('Contact form submission:', validatedData);
      
      // For now, we'll just return a success response
      res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors
        });
      }
      
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
