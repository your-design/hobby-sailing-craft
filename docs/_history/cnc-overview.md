---
layout: article
title: "CNC Mill: Complete Documentation"
subtitle: "Overview and Theory"
date: 2025-11-28
categories: [history, design, naval-architecture]
tags: [proa, micronesia, polynesia, outrigger, traditional-navigation]
---

# CNC Mill: Complete Documentation

## Overview & Theory

### What is a CNC Mill?

**CNC = Computer Numerical Control**

A CNC mill uses computer-controlled motors to move a cutting tool (router bit) in precise patterns, cutting material based on digital designs.

**For our project:** Cut plywood panels for the proa hull.

---

## Design Philosophy: Cheap, Sturdy, Capable

### Requirements:
- **Cutting area:** 4' x 8' (full plywood sheet)
- **Material capability:** 
  - 2" foam board (multiple passes) ✓
  - 3/4" Baltic birch plywood (BONUS goal)
- **Budget:** <$2,500 total
- **Build time:** 40-60 hours
- **Skill level:** Intermediate DIY (can use drill, saw, wrench)

### Theory of Operation:

**3-Axis Movement:**
1. **X-axis:** Left/right (8' travel for our build)
2. **Y-axis:** Front/back (4' travel)
3. **Z-axis:** Up/down (6" travel - enough for material + clearance)

**How it cuts:**
1. Computer sends coordinates to controller
2. Controller drives stepper motors
3. Motors move gantry/spindle to exact position
4. Spindle rotates cutting bit at high speed
5. Bit removes material layer by layer

**Multiple passes for thick material:**
- 3/4" plywood: Cut in 3-4 passes @ 0.2-0.25" depth each
- 2" foam: Cut in 8-10 passes @ 0.2-0.25" depth each
- Prevents bit breakage, reduces motor load

---

## Recommended Design: "Lowrider CNC v3"

**Why this design:**
- Proven in community (1000+ builds)
- Uses EMT conduit (cheap: $20 for 10')
- Fits 4'x8' sheets
- Strong enough for plywood
- Detailed instructions available
- Active forum support

**Source:** V1 Engineering (v1e.com/lowrider-cnc)

**Key innovation:** Rails run UNDER the table (lowrider), saving vertical space.

---

## Complete Parts List

### Frame & Motion (Structural)

| Part | Specification | Quantity | Cost (USD) | Source |
|------|---------------|----------|------------|--------|
| **EMT Conduit 3/4"** | 10' lengths | 5 pieces | $100 | Home Depot |
| **Plywood 3/4"** | 4'x8' sheet (spoilboard) | 2 sheets | $100 | Home Depot |
| **2x4 Lumber** | 8' lengths (table frame) | 8 pieces | $40 | Home Depot |
| **MDF 3/4"** | 2'x4' (gantry plates) | 1 sheet | $20 | Home Depot |

**Frame Subtotal: $260**

### Motion Components

| Part | Specification | Quantity | Cost | Source |
|------|---------------|----------|------|--------|
| **Stepper Motors NEMA 23** | 3.0 Nm, 1.8° step | 4 motors | $120 | StepperOnline |
| **Linear Bearings LM8UU** | 8mm ID | 20 pieces | $30 | Amazon |
| **8mm Linear Rods** | 400mm length | 8 rods | $40 | Amazon |
| **GT2 Timing Belt** | 6mm wide, 2mm pitch | 20 meters | $25 | Amazon |
| **GT2 Pulleys** | 20-tooth, 8mm bore | 4 pulleys | $20 | Amazon |
| **Lead Screw 8mm** | T8 (2mm pitch), 500mm | 1 screw | $15 | Amazon |
| **Lead Screw Nut** | T8 anti-backlash | 1 nut | $8 | Amazon |

**Motion Subtotal: $258**

### Electronics

| Part | Specification | Quantity | Cost | Source |
|------|---------------|----------|------|--------|
| **Controller Board** | GRBL-based (Arduino CNC Shield) | 1 board | $25 | Amazon |
| **Motor Drivers** | A4988 or DRV8825 | 4 drivers | $20 | Amazon |
| **Power Supply** | 24V 15A (360W) | 1 unit | $40 | Amazon |
| **Emergency Stop** | Red mushroom button | 1 button | $10 | Amazon |
| **Limit Switches** | Mechanical endstops | 6 switches | $15 | Amazon |
| **Wiring Kit** | 18AWG, connectors | 1 kit | $25 | Amazon |

**Electronics Subtotal: $135**

### Spindle (Router)

| Part | Specification | Quantity | Cost | Source |
|------|---------------|----------|------|--------|
| **Router** | Makita RT0701C (1.25 HP) | 1 router | $120 | Amazon |
| **Router Mounting Bracket** | 3D printed or aluminum | 1 bracket | $15 | Print/Buy |
| **Dust Shoe** | 3D printed | 1 shoe | $10 | Print |
| **Router Bits** | 1/4" upcut spiral (plywood) | 3 bits | $30 | Amazon |
| **Router Bits** | 1/4" ballnose (foam) | 2 bits | $20 | Amazon |

**Spindle Subtotal: $195**

### Fasteners & Hardware

| Part | Specification | Quantity | Cost | Source |
|------|---------------|----------|------|--------|
| **M5 Bolts** | Assorted lengths | 100 pack | $15 | Amazon |
| **M5 Nuts** | Lock nuts | 100 pack | $10 | Amazon |
| **Wood Screws** | 2.5", 3" deck screws | 1 lb box | $15 | Home Depot |
| **T-Track** | Aluminum, 4' lengths | 2 pieces | $30 | Amazon |
| **Hold-Down Clamps** | CNC work holding | 4 clamps | $25 | Amazon |

**Hardware Subtotal: $95**

---

## TOTAL COST BREAKDOWN

| Category | Cost |
|----------|------|
| Frame & Motion | $260 |
| Motion Components | $258 |
| Electronics | $135 |
| Spindle | $195 |
| Fasteners & Hardware | $95 |
| **SUBTOTAL** | **$943** |
| **Contingency (15%)** | **$142** |
| **GRAND TOTAL** | **$1,085** |

**Under budget by $1,415!**

---

## Alternative: If You Have On-Hand Items

### Substitutions (Cost Reductions)

**If you have:**

**Router already?**
- Savings: $120
- Most trim routers work (1-1.5 HP minimum)

**Old computer power supply?**
- Savings: $40
- Needs 12V or 24V rail with 10A+ capacity

**Scrap plywood/MDF?**
- Savings: $120
- Can use for spoilboard and gantry plates

**3D Printer access?**
- Savings: $50-100
- Print motor mounts, belt tensioners, dust shoe

**Electronics experience?**
- Build your own controller: Arduino Uno + CNC Shield
- Savings: $0 (same cost, but more control)

**Potential Total with Substitutions: $650-800**

---

## Build-Out Instructions

### Phase 1: Table Frame (8 hours)

**Materials:**
- 8x 2x4s (8' lengths)
- 2x 3/4" plywood sheets
- Wood screws, wood glue

**Steps:**
1. Cut 2x4s to create 4'x8' rectangular frame
2. Add cross supports every 16" (prevents sagging)
3. Attach first plywood sheet (structural base)
4. Level frame (critical for accuracy)
5. Attach second plywood sheet (sacrificial spoilboard)

**Result:** Rigid, flat table ready for rails.

### Phase 2: Rail Installation (4 hours)

**Materials:**
- 5x EMT conduit 3/4" (cut to length)
- Linear bearings LM8UU
- MDF mounting blocks

**Steps:**
1. Cut EMT: 2x 8' lengths (X-axis), 2x 4' lengths (Y-axis), 1x 18" (Z-axis)
2. Create bearing blocks from MDF
3. Mount X-rails parallel on table (exactly 24" apart)
4. Slide bearing blocks onto rails
5. Attach gantry structure to bearing blocks

**Result:** Smooth-rolling gantry.

### Phase 3: Motors & Belts (6 hours)

**Materials:**
- 4x NEMA 23 stepper motors
- GT2 timing belt & pulleys
- Motor mounting brackets

**Steps:**
1. Mount motors to gantry structure
2. Install pulleys on motor shafts
3. Route belts around pulleys and gantry
4. Tension belts (should "twang" when plucked)
5. Test manual movement (should roll smoothly)

**Result:** Motorized axes ready for wiring.

### Phase 4: Electronics (8 hours)

**Materials:**
- Controller board, motor drivers
- Power supply, wiring
- Emergency stop, limit switches

**Steps:**
1. Mount controller in enclosure box
2. Install motor drivers on controller
3. Wire motors to drivers (check polarity!)
4. Wire power supply to controller
5. Install limit switches at travel ends
6. Wire emergency stop (safety critical!)
7. Connect to computer via USB

**Result:** Powered, controllable CNC.

### Phase 5: Z-Axis & Spindle (6 hours)

**Materials:**
- Lead screw & nut
- Router & mounting bracket
- Z-axis carriage

**Steps:**
1. Assemble Z-axis carriage
2. Mount lead screw vertically
3. Attach stepper motor to lead screw
4. Mount router in bracket
5. Attach bracket to Z-carriage
6. Test Z-movement (should lift router smoothly)

**Result:** 3-axis motion complete.

### Phase 6: Calibration & Testing (8 hours)

**Software:**
- Install Universal G-Code Sender (free)
- Flash GRBL firmware to Arduino

**Steps:**
1. Home all axes using limit switches
2. Measure actual travel distances
3. Calibrate steps/mm in GRBL settings
4. Cut test square (100mm x 100mm)
5. Measure cut square (should be exactly 100mm)
6. Adjust calibration if needed
7. Test foam cutting (shallow passes first)
8. Test plywood cutting (SLOW feed rate initially)

**Result:** Accurate, functional CNC ready for production.

---

## Safety Checklist

**Before EVERY use:**
- [ ] Emergency stop tested and functional
- [ ] Router bit secure and undamaged
- [ ] Material clamped firmly to spoilboard
- [ ] Clear work area (no loose objects)
- [ ] Eye protection on
- [ ] Ear protection on (routers are LOUD)
- [ ] Dust collection connected (plywood dust is hazardous)
- [ ] G-code preview checked (no obvious errors)
- [ ] Feeds & speeds appropriate for material

**Never:**
- Run CNC unattended
- Reach into cutting area while spindle running
- Override safety interlocks
- Cut unknown materials (could be toxic when vaporized)

---

## User Guide: Cutting Proa Panels

### Workflow:

1. **Design:** Create panel DXF in CAD software
2. **CAM:** Generate toolpaths in Fusion 360 CAM or EstlCAM
3. **Export:** Save G-code file to SD card or USB
4. **Setup:** Clamp plywood to spoilboard, zero router bit
5. **Cut:** Send G-code, monitor first pass closely
6. **Finish:** Remove tabs, sand edges

### Settings for 3/4" Plywood:

- **Bit:** 1/4" upcut spiral
- **RPM:** 18,000 (Makita setting 3)
- **Feed rate:** 40 in/min
- **Plunge rate:** 15 in/min
- **Depth per pass:** 0.20"
- **Total passes:** 4 (for 3/4" material)

### Settings for 2" Foam:

- **Bit:** 1/4" ballnose
- **RPM:** 12,000 (Makita setting 2)
- **Feed rate:** 80 in/min
- **Plunge rate:** 30 in/min
- **Depth per pass:** 0.25"
- **Total passes:** 8 (for 2" material)

---

## What You'll Be Able to Cut:

**Proa Main Hull:**
- 8 plywood panels @ 6mm thick
- Total cutting time: ~6 hours (including setup)

**Proa Ama:**
- 6 plywood panels @ 6mm thick
- Total cutting time: ~4 hours

**Bulkheads:**
- 6 pieces from 12mm plywood
- Total cutting time: ~2 hours

**Total project cutting: ~12 hours** (way faster than jigsaw by hand!)

---

## Resources & Community:

**Forums:**
- V1 Engineering Forum (lowrider CNC specific)
- CNC Zone (general CNC discussion)
- r/hobbycnc (Reddit community)

**Software (Free):**
- GRBL (controller firmware)
- Universal G-Code Sender (control software)
- EstlCAM (CAM - generates toolpaths)
- Inkscape (2D design)

**YouTube Channels:**
- V1 Engineering (builder of Lowrider design)
- Winston Moy (CNC beginner tutorials)
- NYC CNC (professional techniques)

---

**BUILD TIME: 40 hours**  
**COST: $1,085**  
**CAPABILITY: Everything you need for the proa project**

