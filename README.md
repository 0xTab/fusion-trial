# MIMO - Web3.0 Social Platform

A React application featuring a responsive landing page for the MIMO Web3.0 Social Platform with download options for multiple platforms.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern React**: Built with React 19 and functional components
- **React Router**: Single-page application with routing
- **Modular CSS**: Component-based styling with CSS custom properties
- **Platform Downloads**: Download buttons for iOS, Android, and Google Play
- **Device Mockups**: Interactive device previews showcasing the platform
- **Animated Elements**: Smooth animations and transitions

## 📁 Project Structure

```
src/
├── components/
│   └── Home/
│       ├── Header.js          # Navigation header with logo
│       ├── HeroSection.js     # Main hero section with CTA
│       ├── PlatformButtons.js # Platform download buttons
│       ├── DevicePreview.js   # Device mockups and previews
│       └── Footer.js          # Footer with social links
├── pages/
│   └── Home.js               # Main home page component
├── styles/
│   ├── base.css              # Global styles and CSS variables
│   ├── Home.css              # Main layout and background effects
│   └── components/           # Component-specific styles
│       ├── Header.css
│       ├── HeroSection.css
│       ├── PlatformButtons.css
│       ├── DevicePreview.css
│       └── Footer.css
├── App.js                    # Main app with routing
└── index.js                  # React entry point
```

## 🎨 Design System

The project uses a modular CSS approach with:

- **CSS Custom Properties**: Centralized color palette, spacing, and typography
- **Component-based Styles**: Each component has its own CSS file
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animation Library**: Keyframe animations for enhanced UX

### Color Palette
- Primary Background: `#000` (Black)
- Primary Text: `#fff` (White)
- Secondary Text: `#5E616E` (Gray)
- Accent Colors: Teal/Green gradients

### Typography
- Primary Font: `Outfit` (Google Fonts)
- Secondary Font: `Inter` (Google Fonts)

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## 🌐 Routes

- `/` - Redirects to `/home`
- `/home` - Main landing page

## 📱 Responsive Breakpoints

- Mobile: `480px` and below
- Tablet: `768px` and below
- Desktop: `1024px` and above

## 🎯 Key Components

### Header
- Logo display
- Back to home navigation

### Hero Section
- Main title and subtitle
- Primary CTA button
- Animated entrance effects

### Platform Buttons
- iOS/iPad download
- TestFlight access
- Android APK
- Google Play Store

### Device Preview
- Laptop mockup with app interface
- Mobile device preview
- Responsive positioning

### Footer
- MIMO logo
- Copyright information
- Social media links (Twitter, Instagram, Facebook, Discord, Medium)

## 🔧 Technologies Used

- **React** 19.1.1
- **React Router Dom** 6.x
- **CSS3** with custom properties
- **Google Fonts** (Outfit, Inter)
- **SVG Icons** for scalable graphics

## 📝 Development Notes

The project follows React best practices:
- Functional components with hooks
- Component composition
- Separated concerns (styling, logic, presentation)
- Responsive design patterns
- Accessibility considerations

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will reload when you make changes, and you'll see any lint errors in the console.
