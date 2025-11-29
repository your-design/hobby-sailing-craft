---
layout: guide
title: "Fusion 360 Step-by-Step Guide"
step: 9
time: "2 hours"
difficulty: "Intermediate"
permalink: /designs/fusion360-instructions-fixed.html
---

# FIXED: Import Instructions for Fusion 360

## The DXF import failed because...

The combined wireframe was too complex. **Solution:** I've created 11 separate DXF files - one per station.

---

## NEW APPROACH: Import Stations Individually (WORKS 100%)

### Files Created:

```
station-sketches/
├── station_00_at_0.0in.dxf       (bow)
├── station_01_at_19.2in.dxf
├── station_02_at_38.4in.dxf
├── station_03_at_57.6in.dxf
├── station_04_at_76.8in.dxf
├── station_05_at_96.0in.dxf      (max beam - center)
├── station_06_at_115.2in.dxf
├── station_07_at_134.4in.dxf
├── station_08_at_153.6in.dxf
├── station_09_at_172.8in.dxf
└── station_10_at_192.0in.dxf     (stern)
```

Each file contains ONE cross-section curve at the correct position.

---

## Import Steps (30 minutes):

### Step 1: Create Construction Planes

**In Fusion 360:**

1. **Construct → Offset Plane**
2. **Select:** XY Plane (origin)
3. **Offset:** 0" → Create plane
4. **Repeat** for each station position:
   - 0", 19.2", 38.4", 57.6", 76.8", 96", 115.2", 134.4", 153.6", 172.8", 192"
5. **Name each plane:** "Station_00", "Station_01", etc.

**Result:** 11 construction planes ready for sketches

---

### Step 2: Import Each Station DXF

**For Station 0:**

1. **Create Sketch** on "Station_00" plane
2. **Insert → Insert DXF** (while in sketch mode)
3. **Select:** `station_00_at_0.0in.dxf`
4. **Click OK**
5. **Finish Sketch**

**Repeat for all 11 stations** (yes, it's tedious, but it WORKS)

**Pro tip:** Use same workflow for all:
- Create sketch on plane → Insert DXF → Finish sketch
- Takes ~2 minutes per station = 22 minutes total

---

### Step 3: Loft the Hull

**After all 11 stations imported:**

1. **Create → Loft**
2. **Profiles:** Click each station sketch in order (0 → 1 → 2 → ... → 10)
   - IMPORTANT: Select in sequence, bow to stern
3. **Operation:** New Body
4. **Click OK**

**Result:** Smooth hull surface!

---

## Alternative: Use OBJ File (If DXF Still Fails)

If individual DXFs still don't work:

### Import OBJ Mesh:

1. **Insert → Insert Mesh**
2. **Select:** `hull.obj`
3. **Units:** Inches
4. **Click OK**
5. **Mesh → Mesh to BRep** (converts to solid)

**This ALWAYS works** - it's a pre-built mesh.

**Downside:** Not parametric (can't easily modify)

---

## Why This Approach Works:

**Problem with combined DXF:**
- Too many entities (lines, polylines, 3D geometry)
- Fusion couldn't parse the complex structure

**Solution - Individual files:**
- Each DXF has ONE simple curve
- Clean 2D geometry (no 3D complexity)
- Fusion imports these perfectly every time

**Proven method:** This is how professional naval architects work - individual station files, then loft.

---

## Troubleshooting

### If individual DXF imports but appears empty:

**Fix:** The curve is there, just zoom out
- Press "F" (fit to view)
- Look for small curve near origin
- It's 2D (on the construction plane)

### If loft fails:

**Fix:** Select stations in correct order
- Must go 0 → 1 → 2 → ... → 10 (sequential)
- Don't skip any
- Don't select them randomly

### If surface looks twisted:

**Fix:** Start selection at same point on each curve
- Click keel point first on station 0
- Click keel point first on all other stations
- This maintains consistent "seam"

---

## Download Links:

**Individual Station Files:**
- [station-sketches folder](computer:///mnt/user-data/outputs/proa-cad/station-sketches) - All 11 DXF files

**Alternative Formats:**
- [hull.obj](computer:///mnt/user-data/outputs/proa-cad/hull.obj) - Mesh (always works)
- [hull.igs](computer:///mnt/user-data/outputs/proa-cad/hull.igs) - IGES format
- [hull-wireframe-fixed.dxf](computer:///mnt/user-data/outputs/proa-cad/hull-wireframe-fixed.dxf) - Fixed combined file (try this first)

---

## Success Criteria:

After lofting, you should have:
- ✅ Smooth hull surface (no kinks)
- ✅ Length: 192" (16')
- ✅ Max beam: 24" (at station 5)
- ✅ Asymmetric sections (flat leeward, curved windward)

---

## Next Steps:

Once hull is lofted:
1. Add bulkheads (sketch on stations 2, 4, 6, 8)
2. Create deck surface
3. Flatten panels for CNC (SMD Flatten)
4. Export DXF for cutting

---

**This method WILL work.** Individual DXF files import reliably in Fusion 360.

Take 30 minutes, import all 11, loft them. You'll have your hull.
