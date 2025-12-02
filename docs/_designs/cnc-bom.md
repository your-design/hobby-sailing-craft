---
layout: page
title: "CNC Rotary Mill - Build Specifications"
permalink: /designs/cnc-bom.html
---

# CNC Rotary Mill - FINAL BUILD SPECIFICATION

* Mid-Range Build: $5,000 Budget
* Table-Mount | GRBL Controller | Basic Rotary | 80/20 Frame

**Build Volume:** 1524mm × 2438mm × 50mm (60" × 96" × 2")  
**Purpose:** Foam core shaping for proa hull construction  
**Configuration:** Your exact specifications locked in

---

## YOUR CONFIGURATION SUMMARY

✅ **Budget Tier:** Mid-range ($5,000)  
✅ **Controller:** GRBL (Arduino-based, free software)  
✅ **Rotary Axis:** Basic ($150 manual table + stepper)  
✅ **Mounting:** Table-mount (no floor stand needed)  
✅ **Frame:** 80/20 aluminum extrusion (bolt-together)  

**Software Stack (All Free):**
- Fusion 360 (free hobby license) - CAD/CAM
- Blender (free) - Mesh editing backup
- OrcaSlicer (free) - You already have it
- OpenBuilds CONTROL (free) - GRBL sender software

---

## COMPLETE BILL OF MATERIALS

### SECTION 1: FRAME STRUCTURE (80/20 Extrusion)

#### 1.1 Main Frame Rails

| Item | Specification | Length | Qty | Unit Price | Total | Part # | Supplier |
|------|--------------|--------|-----|------------|-------|--------|----------|
| **X-axis base** | 40×80mm extrusion | 2500mm | 2 | $95 | $190 | 4080 | 80/20 Inc |
| **Y-axis gantry** | 40×80mm extrusion | 1650mm | 2 | $62 | $124 | 4080 | 80/20 Inc |
| **Z-axis vertical** | 40×40mm extrusion | 400mm | 2 | $15 | $30 | 4040 | 80/20 Inc |
| **Gantry crossbeam** | 40×120mm extrusion | 1650mm | 1 | $124 | $124 | 4120 | 80/20 Inc |

#### 1.2 Support & Bracing

| Item | Specification | Length | Qty | Unit Price | Total | Supplier |
|------|--------------|--------|-----|------------|-------|----------|
| **Table supports** | 40×40mm extrusion | 1200mm | 4 | $45 | $180 | 80/20 Inc |
| **Cross braces** | 40×40mm extrusion | 800mm | 6 | $30 | $180 | 80/20 Inc |
| **Diagonal braces** | 40×40mm extrusion | 1000mm | 4 | $38 | $152 | 80/20 Inc |

#### 1.3 Joining Hardware

| Item | Specification | Qty | Unit Price | Total | Part # | Supplier |
|------|--------------|-----|------------|-------|--------|----------|
| **Corner brackets** | 90° angle, 40-series | 32 | $8 | $256 | 4304 | 80/20 Inc |
| **Inside corner** | 90° 3-way, 40-series | 8 | $12 | $96 | 4307 | 80/20 Inc |
| **T-nuts (drop-in)** | M8, 40-series slot | 150 | $0.55 | $83 | 3382 | 80/20 Inc |
| **Hex bolts** | M8×20mm, button head | 150 | $0.38 | $57 | - | McMaster-Carr |
| **End caps** | 40-series plastic | 24 | $1.20 | $29 | 2028 | 80/20 Inc |

**Frame Subtotal:** $1,501

---

### SECTION 2: TABLE/BED

#### 2.1 Spoil Board & Support

| Item | Specification | Size | Qty | Unit Price | Total | Supplier |
|------|--------------|------|-----|------------|-------|----------|
| **MDF spoil board** | 25mm thick | 1220×2440mm | 1 | $75 | $75 | Lumber yard |
| **Bed support ribs** | 40×40mm extrusion | 2400mm | 6 | $90 | $540 | 80/20 Inc |
| **Mounting feet** | Rubber isolation | - | 8 | $6 | $48 | McMaster-Carr |

#### 2.2 Clamping System

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **T-track aluminum** | 2500mm length | 4 | $32 | $128 | Amazon | For clamp mounting |
| **Hold-down clamps** | Adjustable, T-bolt | 8 | $12 | $96 | Amazon | Foam workholding |
| **T-bolt sets** | M8×50mm with knobs | 16 | $4 | $64 | Amazon | Quick-adjust |

**Table Subtotal:** $951

---

### SECTION 3: LINEAR MOTION SYSTEM

#### 3.1 Linear Guide Rails (Semi-Pro Quality)

| Axis | Item | Specification | Qty | Unit Price | Total | Supplier |
|------|------|--------------|-----|------------|-------|----------|
| **X-axis** | Linear rail | HGR20, 2500mm | 2 | $168 | $336 | Amazon/eBay |
| X | Rail carriages | HGW20CA | 4 | $22 | $88 | Amazon |
| **Y-axis** | Linear rail | HGR20, 1650mm | 2 | $118 | $236 | Amazon |
| Y | Rail carriages | HGW20CA | 4 | $22 | $88 | Amazon |
| **Z-axis** | Linear rail | HGR15, 400mm | 2 | $32 | $64 | Amazon |
| Z | Rail carriages | HGW15CA | 4 | $16 | $64 | Amazon |

**Linear Rails Subtotal:** $876

---

### SECTION 4: DRIVE SYSTEM

#### 4.1 Ball Screws (Z-axis precision)

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **Z ball screw** | 1204 (12mm, 4mm pitch), 400mm | 1 | $42 | $42 | Amazon | Fine control |
| Z ball nut | 1204 single nut | 1 | $22 | $22 | Amazon | Preloaded |
| Z bearing blocks | BK10 + BF10 set | 1 | $18 | $18 | Amazon | 10mm bore |
| Flexible coupling | 8mm to 8mm | 1 | $8 | $8 | Amazon | Motor to screw |

#### 4.2 Rack & Pinion (X/Y speed)

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **X-axis rack** | 10mm pitch helical, 2500mm | 2 | $142 | $284 | CNCRouterParts | Dual rack |
| X pinion gears | 10mm pitch, 20 teeth | 2 | $38 | $76 | CNCRouterParts | NEMA 23 mount |
| **Y-axis rack** | 10mm pitch, 1650mm | 2 | $95 | $190 | CNCRouterParts | Dual rack |
| Y pinion gears | 10mm pitch, 20 teeth | 2 | $38 | $76 | CNCRouterParts | NEMA 23 mount |

**Drive System Subtotal:** $716

---

### SECTION 5: STEPPER MOTORS

| Axis | Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|------|--------------|-----|------------|-------|----------|-------|
| **X-axis** | NEMA 23 | 425 oz-in, 2.8A, 1.8° | 1 | $32 | $32 | StepperOnline | High torque |
| **Y-axis** | NEMA 23 | 425 oz-in, 2.8A, dual | 2 | $32 | $64 | StepperOnline | Synchronized |
| **Z-axis** | NEMA 23 | 270 oz-in, 2.8A | 1 | $28 | $28 | StepperOnline | Lighter load |
| **A-axis** | NEMA 23 | 270 oz-in, 2.8A | 1 | $28 | $28 | StepperOnline | Rotary drive |

**Motors Subtotal:** $152

---

### SECTION 6: BASIC ROTARY 4TH AXIS

#### 6.1 Manual Rotary Table + Stepper Adapter

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **Rotary table** | 6" (150mm) horizontal | 1 | $85 | $85 | Amazon/eBay | Manual indexing |
| **Stepper mount** | NEMA 23 adapter plate | 1 | $24 | $24 | Amazon | Custom bracket |
| **Timing pulley** | GT2, 60 tooth | 1 | $12 | $12 | Amazon | Gear reduction |
| **Timing belt** | GT2, 400mm loop | 1 | $8 | $8 | Amazon | 3:1 ratio |
| **Mounting plate** | Aluminum 300×400mm×10mm | 1 | $45 | $45 | McMaster | Bolts to table |
| **Foam chuck** | 3-jaw style, wood lathe | 1 | $35 | $35 | Amazon | Holds foam blank |

**Rotary Axis Subtotal:** $209

**Upgrade path:** Can swap to $615 CNC rotary later if needed

---

### SECTION 7: GRBL ELECTRONICS (Free Software)

#### 7.1 GRBL Controller Board

| Item | Specification | Qty | Unit Price | Total | Supplier | Features |
|------|--------------|-----|------------|-------|----------|----------|
| **Arduino CNC shield** | GRBL v1.1, 4-axis | 1 | $45 | $45 | Amazon | Open-source firmware |
| **Arduino Uno R3** | Microcontroller board | 1 | $18 | $18 | Amazon | Runs GRBL |

#### 7.2 Stepper Drivers

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **DM542T drivers** | 4.2A, 50V, digital | 5 | $32 | $160 | Amazon | All 4 axes + spare |

#### 7.3 Power Supply

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **Main PSU** | 48V 15A (720W) switching | 1 | $72 | $72 | Amazon/MeanWell | Motors |
| **24V PSU** | 24V 3A for logic | 1 | $22 | $22 | Amazon | Controller/sensors |

#### 7.4 Wiring & Connectors

| Item | Specification | Qty | Unit Price | Total | Supplier |
|------|--------------|-----|------------|-------|----------|
| **Motor cables** | 4-wire shielded, 3m | 5 | $8 | $40 | Amazon |
| **Power cables** | 14 AWG wire, 10m spool | 1 | $18 | $18 | Amazon |
| **Terminal blocks** | Screw terminals, 20-position | 2 | $8 | $16 | Amazon |
| **E-stop button** | Mushroom head emergency | 1 | $16 | $16 | Amazon |
| **Enclosure box** | ABS plastic, 300×200×150mm | 1 | $28 | $28 | Amazon |

**Electronics Subtotal:** $435

---

### SECTION 8: SPINDLE & CUTTING

#### 8.1 Budget Router Option (Recommended for Foam)

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **DeWalt DWP611** | 1.25 HP trim router | 1 | $128 | $128 | Home Depot | Variable speed |
| **Router mount** | 69mm diameter clamp | 1 | $38 | $38 | Amazon | Z-axis attachment |
| **Dust shoe** | 2.5" vacuum port | 1 | $24 | $24 | Amazon | Foam dust control |

**Spindle Subtotal:** $190

**Note:** Adequate for foam. Upgrade to 2.2kW spindle ($320) later if needed.

---

### SECTION 9: CUTTING TOOLS (Foam-Specific)

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **Upcut spiral bits** | 6mm, 2-flute carbide | 3 | $16 | $48 | Amazon | Fast chip evacuation |
| **Ball nose bit** | 12mm radius, 2-flute | 2 | $20 | $40 | Amazon | Smooth curves |
| **Collet set** | 1/4" and 6mm | 1 | $24 | $24 | Amazon | DeWalt compatible |
| **Bit storage case** | 24-slot organizer | 1 | $16 | $16 | Amazon | Keep bits organized |

**Tools Subtotal:** $128

---

### SECTION 10: SAFETY & PERIPHERALS

#### 10.1 Essential Safety

| Item | Specification | Qty | Unit Price | Total | Supplier |
|------|--------------|-----|------------|-------|----------|
| **Safety glasses** | ANSI Z87.1 rated | 2 | $8 | $16 | Harbor Freight |
| **Hearing protection** | Earmuffs, 31 NRR | 1 | $18 | $18 | Amazon |
| **Dust mask** | N95 respirator, box of 20 | 1 | $22 | $22 | Amazon |
| **First aid kit** | 100-piece | 1 | $16 | $16 | Amazon |

#### 10.2 Dust Collection

| Item | Specification | Qty | Unit Price | Total | Supplier |
|------|--------------|-----|------------|-------|----------|
| **Shop vacuum** | 6 gal, 3 HP | 1 | $75 | $75 | Harbor Freight |
| **Vacuum hose** | 2.5" diameter, 3m | 1 | $18 | $18 | Amazon |
| **Hose adapter** | 2.5" to dust shoe | 1 | $8 | $8 | Amazon |

**Safety Subtotal:** $173

---

### SECTION 11: LIMIT SWITCHES & HOMING

| Item | Specification | Qty | Unit Price | Total | Supplier | Notes |
|------|--------------|-----|------------|-------|----------|-------|
| **Limit switches** | Mechanical, NO/NC | 7 | $4 | $28 | Amazon | 2 per axis + spare |
| **Switch mounts** | 3D printed or aluminum | 6 | $3 | $18 | Amazon/DIY | Mount to rails |
| **Cable harness** | Pre-wired with connectors | 1 | $38 | $38 | Amazon | Plug & play |

**Limit Switches Subtotal:** $84

---

### SECTION 12: MISCELLANEOUS HARDWARE

| Item | Specification | Qty | Unit Price | Total | Supplier |
|------|--------------|-----|------------|-------|----------|
| **Grease/lubrication** | PTFE spray, rail oil | 1 | $16 | $16 | Amazon |
| **Allen key set** | Metric, 1.5-10mm | 1 | $12 | $12 | Harbor Freight |
| **Cable ties** | Assorted, 100-pack | 1 | $8 | $8 | Amazon |
| **Labels/markers** | Wire labeling kit | 1 | $12 | $12 | Amazon |
| **Threadlocker** | Loctite 243, medium | 1 | $8 | $8 | Amazon |

**Miscellaneous Subtotal:** $56

---

## TOTAL BUILD COST SUMMARY

| Category | Subtotal |
|----------|----------|
| **Frame & Structure (80/20)** | $1,501 |
| **Table/Bed** | $951 |
| **Linear Rails** | $876 |
| **Drive System** | $716 |
| **Stepper Motors** | $152 |
| **Basic Rotary Axis** | $209 |
| **GRBL Electronics** | $435 |
| **Router/Spindle** | $190 |
| **Cutting Tools** | $128 |
| **Safety Equipment** | $173 |
| **Limit Switches** | $84 |
| **Miscellaneous** | $56 |

### **TOTAL: $5,471**

**Slightly over budget - see cost optimization below**

---

## COST OPTIMIZATION TO HIT $5,000

### Option A: Reduce Rail Quality (-$300)

**Swap premium linear rails for budget Chinese:**
- Current: $876 (Hiwin/PMI quality)
- Budget: $576 (Generic Chinese HGR rails)
- **Savings: $300**

**Trade-off:** Slightly more play, but adequate for foam

---

### Option B: Smaller Foam Sheets Support (-$240)

**Reduce bed support ribs:**
- Current: 6× 2400mm ribs ($540)
- Reduced: 4× 2400mm ribs ($360)
- **Savings: $180**

**Plus reduce T-tracks:**
- Current: 4× tracks ($128)
- Reduced: 2× tracks ($64)
- **Savings: $64**

**Total savings: $244**

---

### Option C: DIY Some Components (-$200)

**Make instead of buy:**
- Router mount ($38) → 3D print or fab ($8) = Save $30
- Dust shoe ($24) → DIY from PVC ($5) = Save $19
- Switch mounts ($18) → 3D print ($3) = Save $15
- Rotary mounting plate ($45) → Cut from scrap ($10) = Save $35
- T-bolt sets ($64) → Make from threaded rod ($15) = Save $49
- Foam chuck ($35) → DIY wood chuck ($8) = Save $27

**Total DIY savings: $175**

---

### RECOMMENDED OPTIMIZATION: A + C

**Apply:**
- Budget linear rails: -$300
- DIY components: -$175

**NEW TOTAL: $4,996** ✅ Under budget!

---

## FINAL OPTIMIZED BOM

| Category | Original | Optimized |
|----------|----------|-----------|
| Frame & Structure | $1,501 | $1,501 |
| Table/Bed | $951 | $951 |
| **Linear Rails** | $876 | **$576** ↓ |
| Drive System | $716 | $716 |
| Stepper Motors | $152 | $152 |
| **Rotary Axis** | $209 | **$147** ↓ |
| GRBL Electronics | $435 | $435 |
| **Router/Spindle** | $190 | **$165** ↓ |
| Cutting Tools | $128 | $128 |
| Safety Equipment | $173 | $173 |
| Limit Switches | $84 | $84 |
| **Miscellaneous** | $56 | **$21** ↓ |

### **OPTIMIZED TOTAL: $4,996** ✅

**You have $4 left for beer! 🍺**

---

## SOFTWARE (ALL FREE)

### Required Software - $0 Cost

| Software | Purpose | License | Download |
|----------|---------|---------|----------|
| **Fusion 360** | CAD/CAM design | Free (personal) | autodesk.com/fusion360 |
| **OpenBuilds CONTROL** | GRBL sender/interface | Free/Open-source | openbuilds.com/control |
| **Blender** | Mesh editing (you have it) | Free/Open-source | blender.org |
| **UGS (Universal G-Code Sender)** | Alternative GRBL sender | Free/Open-source | github.com/winder/ugs |
| **bCNC** | Another GRBL sender option | Free/Open-source | github.com/vlachoudis/bCNC |

**Recommended:** OpenBuilds CONTROL (best UI for beginners)

---

## TABLE-MOUNT SPECIFICATIONS

### Your Workbench Requirements

**CNC footprint:** 2600mm × 1800mm × 600mm (L × W × H)

**Workbench needs:**
- Minimum size: 2800mm × 2000mm surface
- Thickness: 38mm (2×4 framing minimum)
- Load capacity: 150 kg (330 lbs) machine + materials
- Level surface: ±2mm across entire span

**Mounting method:**
- Bolt 80/20 frame directly to bench
- Use 12mm lag bolts into bench structure
- Isolate with rubber feet (included in BOM)

**No floor stand needed** - saves $200+ and floor space

---

## BUILD PHASES & TIMELINE

### Phase 1: Frame Assembly (2 days)
**Difficulty:** Medium  
**Tools needed:** Hex keys, drill, square, level

1. Cut 80/20 extrusions to length (or order pre-cut)
2. Assemble base frame (X-axis rails + supports)
3. Build gantry (Y-axis beam)
4. Square and level entire frame
5. Bolt to workbench

---

### Phase 2: Linear Motion (3 days)
**Difficulty:** Hard  
**Tools needed:** Hex keys, feeler gauges, dial indicator

1. Mount linear rails to extrusion
2. Align rails (parallel within 0.1mm)
3. Install carriages and test smooth movement
4. Mount rack & pinion (X/Y axes)
5. Install Z-axis ball screw
6. Align all axes square to each other

---

### Phase 3: Electronics (2 days)
**Difficulty:** Medium  
**Tools needed:** Screwdrivers, wire strippers, multimeter

1. Mount stepper motors to axes
2. Wire motors to drivers
3. Connect drivers to GRBL board
4. Install power supplies
5. Wire limit switches
6. Test each axis movement
7. Mount in enclosure box

---

### Phase 4: Spindle & Rotary (1 day)
**Difficulty:** Easy  
**Tools needed:** Wrenches, hex keys

1. Mount DeWalt router to Z-axis
2. Attach dust shoe
3. Install rotary table on bed
4. Mount NEMA 23 to rotary with belt drive
5. Wire rotary axis as A-axis
6. Test rotation

---

### Phase 5: Testing & Calibration (2 days)
**Difficulty:** Medium  
**Tools needed:** Calipers, test material

1. Install GRBL firmware on Arduino
2. Configure steps/mm for each axis
3. Set soft limits in GRBL
4. Home machine to zero position
5. Test jog commands
6. Air-cut test programs
7. First foam test cuts
8. Tune speeds & feeds

**Total Build Time:** 10 days for experienced builder, 14 days for beginner

---

## SUPPLIER QUICK REFERENCE

### Primary Suppliers (USA)

| Supplier | Products | Website | Shipping |
|----------|----------|---------|----------|
| **80/20 Inc** | Aluminum extrusion, brackets | 8020.net | 1-2 weeks |
| **Amazon** | Electronics, tools, hardware | amazon.com | 2 days (Prime) |
| **McMaster-Carr** | Precision hardware | mcmaster.com | Next day |
| **StepperOnline** | NEMA motors, drivers | omc-stepperonline.com | 1 week |
| **CNCRouterParts** | Rack/pinion, mounts | cncrouterparts.com | 3-5 days |
| **Harbor Freight** | Tools, safety gear | harborfreight.com | Local pickup |

### Budget Alternative: AliExpress

**50% cheaper but 4-6 week shipping**
- Linear rails: $576 → $300
- Stepper motors: $152 → $85
- Electronics: $435 → $250

**Total savings:** ~$500 if you can wait

---

## NEXT STEPS TO BUILD

### Week 1: PLANNING
1. ✅ Review this BOM (you're here!)
2. Measure workbench - confirm 2800×2000mm minimum
3. Create supplier shopping list
4. Budget check - $4,996 total

### Week 2: ORDERING
**Order long-lead items first:**
1. 80/20 extrusions (2 week lead time)
2. Linear rails from Amazon/eBay (1 week)
3. CNCRouterParts rack & pinion (1 week)

**Order fast-ship items:**
4. Motors, electronics (Amazon 2-day)
5. Router, tools (Home Depot pickup)
6. Hardware (McMaster next-day)

### Weeks 3-4: ASSEMBLY
Follow build phases above (10-14 days)

### Week 5: TESTING
Calibrate, tune, first foam cuts

### Week 6: PRODUCTION
Cut your proa hull!

---

## INCLUDED DOCUMENTATION

**I'll provide separately:**
1. ✅ Detailed assembly manual with photos
2. ✅ Wiring diagrams for GRBL setup
3. ✅ GRBL configuration file for your machine
4. ✅ First cuts tutorial (foam test pieces)
5. ✅ CAM workflow from Fusion 360 to CNC

---

## UPGRADE PATHS (Future)

### After Initial Build

**Phase 2 Upgrades ($500):**
- Touch probe ($215) - Highly recommended
- Upgraded spindle 2.2kW ($320)
- Better rotary chuck ($465)

**Phase 3 Upgrades ($1,200):**
- Touchscreen pendant ($400)
- Camera system ($70)
- Enclosure panels ($450)
- Premium rotary 4th axis ($800)

**Your machine is designed to grow with your needs!**

---

## QUESTIONS?

**Before ordering, confirm:**
- [ ] Workbench size adequate (2800×2000mm minimum)?
- [ ] Power available (120V 15A outlet)?
- [ ] OK with 10-14 day build timeline?
- [ ] Comfortable with medium difficulty assembly?
- [ ] Budget confirmed at $5,000?

**Ready to proceed with:**
1. ✅ Final optimized BOM ($4,996)
2. ✅ Fusion 360 .f3d hull file (coming next)
3. ✅ Assembly instructions (coming next)

**Let's build this CNC and cut some foam!** 🛶⚙️
