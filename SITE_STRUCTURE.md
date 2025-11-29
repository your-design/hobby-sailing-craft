# Jekyll Site Architecture

This document explains how the Open-Source Expedition Proa documentation site is organized.

## Directory Structure

```
jekyll-site/
├── _config.yml              # Site configuration
├── index.md                 # Homepage
├── Gemfile                  # Ruby dependencies
├── SITE_STRUCTURE.md        # This file
│
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── design.html          # Design documentation pages
│   ├── guide.html           # Build guide pages
│   └── article.html         # Historical articles
│
├── _includes/               # Reusable components
│   ├── header.html          # Site navigation
│   ├── footer.html          # Footer with license info
│   ├── downloads.html       # Download buttons component
│   └── social.html          # Share buttons
│
├── _designs/                # Design documentation (collection)
│   ├── thesis.md            # Why proa architecture
│   ├── hull-form.md         # Main hull design
│   ├── ama-design.md        # Outrigger design
│   ├── crossbeams.md        # Aka engineering
│   └── sail-rig.md          # Rigging system
│
├── _build_guides/           # Construction guides (collection)
│   ├── overview.md          # Build process overview
│   ├── 01-tools.md          # Required tools
│   ├── 02-cnc-cutting.md    # CNC panel cutting
│   ├── 03-hull-assembly.md  # Stitch-and-glue process
│   ├── 04-ama-build.md      # Outrigger construction
│   ├── 05-crossbeams.md     # Aka fabrication
│   ├── 06-rigging.md        # Sail installation
│   ├── 07-finishing.md      # Paint and details
│   └── 08-launch.md         # First sail checklist
│
├── _history/                # Historical articles (collection)
│   ├── proa-evolution.md    # 3000 years of proas
│   ├── micronesian-nav.md   # Traditional navigation
│   ├── western-experiments.md # European proa attempts
│   └── modern-revival.md    # Contemporary designs
│
├── _configurations/         # Multi-use guides (collection)
│   ├── solo-fishing.md      # Fishing mode setup
│   ├── family-sailing.md    # Family day configuration
│   └── expedition.md        # Camping trip prep
│
├── assets/                  # Static files
│   ├── css/
│   │   ├── main.css         # Custom styles
│   │   └── syntax.css       # Code highlighting
│   │
│   ├── js/
│   │   ├── site.js          # Interactive features
│   │   └── model-viewer.js  # 3D model display
│   │
│   ├── images/
│   │   ├── hero-render.png  # Homepage hero image
│   │   ├── diagrams/        # Technical illustrations
│   │   ├── historical/      # Historical photos
│   │   └── build-photos/    # Construction progress
│   │
│   └── downloads/           # Linked but stored elsewhere
│       └── README.md        # Points to external file storage
│
├── designs/                 # Static design pages
│   └── index.md             # Design overview landing
│
├── build/                   # Static build pages
│   └── index.md             # Build guide landing
│
├── history/                 # Static history pages
│   └── index.md             # History landing
│
├── downloads/               # Download portal
│   └── index.md             # File directory
│
├── community/               # Community resources
│   └── index.md             # Forum links, contact
│
└── cnc-mill/               # CNC build documentation
    ├── index.md             # CNC overview
    ├── frame.md             # Frame construction
    ├── electronics.md       # Wiring and control
    └── software.md          # CAM setup
```

## How Collections Work

Collections in Jekyll allow us to group related content that shares formatting/layout.

### Example: Design Collection

File: `_designs/hull-form.md`

```yaml
---
layout: design
title: "Asymmetric Hull Design"
subtitle: "Why Flat Leeward, Rounded Windward"
date: 2025-11-28
categories: [design, hydrodynamics]
cad_files: [hull-main-v1.step, hull-panels.dxf]
---

[Content here...]
```

This automatically:
- Uses the `design.html` layout
- Generates URL: `/designs/hull-form/`
- Adds to design index page
- Includes CAD file download links

## Adding New Content

### Add a Build Guide Step

1. Create file: `_build_guides/09-new-step.md`
2. Add front matter:
```yaml
---
layout: guide
title: "New Build Step"
step: 9
time: "2 hours"
difficulty: "Intermediate"
---
```
3. Write content
4. Jekyll automatically adds to build guide index

### Add a Historical Article

1. Create file: `_history/new-article.md`
2. Add front matter with `layout: article`
3. Write content
4. Appears in history section automatically

### Add a CAD File for Download

1. Upload to `/assets/downloads/cad/`
2. Reference in page front matter: `cad_files: [filename.step]`
3. Download component automatically generates buttons

## Customization Points

### Navigation (_includes/header.html)

Edit to add/remove menu items. Currently:
- Why Proa?
- Design
- Build Guides
- History
- Download Files
- Community

### Homepage Sections (index.md)

Organized as:
1. Hero (problem statement)
2. Solution (proa advantages)
3. Comparison table
4. Three configurations
5. Design highlights
6. Build method
7. Historical foundation
8. Downloads
9. Project status
10. Call to action

### Color Scheme (assets/css/main.css)

Variables:
```css
--primary-color: #0066CC (ocean blue)
--secondary-color: #FF6B35 (sunset orange)
--background: #F8F9FA (light gray)
--text: #212529 (dark gray)
```

## Development Workflow

### Local Testing

```bash
cd jekyll-site
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Build for Production

```bash
bundle exec jekyll build
# Outputs to _site/
```

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Update documentation"
git push origin main
# GitHub Actions auto-builds and deploys
```

## File Naming Conventions

### Build Guides
- Prefix with step number: `01-tools.md`, `02-cnc-cutting.md`
- Sorts automatically in sequence

### Design Documentation
- Descriptive names: `hull-form.md`, `sail-rig.md`
- No numbers (content is reference, not sequential)

### Historical Articles
- Topic-based: `proa-evolution.md`, `micronesian-nav.md`
- Chronological order handled by date in front matter

## External File Storage

Large files (CAD, STL, videos) should NOT be in git repository.

Recommended:
- GitHub Releases (for versioned CAD files)
- External CDN (for images/videos)
- Google Drive (for community shared files)

Link from `/downloads/` page to external storage.

## Markdown Extensions

Jekyll uses Kramdown with extensions:

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Code Blocks
```markdown
```python
# Syntax highlighted
```
```

### Equations (via MathJax)
```markdown
$$
F = ma
$$
```

### Callout Boxes (custom CSS)
```markdown
{: .callout-info}
Important information highlighted
```

## SEO & Metadata

Every page should have:

```yaml
---
title: "Page Title (50-60 chars)"
description: "Page description for search engines (150-160 chars)"
keywords: [proa, sailboat, CNC, DIY]
og_image: /assets/images/page-specific.png
---
```

## Analytics & Tracking

Add to `_includes/footer.html`:
- Google Analytics
- Download tracking
- Community metrics

## License & Attribution

Footer includes:
- CC BY-SA 4.0 license badge
- Link to full license text
- Attribution requirements for derivative works

## Accessibility

All images should have alt text:
```markdown
![Descriptive alt text](image.png)
```

All links should have descriptive text (not "click here").

## Future Expansion

Planned sections:
- `/builders/` - Community build logs
- `/modifications/` - User contributed improvements
- `/research/` - CFD analysis, testing data
- `/translations/` - Multi-language docs

---

**Questions? See [Jekyll Documentation](https://jekyllrb.com/docs/)**
