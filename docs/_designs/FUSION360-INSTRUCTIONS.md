---
layout: guide
title: "Fusion 360 Step-by-Step Guide"
step: 9
time: "2 hours"
difficulty: "Intermediate"
permalink: /designs/fusion360-instructions.html
---

# OSEP-16 Hull: Fusion 360 Step-by-Step Guide

## Overview

You're going to build a parametric 3D model of the asymmetric proa hull using lofting techniques. This guide assumes basic Fusion 360 familiarity.

**Time required:** 3-4 hours (first time)  
**Difficulty:** Intermediate  
**Result:** Fully parametric hull model ready for panel development

---

## Prerequisites

### Files You Need
1. [hull-points.csv](/assets/downloads/hull-points.csv) - Point cloud data
2. [hull-mathematics.md](/designs/hull-mathematics.html) - Reference dimensions


### Fusion 360 Setup
1. **Units:** Set to inches (Edit → Preferences → Default Units → Inches)
2. **Workspace:** Use "Design" workspace
3. **New Design:** Create new design, name it "OSEP-16_Main_Hull_v1"

---

## Part 1: Import Point Cloud

### Step 1.1: Prepare CSV Import

**Action:** Create → Insert → Insert Mesh

**Problem:** Fusion 360 doesn't directly import CSV as points.

**Workaround:** We'll use sketches to place points manually at key stations.

### Step 1.2: Alternative - Manual Station Sketching

**Better Approach:** Create sketches at each station with exact points.

**Action:**
1. Create → Create Sketch
2. Select XY Plane
3. We'll create 11 station sketches

---

## Part 2: Create Station Sketches (Cross-Sections)

### Station 5 (Center/Max Beam) - Start Here

This is the widest, most complex station. Master this, then the others are easier.

#### Step 2.1: Create Station 5 Sketch

**Action:**
1. Create → Create Sketch
2. Select XY Plane
3. Sketch → Project/Include → Offset Plane
4. Offset: 96" (this positions station 5 at hull center)
5. Name plane: "Station_5"

#### Step 2.2: Draw Station 5 Cross-Section

**Draw these points exactly** (refer to hull-mathematics.md):

**Leeward Side (Left):**
```
Point L1: X = -12", Y = -8"  (keel)
Point L2: X = -11", Y = -4"  (mid)
Point L3: X = -10", Y = 0"   (chine)
Point L4: X = -8",  Y = +8"  (turn)
Point L5: X = 0",   Y = +16" (sheer/deck)
```

**Windward Side (Right):**
```
Point W1: X = +12", Y = -8"  (keel)
Point W2: X = +11", Y = -4"  (curved)
Point W3: X = +10", Y = 0"   (chine)
Point W4: X = +8",  Y = +8"  (turn)
Point W5: X = 0",   Y = +16" (sheer - same as L5)
```

**Drawing Process:**

1. **Sketch → Spline → Control Point Spline**

2. **Leeward side (flat):**
   - Click points L1, L2, L3, L4, L5 in sequence
   - Make segments nearly straight (adjust control points)
   - This creates the "flat" character

3. **Windward side (curved):**
   - Click points W1, W2, W3, W4, W5
   - Adjust control points to create smooth curve W1→W3
   - Keep W3→W5 similar to leeward side

4. **Connect ends:**
   - Line from L1 to W1 (keel bottom)
   - L5 and W5 are same point (sheer at centerline)

#### Step 2.3: Add Dimensions

**Critical dimensions to constrain:**

1. **Horizontal Sketch Dimension:**
   - L1 to origin: 12"
   - W1 to origin: 12"
   - L3 to origin: 10" (chine)
   - W3 to origin: 10" (chine)

2. **Vertical Sketch Dimension:**
   - L1 Y-value: -8" (keel depth)
   - L5 Y-value: +16" (sheer height)
   - L3 Y-value: 0" (chine at waterline)

3. **Make symmetric about Y-axis** where appropriate (sheer point)

#### Step 2.4: Finish Sketch

**Action:**
- Sketch → Finish Sketch
- Rename sketch: "Station_5_Section"

**Result:** You now have the master cross-section.

---

### Stations 0 & 10 (Bow/Stern Points)

These are simple - just single points.

#### Step 2.5: Create Bow/Stern Sketches

