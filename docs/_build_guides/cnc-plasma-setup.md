---
layout: guide
title: "CNC Plasma Cutter Setup Guide"
permalink: /designs/cnc-plasma-cutter-setup-guide.html
---

# CNC Plasma Cutter Setup Guide
## Adapting Lowrider v3 CNC for Aluminum Cutting

**Purpose:** Convert Lowrider v3 CNC router into plasma cutter for aluminum panels

---

## WHY PLASMA INSTEAD OF ROUTER?

**Aluminum cutting comparison:**

| Method | Speed | Cut Quality | Tool Wear | Cost |
|--------|-------|-------------|-----------|------|
| **CNC Router** | 20 IPM | Burrs, chatter | High (bits dull fast) | $$ bits |
| **CNC Plasma** | 60 IPM | Clean, minimal dross | None | $ consumables |

**Verdict:** Plasma is 3x faster, cleaner cuts, lower consumable cost

---

## HARDWARE REQUIRED

### Plasma Torch

**Recommended:** Everlast PowerPlasma 50S  
**Cost:** $450  
**Why:** Pilot arc (cuts without touch), 1/8" aluminum at 60 IPM, CNC-ready torch

**Alternative:** Lotos LTP5000D ($280, good budget option)

**Specifications needed:**
- 30-50 amp output (for 1/8" aluminum)
- Pilot arc start (non-touch)
- Machine torch (not hand torch)
- Duty cycle: 60%+ at 30A

---

### Torch Mount Adapter

**Replace router mount with plasma torch mount**

**Design:**
- 3D printed or aluminum bracket
- Holds torch perpendicular to table
- Allows 0.5" Z-axis adjustment
- Secure clamp (torch must not move)

**Files:** See /cad/torch-mount-adapter.stl

**Fabrication:**
- 3D print in PETG or ABS (heat resistant)
- OR cut from 1/8" aluminum plate
- Mount to existing Z-axis carriage with M5 bolts

**Time to make:** 2 hours

---

### Torch Height Control (THC)

**Purpose:** Maintains optimal 0.150" tip-to-work distance

**Options:**

**Option A:** Manual (budget)
- Set Z-height before cut
- Plasma auto-adjusts during cut (pilot arc)
- **Pros:** Free
- **Cons:** Less precise on warped sheets

**Option B:** PriceC UT CandCNC THC ($180)
- Automatic height sensing
- Adjusts Z in real-time
- **Pros:** Perfect cuts even on warped material
- **Cons:** Wiring complexity

**Recommendation:** Start manual, add THC later if needed

---

## CONTROL ELECTRONICS

### GRBL Modifications

**Current setup:** GRBL 1.1 for router  
**Plasma adaptation:** Add relay control for torch on/off

**Wiring:**
1. Connect GRBL spindle PWM output to relay
2. Relay switches plasma torch trigger wire
3. G-code M3 command = torch ON
4. G-code M5 command = torch OFF

**Parts needed:**
- 5V relay module ($5 on Amazon)
- Wire, connectors

**Wiring diagram:**
```
GRBL Spindle PWM → Relay Coil (+5V)
Relay NO Contact → Plasma Torch Trigger Wire
```

**Testing:**
- Send M3 S1000 → Torch should fire
- Send M5 → Torch should stop

---

## PLASMA CUTTING PARAMETERS

### Cut Settings for 1/8" Aluminum (5052-H32)

| Parameter | Value |Setting |
|-----------|-------|------|
| **Amperage** | 30A | On plasma torch dial |
| **Cut speed** | 60 IPM | GRBL feed rate |
| **Pierce delay** | 0.5 sec | Dwell before move |
| **Torch height** | 0.150" | Manual or THC |
| **Air pressure** | 60 PSI | Compressor output |

**G-code example:**
```gcode
G21 ; metric
G90 ; absolute
G28 Z0 ; home Z
G0 Z5 ; lift to safe height
G0 X10 Y10 ; move to start
G1 Z0.15 F500 ; lower to cut height (0.150" = 3.8mm)
M3 S1000 ; torch ON
G4 P0.5 ; pierce delay 0.5 sec
G1 X100 Y10 F1500 ; cut at 60 IPM (1500 mm/min)
M5 ; torch OFF
G0 Z5 ; lift
M2 ; end program
```

---

## TABLE MODIFICATIONS

### Add Slat Table

**Purpose:** Prevent torch from hitting solid table, allow dross to fall through

**Design:**
- 1" × 1" steel or aluminum tube
- Spaced 1" apart
- Spans 4' × 8' cutting area

**Fabrication:**
1. Cut 48 pieces of 1" square tube, 8' long
2. Weld to frame at 1" spacing
3. Level table (use shims if needed)

**Alternative:** Expanded metal grating (cheaper, easier)

**Cost:** $150 materials

**Time:** 4 hours to build

---

### Water Table (Optional - for cleaner cuts)

**Purpose:** Water catches dross, reduces fumes

**Design:**
- Shallow pan (2" deep) under slat table
- Fill with 1" water
- Dross falls into water instead of floor

**Pros:**
- Much cleaner (no metal dust everywhere)
- Reduces fumes
- Easier cleanup

**Cons:**
- Adds weight
- Need to empty/refill periodically

**Cost:** +$80 (sheet metal pan)

---

## AIR SUPPLY

### Compressor Requirements

**Minimum specs:**
- CFM: 4-6 CFM at 90 PSI
- Tank: 20+ gallon (for continuous cutting)
- Regulator: Adjustable 0-100 PSI

**Plasma uses compressed air to:**
1. Create plasma arc
2. Blow molten metal away from cut

**Your farm compressor likely works - test it!**

**Check:**
- Can maintain 60 PSI during 5-minute continuous cut?
- If YES → good to go
- If NO → need bigger compressor or cut in shorter sessions

---

## SAFETY EQUIPMENT

### Required for Plasma Cutting

**Eye protection:**
- Shade #5 welding lens (not safety glasses!)
- Plasma arc is BRIGHT - will damage eyes
- Auto-darkening helmet recommended ($50)

**Ventilation:**
- Aluminum plasma cutting produces fumes
- Open garage door
- OR add exhaust fan

**Fire safety:**
- Plasma throws sparks 10+ feet
- Clear area of flammable materials
- Keep fire extinguisher nearby
- No cardboard, wood, fabric within 15 feet

**Hearing protection:**
- Plasma is LOUD (90-100 dB)
- Wear earplugs or muffs

---

## CALIBRATION PROCEDURE

### Step 1: Test Cut on Scrap

**Process:**
1. Place scrap aluminum (any size) on table
2. Run simple square cut program
3. Adjust settings until cut is clean

**Good cut:**
- Cuts all the way through
- Minimal dross on bottom
- Edges perpendicular (not beveled)
- No warping from heat

**Bad cut issues:**
- Not cutting through → Increase amperage or slow down
- Too much dross → Increase air pressure
- Beveled edge → Check torch perpendicular
- Warping → Too slow (too much heat input)

---

### Step 2: Calibrate Steps/mm (if needed)

**Plasma doesn't care about X/Y calibration (unlike router)**

**Dimensional accuracy:**
- ±0.010" is fine for boat panels
- Rivet holes will be drilled after cutting

**If cuts are slightly oversized:**
- Add 0.010" offset in CAM software

---

## CAM SOFTWARE SETUP

### Recommended: SheetCAM ($150) or EstlCAM (free)

**Plasma-specific settings:**

**Lead-in:**
- 0.1" straight lead-in (torch starts outside part)
- Prevents pierce mark on part edge

**Kerf compensation:**
- Kerf = cut width from plasma = 0.050" for 1/8" aluminum
- Set kerf offset = 0.025" (half of kerf width)
- Ensures parts are correct size

**Pierce delay:**
- 0.5 seconds (allows plasma to pierce through before moving)

**Corner slowdown:**
- Slow to 30 IPM at sharp corners
- Prevents corner rounding

---

## CONSUMABLES & MAINTENANCE

### Plasma Consumables

**Parts that wear out:**
- Electrode: 1-2 hours cut time
- Nozzle: 1-2 hours cut time
- Shield cup: 4-8 hours

**Cost:** $15 for consumable set

**For this project:**
- Cutting all proa panels = 30 minutes plasma time
- 1 consumable set is enough

**When to replace:**
- Electrode has pit > 1/16" deep
- Nozzle orifice is oblong (not round)
- Cuts become inconsistent

---

## TROUBLESHOOTING

### Problem: Torch won't fire

**Check:**
- Air pressure (needs 60+ PSI)
- Torch consumables installed correctly
- Relay wiring (M3 command triggering relay?)
- Plasma ground clamp connected to workpiece

---

### Problem: Cut not going through

**Solutions:**
- Increase amperage (try 35-40A)
- Slow cut speed to 40 IPM
- Check torch height (should be 0.150")
- Replace consumables if worn

---

### Problem: Excessive dross (slag on bottom)

**Solutions:**
- Increase air pressure to 70 PSI
- Increase cut speed to 70 IPM
- Lower torch height to 0.120"

---

### Problem: Warped panels

**Cause:** Too much heat input

**Solutions:**
- Increase cut speed (less time = less heat)
- Cut path optimization (don't dwell in one area)
- Clamp panel edges before cutting

---

## COST SUMMARY

| Item | Cost |
|------|------|
| Plasma torch | $450 |
| Torch mount adapter | $20 |
| Relay module | $5 |
| Slat table materials | $150 |
| Consumables (1 set) | $15 |
| **TOTAL** | **$640** |

**vs CNC Router setup:** $1,085  
**Savings:** $445

**Plus:** Plasma cuts aluminum 3x faster with better quality

---

## FINAL CHECKLIST

Before first cut:

- [ ] Plasma torch mounted securely
- [ ] Relay wiring tested (M3/M5 commands work)
- [ ] Air compressor provides 60 PSI continuous
- [ ] Slat table installed
- [ ] Work area clear of flammable materials
- [ ] Fire extinguisher accessible
- [ ] Shade #5 eye protection available
- [ ] Test cut successful on scrap aluminum

**You're ready to cut boat panels!**

---

**Guide version 1.0 - Nov 2025**
