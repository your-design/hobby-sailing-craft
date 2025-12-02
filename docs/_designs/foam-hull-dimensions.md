---
layout: page
title: "Foam Core Proa Hull"
permalink: /designs/foam-hull-dimensions.html
---

# Foam Core Proa Hull - Optimized Dimensions

## Adjusted from Aluminum Design for Foam Construction

**Material:** 50mm (2") XPS foam core + 6oz fiberglass skin  
**Total Weight Target:** 16 kg (35 lbs)
**Manufacturing:** CNC rotary mill shaped foam blank

---

# Foam Design Specifications

**Foam design:** Lightweight core, can be larger/lighter

**Adjustments due to foam:**
1. **Increased depth** - Foam floats higher, need more depth for ballast
2. **Slightly wider beam** - Foam needs more volume for same displacement
3. **Thinner walls** - Fiberglass skin is structural, foam is just core
4. **Smoother curves** - No hard chines (foam can do compound curves)

---

## MAIN HULL DIMENSIONS (All measurements in mm)

### Overall Specifications

| Dimension | Foam Design | Change | Reason |
|-----------|-------------|---------|---------|
| **Length (LOA)** | 4876mm (16'0") | None | Perfect length |
| **Beam (max)** | 660mm (26") | +50mm | More volume for buoyancy |
| **Depth (max)** | 430mm (17") | +49mm | Better ballast capacity |
| **Draft** | 127mm (5") | -25mm | Foam floats higher |
| **Weight** | 16 kg (35 lbs) | -50% | Foam + glass vs aluminum |

### Cross-Section Shape

**Foam:** Round-bilge (smooth compound curves)
**Why:** CNC rotary mill can shape smooth curves easily in foam

---

## STATION-BY-STATION DIMENSIONS

### Station Spacing: 609mm (24") intervals along 4876mm length

**9 stations total:**

| Station | Distance from Bow | Width (mm) | Depth (mm) | Shape Notes |
|---------|------------------|------------|------------|-------------|
| **0 (Bow)** | 0mm | 203mm (8") | 965mm (38") | Sharp entry, V-shape |
| **1** | 609mm | 356mm (14") | 660mm (26") | Transitioning |
| **2** | 1219mm | 508mm (20") | 508mm (20") | Forward shoulder |
| **3** | 1829mm | 610mm (24") | 457mm (18") | Approaching max beam |
| **4 (Mid)** | 2438mm | 660mm (26") | 430mm (17") | Maximum beam |
| **5** | 3048mm | 635mm (25") | 432mm (17") | Holding beam |
| **6** | 3658mm | 559mm (22") | 457mm (18") | Aft shoulder |
| **7** | 4267mm | 406mm (16") | 610mm (24") | Narrowing stern |
| **8 (Stern)** | 4876mm | 305mm (12") | 864mm (34") | Narrow exit |

---

## CROSS-SECTION PROFILES

### Station 0 (Bow) - Sharp Entry
```
Width: 203mm (8")
Depth: 965mm (38")
Shape: Deep V, 45° deadrise angle
Rocker: 762mm (30") rise above baseline

Profile points (mm from centerline):
- Keel: (0, -965)
- Port chine: (-102, -635)
- Port gunwale: (-102, 0)
- Starboard: Mirror symmetry
```

### Station 4 (Midship) - Maximum Beam
```
Width: 660mm (26")
Depth: 430mm (17")
Shape: Rounded bilge, 35° deadrise
Rocker: 0mm (baseline, lowest point)

Profile points (mm from centerline):
- Keel: (0, -430)
- Port turn of bilge: (-254, -279)
- Port gunwale: (-330, 0)
- Starboard: Mirror symmetry
```

### Station 8 (Stern) - Narrow Exit
```
Width: 305mm (12")
Depth: 864mm (34")
Shape: Rounded U, gentle exit
Rocker: 508mm (20") rise above baseline

Profile points (mm from centerline):
- Keel: (0, -864)
- Port side: (-152, -533)
- Port gunwale: (-152, 0)
- Starboard: Mirror symmetry
```

---

## FOAM BLANK REQUIREMENTS

### Cutting from 4' × 8' Sheets

**Hull requires:**
- 3× sheets XPS foam, 1220mm × 2440mm × 50mm (4' × 8' × 2")
- Cost: 3 × $35 = $105 for foam blank

**Cutting strategy:**
1. Rough-cut foam to 5000mm × 700mm × 500mm rectangular blank
2. Mount on CNC rotary axis (between centers)
3. Mill to final shape in 2-3 passes

**Foam waste:** ~40% (unavoidable for boat hull shape)

---

## AMA (OUTRIGGER) DIMENSIONS

**Scale:** 70% of main hull (smaller, lighter)

| Dimension | Main Hull | Ama | Notes |
|-----------|-----------|-----|-------|
| **Length** | 4876mm | 3413mm (11'2") | 70% scale |
| **Beam** | 660mm | 462mm (18") | 70% scale |
| **Depth** | 430mm | 301mm (12") | 70% scale |
| **Weight** | 16 kg | 6 kg (13 lbs) | 70% volume |

**Foam required:** 1 sheet (4' × 8' × 2")

---

## FOAM CORE THICKNESS

### Fiberglass Layup Schedule

**Exterior:**
- 6oz fiberglass cloth (2 layers)
- Epoxy resin saturation
- Total thickness: 1.5mm

**Interior:**
- 4oz fiberglass cloth (1 layer)
- Epoxy resin
- Total thickness: 0.8mm

**Total wall:** 50mm foam + 2.3mm glass = 52.3mm

**Structural strength:**
- Compressive: 172 kPa (25 PSI) - foam core
- Tensile: 68 MPa (10,000 PSI) - fiberglass skin
- Combined: Sandwich composite (very strong for weight)

---

## BULKHEAD POSITIONS

**4 bulkheads required:**

| Station | Position (mm from bow) | Purpose | Material | Thickness |
|---------|----------------------|---------|----------|-----------|
| **2** | 1219mm | Forward structural | 12mm plywood | Full-height |
| **4** | 2438mm | Midship, crossbeam mount | 12mm plywood | Full-height |
| **6** | 3658mm | Aft, crossbeam mount | 12mm plywood | Full-height |
| **7.5** | 4013mm | Stern structural | 12mm plywood | Partial-height |

**Bulkhead attachment:**
- Glassed into hull with 2 layers 6oz tape
- Epoxy filleted joints
- Not load-bearing (foam hull is monocoque)

---

## ROCKER (LONGITUDINAL CURVE)

**Keel line rises at bow and stern for wave performance**

| Position | Height above baseline |
|----------|---------------------|
| Station 0 (bow) | +762mm (30") |
| Station 1 | +381mm (15") |
| Station 2 | +127mm (5") |
| Station 4 (mid) | 0mm (baseline) |
| Station 6 | +76mm (3") |
| Station 7 | +254mm (10") |
| Station 8 (stern) | +508mm (20") |

**Smooth curve connects stations** (not straight lines)

---

## BUOYANCY CALCULATIONS

### Displacement

**Hull volume:** 0.42 m³ (420 liters)
- Foam core: 16 kg
- Fiberglass skin: 8 kg
- Fittings/hardware: 6 kg
- **Empty weight:** 30 kg (66 lbs)

**Water displacement at 430mm depth:**
- 0.42 m³ × 1000 kg/m³ = 420 kg capacity
- 420 kg - 30 kg = **390 kg payload (860 lbs)**

**With ama:**
- Ama displacement: 0.12 m³ = 120 kg
- Ama weight: 6 kg
- **Total capacity: 500 kg (1100 lbs)** with outrigger

---

## SHEER LINE (TOP EDGE)

**Graceful curve from bow to stern**

| Station | Sheer height above waterline |
|---------|---------------------------|
| 0 (bow) | 762mm (30") - High bow |
| 2 | 508mm (20") |
| 4 (mid) | 430mm (17") - Lowest sheer |
| 6 | 483mm (19") |
| 8 (stern) | 610mm (24") - Raised stern |

**Smooth fair curve** - no hard corners

---

## Key aspects of foam design

- Overall length (4876mm)
- Basic proa configuration
- Three-use system (fishing/sailing/expedition)
- Mounting point types (A/B/C/D)
- ✅ **Wider beam** (610mm → 660mm) - More buoyancy
- ✅ **Deeper hull** (381mm → 430mm) - Better stability
- ✅ **Rounded bilge** - Foam can do compound curves
- ✅ **Lighter weight** (31kg → 16kg) - 50% reduction
- ✅ **Higher sheer** - More freeboard for waves
- ✅ **Smoother curves** - No hard chines needed

---

## FUSION 360 PARAMETERS

### For Parametric Model

**User Parameters to create:**
```
LOA = 4876 mm (Length Overall)
BeamMax = 660 mm (Maximum Beam)
DepthMax = 430 mm (Maximum Depth)
Stations = 9 (Number of cross-sections)
StationSpacing = 609 mm (24 inches)
FoamThickness = 50 mm (2 inch core)
FiberglassThickness = 2.3 mm (layup schedule)
```

**Adjustable in design timeline** - change one parameter, whole hull updates

---

## MATERIAL REQUIREMENTS

### Foam Core

| Item | Specification | Quantity | Unit Cost | Total | Supplier |
|------|--------------|----------|-----------|-------|----------|
| **Main hull foam** | XPS, 1220×2440×50mm sheets | 3 | $35 | $105 | Home Depot |
| **Ama foam** | XPS, 1220×2440×50mm sheet | 1 | $35 | $35 | Home Depot |
| **Bulkhead ply** | 12mm marine plywood, 1220×2440 | 1 | $85 | $85 | Lumber yard |

**Foam Subtotal:** $225

### Fiberglass & Epoxy

| Item | Specification | Quantity | Unit Cost | Total | Supplier |
|------|--------------|----------|-----------|-------|----------|
| **Fiberglass cloth** | 6oz plain weave, 50" wide | 18 m | $8/m | $144 | Fiberglass Supply |
| **Epoxy resin** | 635 epoxy, gallon kit | 2 | $95 | $190 | US Composites |
| **Cabosil thickener** | Fumed silica, 1 lb | 1 | $18 | $18 | US Composites |
| **Roller covers** | 4" foam, solvent-proof | 12 | $2 | $24 | Hardware store |
| **Squeegees** | Plastic, various sizes | 3 | $5 | $15 | Hardware store |

**Fiberglass Subtotal:** $391

**TOTAL MATERIALS (hull + ama):** $616

---

## WEIGHT BREAKDOWN

### Complete Boat

| Component | Weight |
|-----------|--------|
| Main hull (foam + glass) | 16 kg (35 lbs) |
| Ama outrigger | 6 kg (13 lbs) |
| Bulkheads (4× plywood) | 4 kg (9 lbs) |
| Crossbeams (2× aluminum) | 3 kg (7 lbs) |
| Mounting hardware | 2 kg (4 lbs) |
| **BARE BOAT TOTAL** | **31 kg (68 lbs)** |

**With sailing rig:**
- Mast + boom: 8 kg (18 lbs)
- Sail: 3 kg (7 lbs)
- Running rigging: 2 kg (4 lbs)
- **SAILING CONFIG:** 44 kg (97 lbs)

**Still cartop-able solo!**

---

## CRITICAL DIMENSIONS FOR CNC

### Foam Blank Preparation

**Before CNC milling:**
1. Stack and glue 3 sheets XPS foam (50mm each)
2. Creates 150mm thick blank (overkill, but easier to clamp)
3. Rough-cut with bandsaw to 5000mm × 700mm × 500mm
4. Mark centerline and station positions

**CNC setup:**
1. Mount blank between rotary axis centers
2. Align centerline to rotation axis
3. Zero Z-axis to blank surface
4. Run surfacing operation to true up blank

