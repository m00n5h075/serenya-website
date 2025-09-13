# Serenya Marketing Website

A professional, static marketing website for Serenya - Your AI Health Agent. Built with modern web standards and optimized for performance, accessibility, and SEO.

## 🚀 Features

- **Static HTML/CSS/JS** - Fast, secure, and reliable
- **Mobile-First Responsive Design** - Optimized for all devices
- **SEO Optimized** - Complete meta tags, schema markup, and semantic HTML
- **Privacy-First** - No tracking, GDPR compliant
- **Netlify Forms** - Contact form with spam protection
- **Healthcare-Focused Design** - Professional medical industry aesthetics
- **Performance Optimized** - Lighthouse score 90+

## 📁 Project Structure

```
serenya-website/
├── index.html                 # Homepage
├── css/
│   ├── main.css              # Main stylesheet with design tokens
│   └── components.css        # Component styles
├── js/
│   └── main.js               # Interactive functionality
├── images/                   # Website images and assets
├── pages/
│   ├── how-it-works.html     # How it works page
│   ├── features.html         # Features page
│   ├── security.html         # Security & privacy page
│   ├── pricing.html          # Pricing plans page
│   ├── about.html            # About us page
│   ├── faq.html              # FAQ with accordion
│   ├── legal.html            # Terms & privacy policy
│   ├── contact.html          # Contact form
│   ├── download.html         # App download page
│   └── thank-you.html        # Form submission confirmation
├── _redirects                # Netlify redirects configuration
├── netlify.toml              # Netlify deployment configuration
└── README.md                 # This file
```

## 🎨 Design System

The website uses Serenya's healthcare-focused design tokens:

### Colors
- **Primary Blue**: #2196F3 (Serenya brand color)
- **Secondary Green**: #4CAF50 (Success/health positive)
- **Neutral Grays**: #212121 to #FAFAFA (Text and backgrounds)
- **Medical Safety Colors**: Red (#D32F2F), Orange (#FF6F00), Green (#2E7D32)

### Typography
- **Font**: Inter (with system font fallbacks)
- **Heading Scale**: 2.5rem, 2rem, 1.5rem, 1.25rem
- **Body Text**: 1rem, 1.125rem (lead), 0.875rem (small)

### Spacing
- **8px Base System**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Responsive Breakpoints**: 576px, 768px, 992px, 1200px

## 🛠 Development

### Local Development

1. Clone the repository
2. Open in any web server or live preview
3. No build process required - pure HTML/CSS/JS

### Recommended Tools
- **VS Code** with Live Server extension
- **Chrome DevTools** for testing and debugging
- **Lighthouse** for performance auditing

### Testing Checklist

- [ ] **Responsive Design**: Test on mobile (320px+), tablet (768px+), desktop (1024px+)
- [ ] **Cross-Browser**: Chrome, Firefox, Safari, Edge
- [ ] **Performance**: Lighthouse score 90+
- [ ] **Accessibility**: WCAG AA compliance
- [ ] **SEO**: Valid HTML, proper heading hierarchy, meta tags
- [ ] **Forms**: Contact form submission and validation

## 🚀 Deployment

### Netlify Deployment

1. Connect repository to Netlify
2. Set build settings:
   - **Build command**: (none)
   - **Publish directory**: `.` (root)
3. Configure domain and SSL
4. Forms will automatically work with Netlify Forms

### Manual Deployment

1. Upload all files to web server
2. Configure server for clean URLs (optional)
3. Set up form handling service

### Environment Variables

No environment variables required for basic deployment.

## 📊 Performance

Target metrics:
- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s

## ♿ Accessibility

- **WCAG AA Compliant**
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: 4.5:1 minimum ratio
- **Focus Indicators**: Visible on all interactive elements

## 🔒 Security

- **No Backend**: Static files only, no server vulnerabilities
- **Form Security**: Netlify spam protection and reCAPTCHA
- **Headers**: Security headers configured in netlify.toml
- **Privacy**: No tracking scripts or personal data collection

## 📝 Content Management

### Updating Content

1. **Text Changes**: Edit HTML files directly
2. **Styling**: Modify CSS custom properties in main.css
3. **New Pages**: Copy existing page template and update navigation

### SEO Updates

Each page includes:
- **Title Tag**: Unique, descriptive titles
- **Meta Description**: 150-160 character summaries
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for search engines

## 🔗 Important Links

- **Live Site**: https://serenya.com
- **Netlify Dashboard**: [Configure after deployment]
- **Repository**: [Your repository URL]

## 📞 Support

For technical issues with the website:
- **Developer Contact**: [Your contact information]
- **Documentation**: This README file
- **Issue Tracking**: [Your issue tracking system]

## 📄 License

Copyright 2024 Serenya. All rights reserved.

---

**Built with ❤️ for better health understanding**