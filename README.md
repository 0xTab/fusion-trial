# MIMO - Web3.0 Social Platform

A modern React application showcasing the MIMO Web3.0 social platform with clean, maintainable code following best practices.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with custom responsive hooks
- **Clean Architecture**: Well-structured components following React best practices
- **Design System**: Centralized design tokens for consistency
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Performance**: Optimized components with proper memoization

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── SvgIcons.js          # Reusable SVG icon components
│   └── Home/
│       ├── Header.js            # Navigation header
│       ├── HeroSection.js       # Main hero section
│       ├── PlatformButtons.js   # Download platform buttons
│       ├── DevicePreview.js     # Device mockups
│       └── Footer.js            # Footer with social links
├── constants/
│   └── designTokens.js          # Centralized design tokens
├── hooks/
│   └── useResponsive.js         # Custom responsive hook
├── pages/
│   └── Home.js                  # Main home page
└── styles/
    ├── base.css                 # Base styles and utilities
    └── components/              # Component-specific styles
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000) background, White (#fff) text
- **Secondary**: Gray (#5E616E) for secondary text
- **Gradients**: Green gradient for buttons and logos
- **Social**: Brand colors for social media icons

### Typography
- **Primary Font**: Outfit (400, 700)
- **Secondary Font**: Inter (400)

### Spacing
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 2.5rem
- **XXL**: 4rem

## 🔧 Code Quality Improvements

### 1. Constants Over Magic Numbers
- Created `designTokens.js` to centralize all design values
- Replaced hard-coded colors, spacing, and animations with named constants
- Single source of truth for all design tokens

### 2. Meaningful Names
- Descriptive component and function names
- Clear variable names that explain their purpose
- Self-documenting code structure

### 3. Single Responsibility
- Each component has a single, focused purpose
- Extracted reusable logic into custom hooks
- Separated concerns between presentation and logic

### 4. DRY (Don't Repeat Yourself)
- Created reusable SVG icon components
- Extracted common styling patterns
- Shared logic through custom hooks

### 5. Clean Structure
- Logical file organization
- Consistent naming conventions
- Proper separation of concerns

## 🎯 React Best Practices

### Component Structure
- Functional components with hooks
- Proper prop types and default values
- Clean component composition

### Performance
- Custom `useResponsive` hook for responsive design
- Proper event handling and cleanup
- Optimized re-renders

### Accessibility
- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Focus management

### Error Handling
- Image error handling in DevicePreview
- Graceful fallbacks for missing data
- Console logging for debugging

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The application uses a custom `useResponsive` hook that provides:
- `isMobile`: Screen width < 480px
- `isTablet`: Screen width 480px - 768px
- `isDesktop`: Screen width > 768px

## 🎨 Customization

### Adding New Design Tokens
1. Add new constants to `src/constants/designTokens.js`
2. Import and use in components
3. Update documentation

### Adding New Components
1. Create component in appropriate directory
2. Follow naming conventions
3. Add proper documentation
4. Include accessibility features

## 🔍 Code Quality Features

- **Type Safety**: Proper prop validation
- **Error Boundaries**: Graceful error handling
- **Performance**: Optimized rendering
- **Accessibility**: WCAG compliant
- **Maintainability**: Clean, readable code

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Follow the established code structure
2. Use meaningful commit messages
3. Test on multiple devices
4. Ensure accessibility compliance
5. Update documentation as needed