**Station 0 (Bow):**
1. Create Sketch on XY plane
2. Offset: 0" (at origin)
3. Draw single point: (0, 12)  - sheer
4. Draw single point: (0, -2) - keel
5. Finish sketch, name "Station_0_Point"

**Station 10 (Stern):**
1. Create Sketch on XY plane
2. Offset: 192" (full hull length)
3. Draw same points as Station 0
4. Finish sketch, name "Station_10_Point"

---

### Intermediate Stations (1-4, 6-9)

**Efficient method:** Copy Station 5, modify dimensions.

#### Step 2.6: Create Station 1

1. **Copy Station 5 sketch**
2. **Paste** at new offset plane: Z = 19.2"
3. **Edit dimensions:**
   - Beam (L/W 1): 6" (was 12")
   - Sheer height: 14" (was 16")
   - Keel height: -4" (was -8")
   - Chine beam: 5.5" (was 10")

**Reference table for all stations** (from hull-mathematics.md):

```
Stn | Z-offset | Max Beam | Sheer Height | Keel Height | Chine Beam
----|----------|----------|--------------|-------------|------------
1   | 19.2"    | 6"       | 14"          | -4"         | 5.5"
2   | 38.4"    | 9"       | 15"          | -6"         | 8.5"
3   | 57.6"    | 11"      | 16"          | -7"         | 10"
4   | 76.8"    | 11.5"    | 16"          | -7.5"       | 10.5"
5   | 96"      | 12"      | 16"          | -8"         | 10"
6   | 115.2"   | 11.5"    | 16"          | -7.5"       | 10.5"
7   | 134.4"   | 11"      | 16"          | -7"         | 10"
8   | 153.6"   | 9"       | 15"          | -6"         | 8.5"
9   | 172.8"   | 6"       | 14"          | -4"         | 5.5"
```

**Repeat for each station 1-4 and 6-9.**

**Tip:** Use parameters to make this faster (next section).

---

## Part 3: Parametric Design (Optional but Recommended)

### Step 3.1: Create Parameters

**Why:** Change one number, update entire hull.

**Action:**
1. Modify → Change Parameters
2. Add User Parameters:

```
Parameter Name    | Unit   | Expression | Comment
------------------|--------|------------|------------------------
LOA               | in     | 192        | Length overall
max_beam          | in     | 24         | Maximum beam
max_draft         | in     | 8          | Draft at centerline
sheer_height      | in     | 16         | Deck height at center
rocker            | in     | 6          | Total rocker (ends to center)
station_spacing   | in     | 19.2       | Distance between stations
```

### Step 3.2: Link Sketches to Parameters

**Edit each sketch:**
1. Right-click dimension → Edit
2. Change value to parameter name (e.g., `max_beam` instead of "12")
3. Repeat for all constrained dimensions

**Benefit:** Want a 17' hull? Change LOA to 204", entire model updates.

---

## Part 4: Loft the Hull Surface

Now comes the magic - turning 11 cross-sections into a 3D hull.

### Step 4.1: Create Loft

**Action:**
1. Create → Loft
2. **Profiles:** Select each station sketch in order (0 → 1 → 2 → ... → 10)
3. **Rails:** (Optional) Create sheer line and chine line as guide curves
4. **Operation:** New Body
5. Click OK

**Result:** Smooth hull surface flowing through all stations.

### Step 4.2: Verify Surface

**Check:**
1. Rotate model - no sharp edges or kinks?
2. Inspect curvature - smooth transitions?
3. Measure beam at station 5: Should be 24"
4. Measure length: Should be 192"

**Fix issues:**
- If kinked: Adjust spline control points in station sketches
- If bumpy: Add more intermediate stations
- If asymmetric: Check leeward vs windward curves

---

## Part 5: Add Internal Structure

### Step 5.1: Bulkheads

**Create bulkhead planes:**

