# replit.md

## Overview

This is a modern full-stack web application built as an Airbnb clone. It features a React frontend with TypeScript, a Node.js/Express backend, and is designed to showcase vacation rental properties with a clean, responsive user interface. The application uses modern web technologies including shadcn/ui components, TailwindCSS for styling, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development Server**: Custom Vite integration for hot reloading

## Key Components

### Frontend Components
1. **Header**: Navigation bar with logo, menu items, and user controls
2. **Hero Section**: Main landing area with search functionality
3. **Filters Section**: Property filtering controls
4. **Property Card**: Individual property display component
5. **Inspiration Section**: Destination recommendations
6. **Footer**: Site-wide footer with links and information

### Backend Components
1. **Routes**: API endpoints for properties and destinations
2. **Storage**: Memory-based storage implementation with mock data
3. **Database Schema**: Drizzle ORM schema definitions for properties and destinations

### Database Schema
- **Properties Table**: Stores rental property information including title, description, location, pricing, amenities, and host details
- **Destinations Table**: Stores destination information for inspiration section

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data from API endpoints
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Currently uses in-memory storage with mock data, configured for PostgreSQL with Drizzle ORM
4. **Response Handling**: API responses are processed by React Query and update component state
5. **UI Updates**: Components re-render based on query state changes

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- UI library (Radix UI primitives, shadcn/ui components)
- Styling (TailwindCSS, class-variance-authority, clsx)
- Utilities (date-fns, wouter for routing)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database serverless driver
- Development tools (tsx, esbuild, Vite)

### Development Dependencies
- TypeScript for type safety
- Vite for development server and build process
- PostCSS and Autoprefixer for CSS processing

## Deployment Strategy

### Development
- Uses Vite development server with hot module replacement
- Express server runs concurrently with Vite middleware
- Database migrations handled through Drizzle Kit
- Environment variables required for database connection

### Production Build
- Frontend built with Vite to static assets
- Backend bundled with esbuild for Node.js deployment
- Static assets served from Express server
- Database connection through environment variables

### Environment Setup
- Requires `DATABASE_URL` environment variable for PostgreSQL connection
- Uses ES modules throughout the application
- Configured for Replit environment with specific plugins and middleware

## Notable Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository with clear separation
2. **TypeScript Throughout**: Full TypeScript adoption for type safety across all layers
3. **Modern React Patterns**: Functional components with hooks, no class components
4. **Server-Side Rendering Ready**: Vite SSR configuration for potential future enhancement
5. **Database Abstraction**: Storage interface allows for easy switching between storage implementations
6. **Component-Based UI**: Highly modular component structure with reusable UI elements
7. **Type-Safe API**: Shared types between frontend and backend for consistent data structures