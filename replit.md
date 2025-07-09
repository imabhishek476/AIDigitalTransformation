# NexiFront - AI-Powered Digital Transformation Agency

## Overview

NexiFront is a modern full-stack web application built for a digital transformation agency that specializes in AI integration, SEO optimization, and digital marketing solutions. The application serves as both a marketing website and a business management platform, featuring a responsive design, interactive demos, and administrative capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon (serverless PostgreSQL)
- **Authentication**: Session-based (prepared for implementation)
- **Email Service**: Abstracted interface with logging implementation (ready for SMTP/API integration)
- **API Design**: RESTful endpoints with proper error handling

## Key Components

### Frontend Components
- **Layout System**: Header, Footer, and main content areas with responsive design
- **UI Library**: Comprehensive component library including forms, modals, cards, and interactive elements
- **Interactive Features**: AI chatbot demo, ROI calculator, analytics setup wizard, and live metrics dashboard
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Image optimization, lazy loading, and performance monitoring hooks

### Backend Services
- **Storage Layer**: Abstracted storage interface with PostgreSQL implementation
- **Email Service**: Pluggable email notification system
- **Contact Management**: Form submission handling with validation
- **Database Schema**: Users, contact submissions, and gamification system (achievements, progress tracking)

## Data Flow

1. **User Interaction**: Frontend captures user interactions (contact forms, demo usage)
2. **API Communication**: TanStack Query handles API calls with proper error handling
3. **Data Validation**: Zod schemas validate data on both client and server
4. **Database Operations**: Drizzle ORM manages database interactions
5. **Email Notifications**: Abstracted email service handles contact form notifications
6. **Response Handling**: Standardized API responses with proper error messages

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL for data persistence
- **Email**: Ready for SendGrid integration (currently logging)
- **Analytics**: Google Analytics 4 integration for user tracking
- **UI Components**: Radix UI for accessible component primitives
- **Form Handling**: React Hook Form with Zod validation

### Development Tools
- **TypeScript**: Full type safety across the application
- **Drizzle Kit**: Database migrations and schema management
- **PostCSS**: CSS processing with Tailwind CSS
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Build Process
- **Development**: `npm run dev` starts both frontend and backend with hot reloading
- **Production Build**: `npm run build` creates optimized frontend build and bundles server
- **Database**: `npm run db:push` applies schema changes to database

### Environment Configuration
- **Database**: `DATABASE_URL` for PostgreSQL connection
- **Analytics**: `VITE_GA_MEASUREMENT_ID` for Google Analytics
- **Email**: Ready for SMTP or API key configuration

### Performance Optimizations
- **Image Optimization**: Responsive images with WebP format support
- **Code Splitting**: Component-level code splitting for better loading
- **Caching**: Browser caching strategies for static assets
- **Analytics**: Performance monitoring and user behavior tracking

### Security Considerations
- **Input Validation**: Comprehensive validation using Zod schemas
- **Error Handling**: Proper error boundaries and user-friendly messages
- **CORS**: Configured for secure cross-origin requests
- **Session Management**: Prepared for secure session handling

The application is designed to be scalable, maintainable, and ready for production deployment with minimal configuration changes.