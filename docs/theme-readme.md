# OSEP-16 Jekyll Theme
## Vintage Maritime Expedition Aesthetic

**Theme Name:** Expedition Maritime  
**Version:** 1.0  
**Date:** November 2025  
**Author:** OSEP-16 Project

---

## Overview

This custom Jekyll theme brings a **vintage maritime chart aesthetic** to the Open-Source Expedition Proa project website. It combines the weathered beauty of 1950s nautical charts with modern expedition gear design language.

### Design Philosophy

**Aesthetic Direction:** Vintage Maritime Charts meets Modern Expedition Gear

**Inspired by:**
- 1950s nautical navigation charts
- Field expedition notebooks
- Ocean exploration journals
- Vintage compass rose designs
- Weathered ship's logs

**Color Palette:**
- Ocean depths (deep blues)
- Weathered sand (warm beiges)
- Coral accents (rust oranges)
- Compass gold (brass tones)
- Chart ink (dark grays)

**Typography:**
- **Display:** Courier Prime (monospace, typewriter-style)
- **Headings:** Crimson Text (elegant serif)
- **Body:** Crimson Text (readable serif)
- **Navigation:** Courier Prime (expedition-gear style)

---

## What's Included

```
jekyll-site/
├── _layouts/
│   ├── default.html      # Base layout with header/footer
│   ├── home.html         # Homepage with hero section
│   └── page.html         # Standard page layout
├── _includes/
│   ├── header.html       # Navigation header
│   └── footer.html       # Site footer
├── assets/
│   ├── css/
│   │   └── main.css      # Complete theme stylesheet (~600 lines)
│   └── js/
│       └── main.js       # Interactive enhancements
└── _config.yml           # Jekyll configuration
```

---

## Installation

### Step 1: Files are Already in Place

The theme files have been copied to your Jekyll site at:
`/mnt/user-data/outputs/expedition-proa-project/jekyll-site/`

### Step 2: Update _config.yml

The `_config.yml` already references the theme. No changes needed unless you want to customize navigation or site metadata.

### Step 3: Use Layouts in Your Pages

Update your markdown files to use the new layouts:

**Homepage (index.md):**
```yaml
---
layout: home
title: Home
---
```

**Standard Pages:**
```yaml
---
layout: page
title: About
subtitle: Optional subtitle here
---
```

**Custom Collections:**
The `_config.yml` already sets up layouts for:
- Designs → `layout: design`
- Build Guides → `layout: guide`
- History → `layout: article`

---

## Theme Features

### 1. Typography

**Beautiful, characterful fonts:**
- Crimson Text for elegant readability
- Courier Prime for expedition/technical feel
- NO generic fonts (Arial, Inter, Roboto)

### 2. Color System

**CSS Variables for easy customization:**
```css
:root {
  --ocean-deep: #1a3a52;
  --sand-light: #f5e6d3;
  --coral-accent: #d97742;
  --compass-gold: #c9a961;
  /* ... and more */
}
```

Change these in `main.css` to adjust the entire color scheme.

### 3. Visual Elements

**Weathered paper texture:**
- Subtle grid pattern background
- Noise overlay for authentic feel
- Gradient accents

**Navigation:**
- Expedition patch-style site title
- Compass point navigation links
- Hover animations with gold underline

**Content Cards:**
- Field note aesthetic
- Border accents with shadows
- Hover lift effect

### 4. Special Components

**Hero Section (home layout):**
- Large title with animated entry
- Call-to-action button
- Gradient divider

**Feature Cards:**
- 4-column grid (responsive)
- Icon + title + description
- Animated hover effects

**Stats Row:**
- Highlight key numbers
- Centered display
- Background accent bar

**Tables:**
- Chart data aesthetic
- Dark ocean header
- Hover row highlighting

**Code Blocks:**
- Field notebook style
- Left border accent
- Copy button on hover

### 5. Animations

**Staggered fade-in:**
- Content cards animate on page load
- Sequential delays create rhythm

**Scroll-triggered:**
- Cards fade in as you scroll
- Smooth intersection observer

**Hover states:**
- Buttons lift and shadow
- Links change color
- Cards translate upward

### 6. Responsive Design

**Mobile-optimized:**
- Flexible grid layouts
- Stacked navigation on small screens
- Readable font sizes scale down
- Touch-friendly tap targets

**Breakpoint:** 768px

---

## Using the Theme

### Homepage Example

```markdown
---
layout: home
title: Home
---

Your homepage content here. The hero section is automatically generated from:
- `site.title` (from _config.yml)
- `site.tagline` (from _config.yml)
- `site.description` (from _config.yml)

## Your First Section

Add your content here...

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🎣</div>
    <h3>Feature Title</h3>
    <p>Feature description...</p>
  </div>
  <!-- Repeat for more features -->
</div>
```

### Adding Feature Cards

```html
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🌊</div>
    <h3>Ocean Tested</h3>
    <p>Based on 3000 years of Pacific Islander wisdom</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔧</div>
    <h3>Easy Build</h3>
    <p>55 hours with no welding required</p>
  </div>
</div>
```

### Adding Stats Row

```html
<div class="stats-row">
  <div class="stat">
    <span class="stat-number">16'</span>
    <span class="stat-label">Length</span>
  </div>
  
  <div class="stat">
    <span class="stat-number">$2,800</span>
    <span class="stat-label">Total Cost</span>
  </div>
</div>
```

