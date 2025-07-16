# Airbnb Clone

A modern Airbnb homepage clone built with React, TypeScript, and Express.js. This project recreates the core features of Airbnb's homepage with a clean, responsive design.

## Features

- 🏠 **Property Listings**: Browse through various rental properties with detailed information
- 🔍 **Search Interface**: Hero section with search bar for destinations, dates, and guests
- 📱 **Responsive Design**: Mobile-friendly navigation and layout
- 🎨 **Modern UI**: Styled with TailwindCSS and shadcn/ui components
- 📋 **Property Details**: Dedicated pages for each property with booking interface
- 🌟 **Interactive Elements**: Property cards with ratings, favorites, and hover effects
- 🗺️ **Destinations**: Inspiration section with travel destinations

## Tech Stack

### Frontend
- **React** with TypeScript
- **TailwindCSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **TanStack Query** for state management
- **Vite** for build tooling

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **In-memory storage** (ready for PostgreSQL)

## Project Structure

```
airbnb-clone/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                 # Shared types and schemas
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Mtar786/airbnb-clone.git
cd airbnb-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build

## Features in Detail

### Homepage
- Clean header with navigation and user menu
- Hero section with search functionality
- Property filters and sorting options
- Grid layout of property cards
- Inspiration section with destinations

### Property Cards
- High-quality property images
- Star ratings and reviews
- Property details (guests, bedrooms, bathrooms)
- Pricing information
- Favorite/wishlist functionality

### Property Detail Pages
- Full property information
- Image gallery
- Host details
- Amenities list
- Booking interface with date selection

### Mobile Experience
- Responsive design for all screen sizes
- Mobile-optimized navigation
- Touch-friendly interface elements

## Data Structure

The application uses mock data for 8 properties and 4 destinations, including:
- Modern apartments and luxury villas
- Cozy cabins and industrial lofts
- Comprehensive property details and amenities
- Popular travel destinations

## Future Enhancements

- User authentication and profiles
- Real booking system with payments
- Property search and filtering
- Map integration
- Review and rating system
- Host dashboard
- Database integration with PostgreSQL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes and portfolio demonstration.

## Screenshots

<img width="1290" height="1096" alt="image" src="https://github.com/user-attachments/assets/d2b57eb2-fbd1-4683-a346-2869e3772af8" />


---