1. Construct → Offset Plane
2. Create planes at:
   - Station 2 (38.4")
   - Station 4 (76.8")
   - Station 6 (115.2")
   - Station 8 (153.6")

**Intersect with hull:**

1. Create Sketch on each bulkhead plane
2. Sketch → Project/Include → Project (select hull surface)
3. This creates bulkhead outline
4. Add cutouts for:
   - Drainage (bottom)
   - Access hatches (top)
   - Weight reduction holes (sides)

### Step 5.2: Deck

**Create deck surface:**

1. Create Sketch on plane at Y = 16" (sheer height)
2. Project sheer line from hull
3. Offset inward 2" (deck has crown)
4. Extrude → Direction: down 0.25" (deck thickness)

---

## Part 6: Panel Development (3D → 2D for CNC)

This is critical - how to flatten the 3D hull into cutable panels.

### Step 6.1: Leeward Panel (Flat Side)

**Method: Surface Flatten (built-in Fusion tool)**

1. Inspect → Section Analysis
2. Select leeward surface
3. Create → Surface → Patch (if surface has holes)
4. **Manufacture → Fabrication → SMD Flatten** (Sheet Metal Development)

**Settings:**
- Face: Select leeward hull surface
- Stationary Edge: Bottom (keel line)
- Manufacturing Model: New Component

**Result:** Flat panel with exact shape, ready for CNC.

### Step 6.2: Windward Panel (Curved Side)

**Challenge:** Windward side has 3D curvature (can't flatten perfectly).

**Solution: Torturing Plywood**

1. Flatten using SMD Flatten (will show distortion)
2. Note distortion map
3. Plan panel with extra width (plywood will compress)
4. Create "torture jig" sketch showing required bends

**For OSEP-16:**
- Windward panel develops ~8% longer than flat projection
- Use 6mm plywood (flexible enough to bend)
- Pre-wet plywood before installation (easier bending)

### Step 6.3: Bottom Panel

1. Select bottom surface (keel line)
2. SMD Flatten
3. This panel is simpler (less curvature)

### Step 6.4: Export DXF for CNC

**Action:**
1. Right-click flattened component
2. Export → DXF
3. Save as: `OSEP16_Panel_Leeward.dxf`

**Repeat for:**
- Windward panel
- Bottom panel
- Bulkheads
- Deck

---

## Part 7: Nesting on 4'x8' Sheets

### Step 7.1: Import DXF to Nesting Software

**Options:**
- Fusion 360 CAM (built-in, nesting add-on)
- Deepnest (free, open-source)
- OptiNest (commercial)

**Process:**
1. Import all panel DXFs
2. Set material size: 48" x 96" (4'x8' sheet)
3. Set margin: 0.5" (blade clearance)
4. Auto-nest or manual arrange

**Goal:** Fit all panels on 6 sheets (3 for main hull, 2 for ama, 1 for bulkheads).

### Step 7.2: Generate Toolpaths

**In Fusion 360 CAM:**

1. Manufacture → Setup → New Setup
2. Stock: 4'x8' x 0.25" (6mm plywood)
3. Zero Point: Lower-left corner
4. Machining Origin: X0, Y0, Z0

**Create 2D Contour:**
1. 2D → 2D Contour
2. Select panel outline
3. Tool: 1/4" upcut spiral bit
4. Depth: 6.5mm (through-cut + 0.5mm into spoilboard)
5. Tabs: 4 per panel, 0.5" x 0.25" (holds part in place)

**Generate G-code:**
1. Actions → Post Process
2. Select post: Grbl / MACH3 / LinuxCNC (depends on your CNC)
3. Save as: `OSEP16_Sheet1_Panels.nc`

---

## Part 8: Verification & Quality Checks

### Step 8.1: Mass Properties

**Action:**
1. Inspect → Component Properties
2. Check mass (should be ~85 lbs for hull shell only)

**Material density for calculation:**
- 6mm Okoume plywood: 0.015 lb/in³
- Expected mass: ~85-90 lbs bare hull

### Step 8.2: Volume Calculation

**Action:**
1. Inspect → Measure → Volume
2. Select hull interior
3. Should match calculated 11.6 cu ft (20,019 cu in)

### Step 8.3: Waterline Check

**Action:**
1. Create plane at Y = 0 (designed waterline)
2. Inspect → Section Analysis
3. Verify hull sits correctly at DWL
4. Check: Beam at waterline = ~20" (immersed section)

---

## Part 9: Export for Documentation

### Step 9.1: Renderings

**Create hero images:**

1. Render → Render
2. Environment: Studio (clean white background)
3. Camera angles:
   - Isometric (3/4 view)
   - Side profile
   - Top plan view
   - Cross-section at station 5

**Settings:**
- Material: Wood (Okoume)
- Lighting: Studio soft
- Resolution: 1920x1080 minimum

### Step 9.2: Technical Drawings

**Create 2D drawings:**

1. Drawing → From Design
2. Create sheets:
   - Sheet 1: Overall dimensions (plan, profile, sections)
   - Sheet 2: Panel development (all flat panels)
   - Sheet 3: Bulkhead details
   - Sheet 4: Assembly sequence

**Export:**
- Format: PDF
- Scale: 1:10 (or fit to page)
- Save as: `OSEP16_Hull_Drawings_v1.pdf`

### Step 9.3: 3D Export

**Export 3D models:**

1. **STEP format** (universal CAD):
   - File → Export → STEP
   - Save as: `OSEP16_Hull_v1.step`

2. **STL format** (3D printing, visualization):
   - File → Export → STL
   - Resolution: High
   - Save as: `OSEP16_Hull_v1.stl`

3. **OBJ format** (web viewers):
   - File → Export → OBJ
   - Include textures
   - Save as: `OSEP16_Hull_v1.obj`

---

## Part 10: Tips & Troubleshooting

### Common Issues

**Issue: Loft creates twisted surface**
- **Fix:** Ensure all station sketches have same "start point" (e.g., keel centerline)
- Reorder loft profiles to flow smoothly

**Issue: Panel won't flatten (SMD Flatten fails)**
- **Fix:** Surface has too much Gaussian curvature
- Split surface into smaller patches
- Use approximation (slight stretching acceptable)

**Issue: Nesting doesn't fit on 6 sheets**
- **Fix:** Rotate panels for better packing
- Reduce margin slightly (0.5" → 0.375")
- Accept using 7 sheets instead of 6

**Issue: Parameters don't update entire model**
- **Fix:** Some dimensions not linked to parameters
- Edit each sketch, link all dimensions
- Use "Capture Design History" to trace dependencies

### Optimization Tips

**Speed up workflow:**
1. Use "Copy Sketch" for similar stations (faster than redraw)
2. Create templates for bulkheads
3. Save camera views for quick navigation
4. Use keyboard shortcuts (S = sketch, E = extrude, L = loft)

**Improve accuracy:**
1. Enable "Grid Snap" at 0.125" intervals
2. Use "Measure" tool frequently
3. Create construction geometry for alignment
4. Add reference points before lofting

---

## Part 11: Next Steps - Ama & Crossbeams

Once main hull is complete:

**Ama (Outrigger):**
- Similar process, simpler geometry (symmetrical)
- 12' length, 18" beam, 6" draft
- Fewer stations needed (7 instead of 11)
- Estimated time: 1-2 hours

**Crossbeams (Akas):**
- Simple cylinders, 4" OD aluminum tube
- Model mounting pylons on main hull
- Design quick-release mechanism
- Estimated time: 1 hour

---

## Completion Checklist

Before considering hull model "done":

- [ ] All 11 station sketches created and constrained
- [ ] Loft creates smooth, kink-free surface
- [ ] Mass properties verify (~85 lbs)
- [ ] Volume matches calculated (11.6 cu ft)
- [ ] All panels flattened successfully
- [ ] DXF files exported (leeward, windward, bottom)
- [ ] Nesting fits on 6 sheets or less
- [ ] G-code generated and verified
- [ ] Renderings created (4 angles minimum)
- [ ] Technical drawings exported (PDF)
- [ ] 3D files exported (STEP, STL, OBJ)
- [ ] Model uploaded to project repository

---

## Resources

**Fusion 360 Learning:**
- Autodesk Fusion 360 YouTube (official tutorials)
- Lars Christensen (boat design in Fusion)
- Product Design Online (lofting techniques)

**Boat Design:**
- Duckworks Magazine (amateur boatbuilding)
- WoodenBoat Forum (traditional methods)
- Boat Design Net (technical discussions)

**CAM & CNC:**
- Fusion 360 CAM tutorials (built-in)
- Winston Moy (CNC basics)
- NYC CNC (professional techniques)

---

**You now have everything to build the hull in Fusion 360.**

**Estimated total time:** 4-6 hours first attempt, 2-3 hours once practiced.

**Questions?** Refer to `hull-mathematics.md` for exact dimensions.

**Next:** Build the ama (outrigger) using similar process.
