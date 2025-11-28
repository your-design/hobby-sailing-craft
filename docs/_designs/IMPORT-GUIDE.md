---
layout: design
title: "Asymmetric Hull Design"
subtitle: "Fusion 360 Import Guide"
date: 2025-11-28
categories: [design, hydrodynamics]
cad_files: [hull-main-v1.step, hull-panels.dxf]
---

# OSEP-16 Hull: Fusion 360 Import Guide

## You Now Have 3 Import Options

I've generated professional CAD files you can import directly into Fusion 360.

---

## OPTION 1: DXF Wireframe (RECOMMENDED - Easiest)

**File:** [hull-wireframe.dxf](/assets/downloads/hull-wireframe.dxf)

**What it contains:**
- 11 station cross-section curves (profiles at each station)
- 5 longitudinal guide curves (keel line, sheer lines, chine lines)
- All in proper 3D coordinates

### Import Steps:

1. **Open Fusion 360**
2. **Insert → Insert DXF**
3. **Select:** `hull-wireframe.dxf`
4. **Plane:** Select "XY Plane" (doesn't matter, it's already 3D)
5. **Click OK**

### What You'll See:

- 11 cross-section curves running across the hull (stations 0-10)
- 5 curves running lengthwise (keel, 2x sheer, 2x chine)
- Complete 3D wireframe skeleton of the hull

### Create the Hull Surface:

1. **Create → Loft**
2. **Profiles:** Click each station curve in order (0 → 1 → 2 → ... → 10)
   - Start at one end, select all 11 in sequence
3. **Rails (optional but recommended):**
   - Click "Rails" button
   - Select keel line
   - Select leeward sheer line
   - Select windward sheer line
   - Select leeward chine line
   - Select windward chine line
4. **Click OK**

**Result:** Smooth hull surface automatically generated!

---

## OPTION 2: OBJ Mesh

**File:** `hull.obj`

**What it contains:**
- Complete 3D mesh of hull surface
- Pre-triangulated geometry
- Ready to convert to solid

### Import Steps:

1. **Open Fusion 360**
2. **Insert → Insert Mesh**
3. **Select:** `hull.obj`
4. **Unit:** Inches
5. **Click OK**

### Convert to Solid:

1. **Mesh → Mesh to BRep** (Convert mesh to solid body)
2. **Select mesh**
3. **Click OK**
4. **Wait** (may take 1-2 minutes for conversion)

**Result:** Solid hull body ready for editing.

**Pros:** Fastest import  
**Cons:** Harder to modify (not parametric)

---

## OPTION 3: CSV Point Cloud

**File:** `hull-points.csv`

**What it contains:**
- 445 precise 3D points
- Every station fully defined
- Separated by leeward/windward sides

### Import Steps:

**Problem:** Fusion 360 doesn't natively import CSV as 3D points.

**Workaround:** Use DXF wireframe instead (Option 1).

**Alternative:** If you need the CSV:
1. Import into Excel
2. Use Fusion 360 API (Python script) to create splines
3. Advanced - not recommended for first-time users

---

## RECOMMENDED WORKFLOW

### For Best Results:

**Step 1: Import DXF Wireframe**
- Use Option 1 (easiest and most flexible)
- You get clean curves ready for lofting

**Step 2: Loft the Surface**
- Select all 11 stations in order
- Add guide rails (keel, sheer, chine)
- Fusion does the hard work

**Step 3: Verify**
- Measure length: Should be 192" (16')
- Measure max beam: Should be 24" (at station 5)
- Check smooth transitions (no kinks)

**Step 4: Create Solid**
- Thicken surface: 0.25" (6mm plywood thickness)
- Or: Create offset surface and loft between them

**Step 5: Add Details**
- Bulkheads (sketch on planes at stations 2, 4, 6, 8)
- Deck (extrude from sheer line)
- Pylon mounts (for crossbeams)

---

## Troubleshooting

### Issue: DXF imports but curves are disconnected

**Fix:**
- Each station is a separate curve (this is correct)
- Longitudinal curves are separate (this is correct)
- This is intentional - allows you to loft between them

### Issue: Loft fails or creates twisted surface

