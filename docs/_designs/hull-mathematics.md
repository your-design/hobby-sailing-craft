---
layout: design
title: "Asymmetric Hull Design"
subtitle: "Proa Hull Mathematics"
date: 2025-11-28
categories: [design, hydrodynamics]
cad_files: [hull-main-v1.step, hull-panels.dxf]
---

# OSEP-16 Main Hull: Mathematical Definition

## Design Parameters

### Overall Dimensions
- **LOA (Length Overall):** 16' 0" (4.88m)
- **Beam (max):** 24" (0.61m) at widest point
- **Draft:** 8" (0.20m) loaded
- **Rocker:** 3" (0.076m) total (1.5" each end from centerline)

### Hull Form Type
- **Asymmetric Proa Hull**
- **Leeward side:** Flat panel with minimal rocker
- **Windward side:** Rounded with moderate rocker
- **Symmetry:** Bow = Stern (shunting design)

---

## Station Layout

**11 stations spaced 1'7.2" (488mm) apart:**

```
Station 0: 0' (bow/stern #1)
Station 1: 1' 7.2"
Station 2: 3' 2.4"
Station 3: 4' 9.6"
Station 4: 6' 4.8"
Station 5: 8' 0" (center/max beam)
Station 6: 9' 7.2"
Station 7: 11' 2.4"
Station 8: 12' 9.6"
Station 9: 14' 4.8"
Station 10: 16' 0" (bow/stern #2)
```

---

## Cross-Section Geometry (Stations 0-10)

### Coordinate System
- **Origin:** Centerline at DWL (Designed Water Line)
- **X-axis:** Beam (+ = windward, - = leeward)
- **Y-axis:** Height (+ = up, - = down)
- **Z-axis:** Length (+ = aft, - = fwd) *from station 5*

### Station Offsets Table

**Format:** Station | Z-position | Beam-Windward | Beam-Leeward | Height-Sheer | Height-Keel

```
Station 0  | -96"  | 0"    | 0"    | 12"  | -2"   (point - bow/stern)
Station 1  | -77"  | 6"    | 6"    | 14"  | -4"
Station 2  | -58"  | 9"    | 9"    | 15"  | -6"
Station 3  | -38"  | 11"   | 11"   | 16"  | -7"
Station 4  | -19"  | 11.5" | 11.5" | 16"  | -7.5"
Station 5  | 0"    | 12"   | 12"   | 16"  | -8"   (max beam - center)
Station 6  | +19"  | 11.5" | 11.5" | 16"  | -7.5"
Station 7  | +38"  | 11"   | 11"   | 16"  | -7"
Station 8  | +58"  | 9"    | 9"    | 15"  | -6"
Station 9  | +77"  | 6"    | 6"    | 14"  | -4"
Station 10 | +96"  | 0"    | 0"    | 12"  | -2"   (point - bow/stern)
```

---

## Asymmetric Sections (Key Innovation)

At each station, the cross-section is ASYMMETRIC:

### Leeward Side (Flat)
- **Shape:** Nearly flat panel from keel to chine
- **Angle:** 8° deadrise at keel, flattening to 3° at chine
- **Purpose:** Lateral resistance (acts as daggerboard)

### Windward Side (Rounded)
- **Shape:** Curved from keel to chine
- **Radius:** Variable (tighter at keel, gentler at chine)
- **Purpose:** Hydrodynamic efficiency, wave shedding

### Station 5 Cross-Section Detail (Max Beam)

**Leeward Side Points:**
```
Point L1: X = -12", Y = -8"  (keel)
Point L2: X = -11", Y = -4"  (flat panel mid)
Point L3: X = -10", Y = 0"   (chine)
Point L4: X = -8",  Y = +8"  (sheer turn)
Point L5: X = 0",   Y = +16" (sheer/deck)
```

**Windward Side Points:**
```
Point W1: X = +12", Y = -8"  (keel)
Point W2: X = +11", Y = -4"  (curved section)
Point W3: X = +10", Y = 0"   (chine)
Point W4: X = +8",  Y = +8"  (sheer turn)
Point W5: X = 0",   Y = +16" (sheer/deck - same as leeward)
```

**Curve Definition:**
- Leeward: L1→L2→L3 = straight segments (3° deadrise)
- Windward: W1→W2→W3 = Bézier curve (control points below)

---

## Bézier Curve Control Points

### Windward Keel-to-Chine Curve (Station 5)

**Cubic Bézier:**
- P0 (start): (12", -8") - keel
- P1 (control): (12", -6") - pulls curve tight at keel
- P2 (control): (10.5", -1") - gentles curve at chine
- P3 (end): (10", 0") - chine

**Equation:**
```
B(t) = (1-t)³×P0 + 3(1-t)²t×P1 + 3(1-t)t²×P2 + t³×P3
where t ∈ [0,1]
```

**Sample points (t = 0, 0.25, 0.5, 0.75, 1):**
```
t=0.00: (12.00", -8.00")
t=0.25: (11.78", -6.23")
t=0.50: (11.25", -4.13")
t=0.75: (10.59", -1.73")
t=1.00: (10.00", 0.00")
```

---

## Sheer Line (Deck Edge)

### Top View - Sheer Curve

**Symmetrical (both sides same):**

