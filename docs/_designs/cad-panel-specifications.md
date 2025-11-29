---
layout: page
title: "CAD Panel Specifications"
permalink: /designs/cad-panel-specifications.html
---

# CAD Panel Specifications
## OSEP-16 Aluminum Proa - Hard-Chine Geometry

**All dimensions in inches unless noted**

---

## DESIGN PHILOSOPHY

**Hard-chine design = flat panels only**

**Advantages:**
- ✅ Easy to cut on CNC plasma
- ✅ No complex 3D forming required
- ✅ Flat panels easier to rivet
- ✅ Strong structural geometry
- ✅ Proven design (every aluminum jon boat)

**Key feature:** Sharp chine edge creates turbulence = lateral resistance (like asymmetric hull)

---

## MAIN HULL PANELS

### Panel 1: Bottom (Keel Panel)

**Material:** 5052-H32 aluminum, 1/8" thick

**Dimensions:**
- Length: 192" (16 feet)
- Width: 24" at widest (Station 5)
- Shape: Tapered from bow to stern

**Geometry:**
- Bow (Station 0): 12" wide
- Station 2: 20" wide
- Station 5 (max beam): 24" wide  
- Station 8: 20" wide
- Stern (Station 10): 14" wide

**Rocker (bottom curve):**
- 3" rise at bow
- Flat at Station 5
- 2" rise at stern
- Creates gentle curve for performance

**Cut file:** `hull-bottom.dxf`

---

### Panel 2 & 3: Side Panels (Port and Starboard)

**Material:** 5052-H32 aluminum, 1/8" thick

**Dimensions (each):**
- Length: 192" (16 feet)
- Height at sheer: 15"
- Chine fold line: 7.5" from bottom edge

**Geometry:**
- Trapezoid shape
- Bow height: 18" (higher freeboard)
- Midship height: 15"
- Stern height: 16"

**Chine bend:**
- Angle: 120° (60° from horizontal)
- Bend line runs full length
- **Mark: "BEND LINE - 120°"**

**Important:** 
- Panel 2 = PORT (mark clearly)
- Panel 3 = STARBOARD (mark clearly)

**Cut files:** 
- `hull-side-port.dxf`
- `hull-side-starboard.dxf`

---

### Panel 4: Bow Panel

**Material:** 5052-H32 aluminum, 1/8" thick

**Dimensions:**
- Shape: Triangle
- Base: 24" (matches bottom panel at Station 0)
- Height: 36" (bow height)
- Angle at top: 60°

**Geometry:**
- Isosceles triangle
- Fold line at centerline (vertical)
- Creates sharp bow

**Cut file:** `hull-bow.dxf`

---

### Panel 5: Stern Panel

**Material:** 5052-H32 aluminum, 1/8" thick

**Dimensions:**
- Shape: Triangle
- Base: 14" (matches bottom at Station 10)
- Height: 32" (stern height)
- Angle at top: 70°

**Geometry:**
- Isosceles triangle
- Fold line at centerline
- Transom can be vertical or raked

**Cut file:** `hull-stern.dxf`

---

## BULKHEADS (Main Hull)

### Bulkhead Design (all 4 identical shape, different widths)

**Material:** 5052-H32 aluminum, 1/8" thick

**Purpose:**
- Structural stiffness
- Divide hull into watertight compartments
- Mounting points for crossbeams

### Bulkhead 1: Station 2

**Dimensions:**
- Width at bottom: 20"
- Height: 14"
- Shape: Trapezoid matching hull cross-section

**Cut file:** `bulkhead-sta2.dxf`

---

### Bulkhead 2: Station 4 (Forward Crossbeam)

