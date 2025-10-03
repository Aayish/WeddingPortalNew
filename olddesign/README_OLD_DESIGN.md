# Old Wedding Portal Design

This folder contains the previous wedding portal implementation that was moved here for reference.

## What's included:

### Source Code (`src/`)
- **Components**: Header, MainContent, VenueSection, SearchBar, VenueGrid, VenueCard
- **Configuration**: Centralized API configuration in `config/api.ts`
- **Services**: Axios client with interceptors in `services/apiClient.ts`
- **Providers**: TanStack Query setup in `providers/QueryProvider.tsx`
- **Utils**: Query utilities and error handling in `utils/queryUtils.ts`

### Features Implemented:
- ✅ Modern React + TypeScript + Vite setup
- ✅ Responsive design with pastel color palette
- ✅ Sticky navigation header with mobile hamburger menu
- ✅ Complete venue section with search and filtering
- ✅ REST API integration with centralized configuration
- ✅ TanStack Query for data fetching and caching
- ✅ Mock data for 9 sample venues

### Design System:
- **Colors**: Peach, gold, rose, white pastel palette
- **Typography**: Playfair Display (serif headings) + Inter (sans-serif body)
- **Layout**: 3×3 grid (desktop), 2×N (tablet), 1×N (mobile)
- **Components**: Cards with shadows, hover effects, smooth animations

### Configuration Files:
- `.env.example` - Environment variables template
- `README.md` - Full documentation of the old design
- `.github/copilot-instructions.md` - Project-specific Copilot instructions

## To restore this design:

1. Copy the contents of `olddesign/src/` back to `src/`
2. Copy `olddesign/.env.example` to the root
3. Update `main.tsx` to include the QueryProvider
4. Install dependencies: `npm install axios @tanstack/react-query @tanstack/react-query-devtools`
5. Run `npm run dev`

## Original Development Notes:

The old design was fully functional with:
- Working search and filtering
- Responsive mobile design
- API integration ready for backend
- Modern UI with smooth interactions
- TypeScript throughout for type safety

This implementation can serve as a reference or starting point for future iterations.