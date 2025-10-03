# Wedding Portal

A modern, elegant wedding planner web portal built with React, TypeScript, and Vite. This application provides a comprehensive platform for planning weddings with features for venues, caterers, photographers, bridal makeup artists, and bridal dress collections.

## 🎨 Design Features

- **Modern Design**: Elegant pastel color palette (peach, gold, rose, white)
- **Typography**: Serif headings (Playfair Display) and sans-serif body text (Inter)
- **Responsive**: Desktop-first design that adapts beautifully to mobile
- **Single Page App**: Smooth navigation with sticky header
- **Professional UI**: Cards with soft shadows, hover effects, and modern styling

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with custom properties and responsive design
- **State Management**: React hooks and TanStack Query
- **HTTP Client**: Axios with centralized configuration
- **Data Fetching**: TanStack Query (React Query) for caching and synchronization

## 📱 Features

### Header Navigation
- Sticky navigation bar with smooth scrolling
- Logo placeholder and authentication toggle
- Responsive hamburger menu for mobile
- Tab-based navigation: Venue, Caterer, Photographers, Bridal Makeup, Bridal Dresses

### Venue Section (Primary)
- **Advanced Search**: Name, capacity, and venue type filters
- **Expandable Filters**: Price range and amenities selection
- **Grid Layout**: Responsive 3×3 grid (desktop), 2×N (tablet), 1×N (mobile)
- **Venue Cards**: Images, pricing, capacity, features, and ratings
- **Interactive Elements**: Hover effects and view details buttons

### Other Sections
- Placeholder sections for future development
- Consistent design patterns ready for implementation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API configuration
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## 🔧 API Configuration

The application uses centralized API configuration for easy environment management:

### Environment Variables
Create a `.env.local` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_API_VERSION=v1
VITE_API_TIMEOUT=10000
```

Your main URL hostname is configured centrally in the API configuration and can be easily changed through environment variables.
