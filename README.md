# PowerTech-Engineers
2026 Client Need 

# 🏗️ POWERTECH ENGINEERS - Website Documentation

## 📋 Project Overview

A modern, industrial-premium website for POWERTECH ENGINEERS - Licensed Electrical Contractors in Pune. Built with pure HTML5, CSS3, and Vanilla JavaScript (no frameworks required).

---



## 🎨 Design System

### **Color Palette**

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Brand Navy** | `#0B1E33` | Primary brand color, headers |
| **Brand Blue** | `#2563eb` | Interactive elements, CTAs |
| **Brand Red** | `#D92D20` | Emergency buttons |
| **Safety Yellow** | `#FFD60A` | High-priority actions |
| **Trust Green** | `#10b981` | Success states, certifications |

### **Typography**

- **Font Family:** Inter (from Google Fonts)
- **Headings:** 900 weight (Black)
- **Body:** 400-600 weight
- **Technical Specs:** JetBrains Mono (monospace)

### **Key Visual Effects**

- **Glass Morphism:** `backdrop-filter: blur(12px)`
- **Smooth Transitions:** `cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover Scale:** `transform: scale(1.05)`
- **Box Shadows:** Multiple layers for depth

---

## ✨ Features Implemented

### ✅ **Navigation**
- Sticky glass-morphism navbar
- Smooth scroll to sections
- Mobile responsive hamburger menu
- Active link highlighting

### ✅ **Hero Section**
- Full-screen gradient background
- Animated grid overlay
- Two CTA buttons (Primary & Secondary)
- Direct contact information
- Scroll indicator animation

### ✅ **Service Cards (Glass Effect)**
- 6 core services displayed
- Hover animations (scale 1.05x)
- Click to open side-drawer modal
- Icon animations on hover

### ✅ **Side-Drawer Modal**
- Slides in from right (40% width on desktop, 100% on mobile)
- Service details with process workflow
- Compliance information
- Request quote CTA
- Closes on overlay click or ESC key

### ✅ **PowerBot Chatbot**
- Floating chat toggle button
- Pulse animation for attention
- Multi-step conversation flow
- Emergency contact shortcut
- Service inquiry routing
- Callback request

### ✅ **Emergency FAB**
- Fixed position floating button
- Direct phone call link
- Pulse animation effect
- Hover tooltip label
- Red gradient for urgency

### ✅ **Additional Sections**
- Stats bar (Years, Projects, Uptime, Safety)
- Why Choose Us (3 key differentiators)
- Certifications strip (Blue gradient background)
- Contact section with location details
- Professional footer

---

## 📱 Responsive Breakpoints

| Device | Width | Adjustments |
|--------|-------|-------------|
| **Mobile** | < 768px | Single column layout, full-width modals |
| **Tablet** | 768px - 1024px | 2-column grid, responsive padding |
| **Desktop** | > 1024px | 3-column grid, side-drawer 600px width |

---


## 🔍 SEO Optimization

### **Update Meta Tags**

In `index.html`, customize these:

```html
<meta name="description" content="Your custom description">
<title>Your Custom Title</title>

<!-- Add Open Graph for social sharing -->
<meta property="og:title" content="POWERTECH ENGINEERS">
<meta property="og:description" content="Licensed Electrical Contractors in Pune">
<meta property="og:image" content="https://yourwebsite.com/og-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

### **Add Google Analytics**

Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 Performance Checklist

- ✅ **No framework dependencies** - Loads instantly
- ✅ **Optimized animations** - CSS transitions & transforms
- ✅ **Lazy loading support** - Images load on demand
- ✅ **Mobile-first responsive** - Works on all devices
- ✅ **Keyboard accessible** - Tab navigation supported
- ✅ **SEO friendly** - Semantic HTML structure

---

## 🐛 Troubleshooting

### **Logo not showing?**
- Check file name matches: `logo.png`
- Ensure it's in the same folder as index.html
- Try clearing browser cache (Ctrl+Shift+R)

### **Chatbot not opening?**
- Check browser console for errors (F12)
- Ensure script.js is loaded
- Verify no JavaScript errors

### **Mobile menu not working?**
- Check if mobile-menu-toggle click event is attached
- Verify CSS classes are correctly applied
- Test on actual mobile device, not just resized browser

### **Side-drawer not sliding?**
- Ensure service cards have correct `data-service` attributes
- Check serviceData object in script.js
- Verify transition CSS properties

---

## 📞 Support & Contact

**POWERTECH ENGINEERS**  
48/3/C/24/B5, Dhabadi, Vadagaon Budruk  
Pune, Maharashtra 411041

📞 **Phone:** +91 98765 43210  
📧 **Email:** info@powertechengineers.in

---

## 📝 License

© 2025 POWERTECH ENGINEERS. All rights reserved.

---

## 🎉 Launch Checklist

Before going live, verify:

- [ ] Logo uploaded and displaying
- [ ] Phone number updated everywhere
- [ ] Email address updated
- [ ] Company address correct
- [ ] All links working (tel:, mailto:, internal anchors)
- [ ] Tested on mobile devices
- [ ] Tested on different browsers (Chrome, Safari, Firefox)
- [ ] Google Analytics connected (if using)
- [ ] Forms submitting correctly
- [ ] Chatbot functioning
- [ ] Emergency FAB clickable
- [ ] All service modals opening
- [ ] Custom domain configured (if applicable)

---

**Your website is ready to generate leads!** 🚀

For technical support or customization requests, contact your web developer.