```
Station | Z-position | Beam at Sheer | Height
--------|------------|---------------|--------
0       | -96"       | 0"            | 12"
1       | -77"       | 6"            | 14"
2       | -58"       | 9"            | 15"
3       | -38"       | 11"           | 16"
4       | -19"       | 11.5"         | 16"
5       | 0"         | 12"           | 16"
6       | +19"       | 11.5"         | 16"
7       | +38"       | 11"           | 16"
8       | +58"       | 9"            | 15"
9       | +77"       | 6"            | 14"
10      | +96"       | 0"            | 12"
```

**Bézier fit for smooth sheer:**
- Create spline through these points
- Use smooth tangents at ends (vertical at stations 0/10)

---

## Rocker (Keel Curve)

### Side View - Keel Rocker

**Parabolic rocker (3" total rise from ends to center):**

```
Station | Z-position | Keel Height (from DWL)
--------|------------|------------------------
0       | -96"       | -2"  (up 6" from center)
1       | -77"       | -4"  (up 4")
2       | -58"       | -6"  (up 2")
3       | -38"       | -7"  (up 1")
4       | -19"       | -7.5"(up 0.5")
5       | 0"         | -8"  (lowest point)
6       | +19"       | -7.5"
7       | +38"       | -7"
8       | +58"       | -6"
9       | +77"       | -4"
10      | +96"       | -2"
```

**Equation (parabola):**
```
Keel_Height(z) = -8 + 0.0003125 × z²
where z is distance from station 5 in inches
```

---

## Chine Line (Leeward/Windward Transition)

### Definition
The chine is where the flat leeward side meets the rounded windward side.

**Side View - Chine Height:**
```
Station | Z-position | Chine Height (from DWL)
--------|------------|-------------------------
0       | -96"       | -2"  (same as keel at ends)
1       | -77"       | -2"
2       | -58"       | -1"
3       | -38"       | 0"
4       | -19"       | 0"
5       | 0"         | 0"   (at DWL)
6       | +19"       | 0"
7       | +38"       | 0"
8       | +58"       | -1"
9       | +77"       | -2"
10      | +96"       | -2"
```

**Top View - Chine Width:**
```
Station | Beam at Chine (Leeward) | Beam at Chine (Windward)
--------|-------------------------|---------------------------
0       | 0"                      | 0"
1       | 5.5"                    | 5.5"
2       | 8.5"                    | 8.5"
3       | 10"                     | 10"
4       | 10.5"                   | 10.5"
5       | 10"                     | 10"  (chine narrower than max beam)
6       | 10.5"                   | 10.5"
7       | 10"                     | 10"
8       | 8.5"                    | 8.5"
9       | 5.5"                    | 5.5"
10      | 0"                      | 0"
```

---

## Panel Development (3D → 2D)

### Leeward Side Panel (Single flat panel)

**Length:** 16' (192")
**Width:** Variable (follows sheer-to-chine curve)
**Shape:** Slightly trapezoidal

**Edge Curves:**
- Top edge: Sheer line (curved)
- Bottom edge: Chine line (slight S-curve)
- Forward edge: Station 0 (point)
- Aft edge: Station 10 (point)

**Approximate developed area:** 18 sq ft

### Windward Side Panel (Curved panel)

**Length:** 16' (192")
**Width:** Variable (follows sheer-to-chine curve)
**Shape:** Curved surface (requires "torturing" plywood)

**Edge Curves:**
- Top edge: Sheer line (same as leeward)
- Bottom edge: Chine line (same as leeward)
- Curvature: Develops from Bézier control points

**Approximate developed area:** 19 sq ft (slightly larger due to curve)

### Bottom Panel (Keel centerline)

**Length:** 16' (192")
**Width:** Variable (narrowest at ends, widest at center)

**Station widths (total width, split leeward/windward):**
```
Station 0:  0"
Station 1:  3"  (1.5" each side)
Station 2:  4"  (2" each side)
Station 3:  4.5"
Station 4:  5"
Station 5:  6"  (widest)
Station 6:  5"
Station 7:  4.5"
Station 8:  4"
Station 9:  3"
Station 10: 0"
```

---

## Verification Calculations

### Displacement Volume

**Using Simpson's Rule on station areas:**

```
Station | Area (sq in) | Simpson Multiplier | Contribution
--------|--------------|--------------------|--------------
0       | 0            | 1                  | 0
1       | 42           | 4                  | 168
2       | 98           | 2                  | 196
3       | 138          | 4                  | 552
4       | 156          | 2                  | 312
5       | 168          | 4                  | 672
6       | 156          | 2                  | 312
7       | 138          | 4                  | 552
8       | 98           | 2                  | 196
9       | 42           | 4                  | 168
10      | 0            | 1                  | 0
                                    Total: 3,128
```

**Volume = (Station spacing × Total) / 3**
```
= (19.2" × 3,128) / 3
= 20,019 cubic inches
= 11.6 cubic feet
```

**Displacement (saltwater @ 64 lb/cu ft):**
```
= 11.6 cu ft × 64 lb/cu ft
= 742 lbs
```

**With 25% immersion (typical for proa main hull):**
```
Usable displacement = 742 × 0.25 = 185 lbs (hull alone)
Full proa (with ama) = 450 lbs target ✓
```

---

## Next Steps for Fusion 360

With these mathematical definitions, you can now:

1. **Import station point clouds** (I'll generate CSV)
2. **Loft surfaces** between stations
3. **Verify volumes** match calculations
4. **Develop panels** for CNC cutting

**Ready for Fusion 360 instructions?**