### Adding Content Cards

```html
<div class="content-card">
  <h3>Aluminum Construction</h3>
  <p>Riveted 5052-H32 aluminum panels...</p>
</div>
```

### Adding Specification Boxes

```html
<div class="spec-box">
  <strong>Material:</strong> 5052-H32 Aluminum, 1/8" thick<br>
  <strong>Weight:</strong> 68 lbs<br>
  <strong>Capacity:</strong> 500 lbs
</div>
```

---

## Customization

### Changing Colors

Edit `/assets/css/main.css` at the top:

```css
:root {
  --ocean-deep: #1a3a52;     /* Change to your blue */
  --coral-accent: #d97742;   /* Change to your accent */
  --compass-gold: #c9a961;   /* Change to your highlight */
  /* ... etc */
}
```

### Changing Fonts

1. Update Google Fonts link in `_layouts/default.html`
2. Update CSS variables in `main.css`:

```css
:root {
  --font-heading: 'Your Font', serif;
  --font-body: 'Your Font', sans-serif;
  --font-display: 'Your Monospace', monospace;
}
```

### Adding Navigation Links

Edit `_config.yml`:

```yaml
nav_links:
  - title: "New Page"
    url: /new-page/
```

### Customizing Footer

Edit `_includes/footer.html` to change:
- Footer sections
- Links
- Copyright text
- Acknowledgments

---

## JavaScript Features

The `main.js` file includes:

1. **Smooth scroll** for anchor links
2. **Active nav highlighting** for current page
3. **Scroll animations** for content cards
4. **External link handling** (open in new tab)
5. **Code block copy buttons** (hover to reveal)
6. **Table of contents generator** (optional)
7. **Print-friendly** details expansion

### Enabling Table of Contents

Uncomment line 81 in `main.js`:

```javascript
generateTableOfContents();
```

This auto-generates a TOC from H2 and H3 headings.

---

## Typography Guidelines

### Heading Hierarchy

```markdown
# H1 - Page Title (3.5rem, underline accent)
## H2 - Major Sections (2.5rem, top margin)
### H3 - Subsections (1.8rem)
#### H4 - Detail Headers (1.4rem, uppercase, monospace)
```

### Text Formatting

```markdown
**Bold text** for emphasis
*Italic text* for quotes or terms
`Code text` for technical terms
```

### Lists

```markdown
- Bullet points for features
- Nested lists supported
  - Sub-items indented

1. Numbered lists for steps
2. Sequential instructions
```

### Blockquotes

```markdown
> "The ocean connects all things"
> — Pacific Islander proverb
```

Displays with:
- Gold left border
- Italic text
- Large quotation mark decoration
- Light background

---

## Special Styling Classes

### Phase Indicators

```html
<span class="phase-indicator">Phase 1</span> Cut all panels
```

### Wave Dividers

```html
<div class="wave-divider"></div>
```

### Buttons

```html
<a href="/build/" class="btn">Get Started</a>
<a href="/download/" class="btn btn-primary">Download Files</a>
```

---

## Browser Support

**Tested and working:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Progressive enhancement:**
- Animations degrade gracefully
- Grid layouts have fallbacks
- Fonts fallback to system defaults

---

## Performance

**Optimized for speed:**
- CSS is single file (no imports)
- Minimal JavaScript (vanilla, no frameworks)
- Google Fonts with display=swap
- Intersection Observer for scroll animations

**Lighthouse scores (target):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Accessibility

**WCAG 2.1 AA compliant:**
- Sufficient color contrast ratios
- Semantic HTML5 structure
- ARIA labels on navigation
- Keyboard navigation support
- Focus visible states
- Alt text reminders in images

---

## Print Styles

The theme includes print-specific CSS:

```css
@media print {
  /* Hide navigation and footer */
  /* Clean white background */
  /* Page break avoidance */
  /* Underlined links */
}
```

Perfect for printing build guides and documentation.

---

## Development

### Local Testing

```bash
cd /mnt/user-data/outputs/expedition-proa-project/jekyll-site
jekyll serve
```

Visit `http://localhost:4000`

### File Watching

Jekyll auto-reloads on file changes. Edit CSS/HTML and refresh browser.

---

## Troubleshooting

### Styles not loading?

Check that `main.css` path is correct in `default.html`:
```html
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
```

### Fonts not showing?

Verify Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

### JavaScript not working?

Check browser console for errors. Ensure `main.js` is linked:
```html
<script src="{{ '/assets/js/main.js' | relative_url }}"></script>
```

### Layouts not applying?

Verify front matter in markdown files:
```yaml
---
layout: home  # or page, default, etc.
---
```

---

## Credits

**Design & Development:** OSEP-16 Project Team  
**Inspired by:** Pacific Islander navigation traditions  
**Built with:** Jekyll, CSS3, vanilla JavaScript  
**Fonts:** Courier Prime (Vernon Adams), Crimson Text (Sebastian Kosch)

---

## License

This theme is part of the OSEP-16 Open-Source Expedition Proa project.

**License:** Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)

You are free to:
- Use this theme for any project
- Modify and adapt the design
- Share with attribution

---

## Version History

**v1.0** (November 2025)
- Initial release
- Vintage maritime aesthetic
- Full responsive layout
- Interactive JavaScript features
- Print-friendly styles

---

**May your builds be smooth and your sailing be fair!** 🌊⛵