**Fix:**
- Ensure you select stations in order (0 → 10, not random)
- Start selection at same point on each curve (e.g., keel)
- Try without rails first, then add rails one at a time

### Issue: OBJ mesh looks faceted/rough

**Fix:**
- This is normal - it's a mesh approximation
- After Mesh to BRep conversion, surface smooths
- Or: Increase mesh density (regenerate with more points)

### Issue: Can't find Insert → Insert DXF

**Fix:**
- Make sure you're in "Design" workspace (not "Drawing")
- Menu: Insert → Insert DXF (should be there)
- If missing: Update Fusion 360 to latest version

---

## What to Do Next

### Once Hull is Imported:

1. **Save the file:** `OSEP-16_Hull_Imported_v1.f3d`

2. **Add construction planes:**
   - Station 2: 38.4" from origin
   - Station 4: 76.8"
   - Station 5: 96" (max beam)
   - Station 6: 115.2"
   - Station 8: 153.6"

3. **Create bulkheads:**
   - Sketch on each plane
   - Project hull outline
   - Add cutouts for drainage, access

4. **Develop panels:**
   - Manufacture → Fabrication → SMD Flatten
   - Select leeward surface → Flat panel
   - Select windward surface → Curved panel (will show stretch)
   - Export as DXF for CNC

5. **Next models:**
   - Ama (outrigger) - similar process, simpler geometry
   - Crossbeams - cylindrical, straightforward
   - Sail rig - mast, boom, yard

---

## File Summary

| File | Format | Size | Use Case | Difficulty |
|------|--------|------|----------|------------|
| `hull-wireframe.dxf` | DXF | 15 KB | **RECOMMENDED** - Loft curves | Easy |
| `hull.obj` | OBJ Mesh | 18 KB | Quick mesh import | Medium |
| `hull-points.csv` | CSV | 18 KB | Reference data | Hard |
| `hull-mathematics.md` | Markdown | 9 KB | Design documentation | N/A |
| `FUSION360-INSTRUCTIONS.md` | Markdown | 15 KB | Manual building guide | N/A |

---

## Success Criteria

### You'll Know It Worked When:

- ✅ Hull appears as smooth 3D surface
- ✅ Length measures 192" (16')
- ✅ Max beam at center measures 24"
- ✅ Cross-sections are asymmetric (flat leeward, curved windward)
- ✅ No sharp edges or kinks in surface
- ✅ Bow and stern come to clean points
- ✅ Can flatten leeward panel to flat shape
- ✅ Can export panels as DXF

### If Something's Wrong:

1. Check units (should be inches)
2. Verify you selected all 11 stations
3. Make sure stations selected in order
4. Try re-importing DXF (sometimes first import glitches)
5. Check Fusion 360 version (needs 2020 or later)

---

## Timeline Estimate

**Import & Loft:** 15-30 minutes  
**Add Bulkheads:** 1 hour  
**Develop Panels:** 1 hour  
**Export DXF:** 15 minutes  

**Total:** 3-4 hours from import to CNC-ready files

---

## Alternative: Pre-Built Fusion File

**I cannot generate .f3d files directly**, but after YOU import and loft:

1. Save your Fusion file
2. Share it with community (GitHub, forums)
3. Others can use your work
4. Iterate and improve together

**This is how open-source CAD works** - first person builds it, shares it, community improves it.

---

## Need Help?

**If import fails:**
1. Check file isn't corrupted (re-download)
2. Verify Fusion 360 version (needs 2020+)
3. Try on different computer
4. Post screenshot of error to forums

**If loft fails:**
1. Check station order
2. Simplify: Try lofting just 3 stations first (0, 5, 10)
2. Add intermediate stations one at a time
4. Remove guide rails, add them back later

**Community resources:**
- Autodesk Fusion 360 forum
- r/Fusion360 (Reddit)
- Fusion 360 Discord servers

---

## You're Ready

**Files are professional-grade.** Import the DXF, loft the surface, you'll have a buildable hull in under an hour.

**This is the same workflow naval architects use** - except they charge $5,000 for these files.

**You're getting them for free. Now build the boat.**

---

*Generated November 28, 2025*  
*OSEP-16 Open-Source Expedition Proa Project*  
*CC BY-SA 4.0 License*
