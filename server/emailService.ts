import type { ContactSubmission } from '@shared/schema';

/**
 * Interface for email notification services
 */
export interface IEmailService {
  /**
   * Sends a notification email for a new contact form submission
   * @param submission The contact form submission data
   * @returns Promise resolving to boolean indicating success
   */
  sendContactNotification(submission: ContactSubmission): Promise<boolean>;
}

/**
 * Basic email service implementation that logs emails (can be replaced with actual email service)
 */
export class LoggingEmailService implements IEmailService {
  async sendContactNotification(submission: ContactSubmission): Promise<boolean> {
    console.log('🔔 New contact form submission notification:');
    console.log(`From: ${submission.name} (${submission.email})`);
    console.log(`Company: ${submission.company}`);
    console.log(`Service: ${submission.service}`);
    console.log(`Message: ${submission.message}`);
    console.log('---');
    console.log('To connect to an actual email service, configure SMTP or API-based email provider');
    
    return true;
  }
}

// Export singleton instance
export const emailService = new LoggingEmailService();