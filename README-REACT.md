# Refresher H2O - React Application

A modern React.js conversion of the Refresher H2O water delivery website with routing, reusable components, and a clean architecture.

## Project Structure

```
refresher-h2o-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/                    # Images and icons
│   │   ├── company-logo.jpeg
│   │   ├── home-delivery-banner.jpeg
│   │   ├── card1-image.jpeg
│   │   ├── card2-image.jpeg
│   │   ├── card-image.png
│   │   ├── company-certificates2.jpeg
│   │   ├── company-certificates-crop1.jpeg
│   │   ├── company-certificates-crop2.jpeg
│   │   ├── telephone.png
│   │   ├── location.png
│   │   ├── shopping-cart-section-background-image.jpg
│   │   ├── white-background-image.jpeg
│   │   └── card-section-background-image.jpg
│   ├── components/                # Reusable and page-specific components
│   │   ├── Navbar.js              # Shared - Site navigation
│   │   ├── Navbar.module.css
│   │   ├── Footer.js              # Shared - Site footer
│   │   ├── Footer.module.css
│   │   ├── Certificates.js        # Shared - Company certificates display
│   │   ├── Certificates.module.css
│   │   ├── HomeBanner.js          # Home-specific - Banner image
│   │   ├── HomeBanner.module.css
│   │   ├── Products.js            # Home-specific - Product grid
│   │   ├── Products.module.css
│   │   ├── ContactBanner.js       # Contact-specific - Cart header
│   │   ├── ContactBanner.module.css
│   │   ├── ContactForm.js         # Contact-specific - Order form
│   │   └── ContactForm.module.css
│   ├── layouts/                   # Layout components
│   │   └── MainLayout.js          # Wraps pages with Navbar & Footer
│   ├── pages/                     # Page components
│   │   ├── Home.js                # Home page (/ route)
│   │   └── Contact.js             # Contact/Order page (/contact route)
│   ├── App.js                     # Main app with routing
│   ├── index.js                   # React entry point
│   └── index.css                  # Global styles
├── package.json                   # Dependencies and scripts
└── README-REACT.md                # This file
```

## Component Architecture

### Shared Components (Used on Multiple Pages)
- **Navbar**: Site navigation with logo and branding
- **Footer**: Company information, contact details, and certificates
- **Certificates**: Company achievements and certifications display

### Page-Specific Components
- **HomeBanner**: Home page banner image
- **Products**: Product grid with order buttons (home page only)
- **ContactBanner**: Shopping cart header (contact page only)
- **ContactForm**: Order form with validation and submission (contact page only)

### Layout Components
- **MainLayout**: Wraps all pages with consistent Navbar and Footer

### Pages
- **Home** (`/`): Displays HomeBanner and Products
- **Contact** (`/contact`): Displays ContactBanner and ContactForm

## Features

### React Patterns Used
- **Hooks**: `useState`, `useEffect`, `useNavigate`, `useSearchParams`
- **React Router**: Client-side routing with URL parameters
- **CSS Modules**: Scoped component styling
- **Controlled Components**: Form inputs managed by React state
- **Conditional Rendering**: Dynamic UI based on state

### Converted Functionality
✅ Product display with hover effects
✅ Dynamic routing from product cards to order form
✅ Form validation (real-time field checking)
✅ Phone number formatting (auto-sanitization)
✅ Order submission with loading states
✅ SweetAlert2 integration for success messages
✅ Responsive design (mobile, tablet, desktop)
✅ Total amount calculation with delivery charges
✅ URL-based product selection

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Navigate to project directory**
```bash
cd /tmp/cc-agent/58062994/project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```
The app will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```
Creates optimized production build in `build/` folder

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite (if tests are added)
- `npm run eject` - Ejects from Create React App (one-way operation)

## Key Improvements from Static Site

1. **Component Reusability**: Navbar, Footer, and Certificates are shared across pages
2. **CSS Modules**: No naming conflicts, scoped styles per component
3. **Single Page Application**: Fast navigation without page reloads
4. **State Management**: React manages form state and validation
5. **Clean Architecture**: Clear separation of pages, layouts, and components
6. **Type Safety Ready**: Easy to migrate to TypeScript if needed
7. **Developer Experience**: Hot reload, better error messages

## Routing

- `/` - Home page with products
- `/contact?id={productId}` - Order form for specific product

Example: Clicking "Order Now" on product #3 navigates to `/contact?id=3`

## Styling Approach

**CSS Modules** are used throughout for:
- Component-scoped styles
- No global namespace pollution
- Easy maintenance
- Clear style-component relationship

All CSS follows the original design with:
- CSS custom properties (variables)
- Responsive breakpoints
- Hover effects and transitions
- Mobile-first approach

## API Integration

The order form submits to:
```
POST https://app.hydrila.com/api/webstoreorders
```

Data format:
```json
{
  "customerName": "John Doe",
  "customerAddress": "123 Main St",
  "customerMobileNo": "+92300XXXXXXX",
  "items": [
    {
      "productName": "Rh20 1.5 Liter pet (pack of 6)",
      "quantity": 2,
      "perUnitPrice": 320
    }
  ]
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements:
- Add TypeScript for type safety
- Implement lazy loading for images
- Add React Context for global state
- Add unit tests with Jest/React Testing Library
- Implement error boundaries
- Add accessibility (ARIA labels)
- Add ESLint/Prettier configuration
- Implement cart persistence (localStorage)
- Add user authentication

## Notes on Conversion

### What Was Preserved
✅ All original styling and design
✅ Form validation logic
✅ Product data structure
✅ API integration
✅ Responsive breakpoints
✅ Animations and transitions
✅ SweetAlert2 notifications

### What Was Changed
- Vanilla JS → React hooks
- Global CSS → CSS Modules
- HTML files → JSX components
- `<a>` navigation → React Router
- DOM manipulation → State-driven rendering
- Inline scripts → Component methods

### Limitations
- No loader animation (commented out in original)
- No geolocation feature (commented out in original)
- External API dependency for order submission

## Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart
npm start
```

**Module not found errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear build cache
rm -rf build
npm run build
```

## License

Private - Refresher H2O PVT Ltd

## Contact

For questions about the application:
- Phone: 0304-7952551
- Location: 154 N Ghazali Road Lahore, Pakistan
