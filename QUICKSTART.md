# Quick Start Guide - Refresher H2O React App

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm start
```
Opens at: http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Overview

### Routes
- `/` - Home page with products
- `/contact?id={productId}` - Order form

### Key Components

**Shared (Used Everywhere):**
- `Navbar` - Site navigation
- `Footer` - Contact info & certificates
- `Certificates` - Company achievements

**Home Page Only:**
- `HomeBanner` - Banner image
- `Products` - Product grid

**Contact Page Only:**
- `ContactBanner` - Cart header
- `ContactForm` - Order form

### Technology Stack
- React 18.2
- React Router 6.22
- CSS Modules
- SweetAlert2
- Fetch API

---

## 🎨 Features Converted from Static Site

✅ Product display with hover effects
✅ Dynamic routing (product → order form)
✅ Form validation (real-time)
✅ Phone number auto-formatting
✅ Order submission with loading state
✅ Success notifications
✅ Responsive design (mobile/tablet/desktop)
✅ Total calculation with delivery charges

---

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 601px - 900px
- **Desktop Small**: 901px - 1200px
- **Desktop Large**: 1201px - 1536px
- **Desktop XL**: > 1536px

---

## 🔧 Common Commands

```bash
# Development
npm start              # Start dev server
npm run build          # Production build
npm test               # Run tests

# Troubleshooting
npx kill-port 3000     # Kill port 3000
rm -rf node_modules    # Remove dependencies
npm install            # Reinstall dependencies
```

---

## 🌐 API Endpoint

**Order Submission:**
```
POST https://app.hydrila.com/api/webstoreorders
```

**Payload:**
```json
{
  "customerName": "John Doe",
  "customerAddress": "123 Main St",
  "customerMobileNo": "+92300XXXXXXX",
  "items": [{
    "productName": "Product Name",
    "quantity": 2,
    "perUnitPrice": 320
  }]
}
```

---

## 📂 File Structure

```
src/
├── components/       # All UI components
├── pages/           # Route pages (Home, Contact)
├── layouts/         # Layout wrappers (MainLayout)
├── assets/          # Images, icons
├── App.js           # Router setup
└── index.js         # React entry
```

---

## 💡 Development Notes

- **CSS Modules**: All styles are scoped to components
- **Hooks Used**: useState, useEffect, useNavigate, useSearchParams
- **No Global State**: All state is component-local
- **Form Validation**: Real-time validation on input change
- **Navigation**: React Router for SPA experience

---

## 🎯 Next Steps (Optional)

- [ ] Add TypeScript
- [ ] Add unit tests
- [ ] Implement lazy loading
- [ ] Add error boundaries
- [ ] Setup ESLint/Prettier
- [ ] Add accessibility features
- [ ] Implement cart persistence

---

## 📞 Support

**Refresher H2O PVT Ltd**
Phone: 0304-7952551
Location: 154 N Ghazali Road, Lahore, Pakistan

---

## ✅ Verified Working

- ✅ Build compiles successfully
- ✅ All components render correctly
- ✅ Routing works (/ and /contact)
- ✅ Form validation functional
- ✅ API integration ready
- ✅ Responsive design preserved
- ✅ Animations and transitions work
- ✅ CSS Modules scoped properly

**Ready to deploy!** 🚀