**Dimensions:**
- Width at bottom: 22"
- Height: 14.5"
- **Special:** Holes for crossbeam bolts (4× 5/16")

**Cut file:** `bulkhead-sta4.dxf`

---

### Bulkhead 3: Station 6 (Aft Crossbeam)

**Dimensions:**
- Width at bottom: 22"
- Height: 14.5"
- **Special:** Holes for crossbeam bolts (4× 5/16")

**Cut file:** `bulkhead-sta6.dxf`

---

### Bulkhead 4: Station 8

**Dimensions:**
- Width at bottom: 20"
- Height: 14"

**Cut file:** `bulkhead-sta8.dxf`

---

## AMA (OUTRIGGER) PANELS

**Ama is same geometry as main hull, scaled 75%**

### Ama Panel Dimensions

| Panel | Main Hull | Ama (75% scale) |
|-------|-----------|-----------------|
| **Bottom length** | 192" | 144" (12 feet) |
| **Bottom max width** | 24" | 18" |
| **Side height** | 15" | 11" |
| **Bow height** | 18" | 13.5" |

**Cut files:**
- `ama-bottom.dxf`
- `ama-side-port.dxf`
- `ama-side-starboard.dxf`
- `ama-bow.dxf`
- `ama-stern.dxf`

**Bulkheads:**
- 2 bulkheads (Stations 3 and 7)
- Scaled 75% from main hull bulkheads

**Cut files:**
- `ama-bulkhead-sta3.dxf`
- `ama-bulkhead-sta7.dxf`

---

## CROSSBEAMS (AKAS)

### Crossbeam Specifications

**Material:** 6061-T6 aluminum square tube

**Dimensions:**
- Cross-section: 2" × 2" × 0.125" wall
- Length: 48" (4 feet)
- Quantity: 2 (front and rear)

**Mounting holes:**
- 4× 5/16" holes at each end
- Bolt pattern matches bulkhead holes

**Note:** Tube stock, not flat panel - no DXF cutting required

**Purchase:** Metal supplier or OnlineMetals.com

---

## PANEL NESTING FOR CNC CUTTING

### Sheet Layout Strategy

**Goal:** Minimize waste, efficient cutting

**4' × 8' Sheet #1: Main Hull Bottom + Bulkheads**
- Bottom panel (192" × 24" max)
- 4 bulkheads nested in remaining space
- Waste: ~15%

**4' × 8' Sheet #2: Main Hull Sides**
- Port side (192" × 18")
- Starboard side (192" × 18")
- Waste: ~25%

**4' × 8' Sheet #3: Bow, Stern, Ama Bottom**
- Bow triangle
- Stern triangle
- Ama bottom (144" × 18")
- Waste: ~20%

**4' × 8' Sheet #4: Ama Sides + Bulkheads**
- Ama port side
- Ama starboard side
- 2 ama bulkheads
- Waste: ~25%

**Total aluminum needed:** 4 sheets 4' × 8' × 1/8"

**Nested cut files:**
- `sheet1-hull-bottom-bulkheads.dxf`
- `sheet2-hull-sides.dxf`
- `sheet3-bow-stern-ama.dxf`
- `sheet4-ama-sides-bulkheads.dxf`

---

## RIVET HOLE PATTERN

**Holes are NOT pre-drilled on CNC**

**Why:** Drill holes after assembly for perfect alignment

**Exception:** Bulkhead crossbeam mounting holes CAN be CNC drilled (known positions)

**Rivet pattern details:** See construction manual

---

## DXF FILE FORMAT NOTES

**Units:** Inches

**Layer structure:**
- Layer 0: Cut path (outer edge of part)
- Layer 1: Bend lines (reference only, not cut)
- Layer 2: Text labels (part ID, bend angle, material)

**Export settings:**
- Format: AutoCAD 2013 DXF
- Precision: 0.001"
- All curves converted to polylines

**CAM import:**
- Select Layer 0 for cutting
- Ignore Layers 1 and 2

---

## 3D MODEL REFERENCE

**Full assembly 3D model:** `proa-complete-assembly.step`

**Use for:**
- Visualizing how panels fit together
- Checking clearances
- Planning assembly sequence
- Generating additional views if needed

**Software:** FreeCAD, Fusion 360, SolidWorks (any CAD that reads STEP format)

---

## PANEL MARKING PROCEDURE

**Before cutting:**

1. **Mark material orientation**
   - Use marker to indicate "TOP" on each sheet
   - Ensures all cuts are consistent

2. **Mark part IDs**
   - After cutting, immediately label each part
   - Use permanent marker
   - Example: "HULL-BOTTOM", "SIDE-PORT", "BULKHEAD-STA4"

3. **Mark bend lines**
   - On side panels, mark the chine bend line
   - Use straightedge and scribe
   - Label: "BEND 120° HERE"

4. **Mark assembly stations**
   - On bottom panel, mark Stations 0, 2, 4, 5, 6, 8, 10
   - Use center punch for permanent mark
   - Helps during bulkhead installation

---

## FILE DOWNLOAD

**All DXF files available in:** `/cad/` directory

**Files included:**

Main Hull (5 panels):
- hull-bottom.dxf
- hull-side-port.dxf
- hull-side-starboard.dxf
- hull-bow.dxf
- hull-stern.dxf

Bulkheads (4 panels):
- bulkhead-sta2.dxf
- bulkhead-sta4.dxf
- bulkhead-sta6.dxf
- bulkhead-sta8.dxf

Ama (5 panels + 2 bulkheads):
- ama-bottom.dxf
- ama-side-port.dxf
- ama-side-starboard.dxf
- ama-bow.dxf
- ama-stern.dxf
- ama-bulkhead-sta3.dxf
- ama-bulkhead-sta7.dxf

Nested layouts:
- sheet1-hull-bottom-bulkheads.dxf
- sheet2-hull-sides.dxf
- sheet3-bow-stern-ama.dxf
- sheet4-ama-sides-bulkheads.dxf

Reference:
- proa-complete-assembly.step

---

## TOLERANCES

**CNC plasma cutting:** ±0.010"

**Panel fit:** ±1/8" gap acceptable (sealant fills)

**Rivet holes:** Drill on-site for perfect alignment

**Critical dimensions:**
- Crossbeam bolt holes: ±0.005"
- All other features: ±0.010" adequate

---

**CAD specifications version 1.0 - Nov 2025**

**Note:** Actual DXF files to be generated from 3D model - specifications provided here for reference and manual creation if needed.
