---
layout: page
title: "Asymmetric Hull Design"
subtitle: "Sailing Rig Installation"
date: 2025-12-01
categories: [design, hydrodynamics]
permalink: /designs/sailing-rig-installation.html
---

# Sailing Rig Installation - Complete Structural Guide
## Stress Points, Load Paths, and Hull Reinforcement for Foam Core Proa

**Critical:** This document details the high-stress attachment points where the sailing rig connects to your foam core hull. Proper reinforcement is non-negotiable for structural integrity.

---

## OVERVIEW: RIG LOAD PATHS

### The Physics of Sailing Stress

When your proa is under sail, forces flow through three primary paths:

```
                    MAST (Compression)
                         |
                         | 500-800 kg downward
                         |
                         ↓
           ╔═════════════╩═════════════╗
           ║     MAST STEP BULKHEAD    ║  ← Primary compression point
           ╚═════════════╦═════════════╝
                         |
                ┌────────┼────────┐
                |        |        |
            FORESTAY  MAST STEP  BACKSTAY
           (Tension)  (Compression) (Tension)
                |        |        |
                ↓        ↓        ↓
              BOW    KEEL/HULL   STERN
          ATTACHMENT   FLOOR   ATTACHMENT


     SHROUD TO AMA (Lateral Tension)
                ↗
               /  600-900 kg pulling windward
              /
           MAST
             |
             | Prevents mast falling to leeward
             |
             ↓
         CROSSBEAM ← Must resist bending from ama pull
```

**Key insight:** The geometry of the mast/windward stay/outrigger creates a strong yet flexible truss that utilizes the specific engineering attributes of the materials to their best advantage. The mast and outrigger poles are in near perfect compression, (no bending loads) while the stay is in pure tension.

---

## PART 1: MAST ATTACHMENT & STEP

### 1.1 Traditional Proa Mast Configuration

The sail is supported by a short mast attached near the middle of the upper spar, and the forward corner is attached to the hull. For our foam core proa, we'll use a modern approach with stays.

**Mast placement:** The mast will be as close to the main hull as it can. With a long enough mainsheet strut, you can move the mainsheet attachment point to center with the mast.

### 1.2 Mast Step Construction (Critical Reinforcement)

**Location:** Station 4 (midship bulkhead), offset 300-400mm to windward

**Why this matters:** The mast exerts 500-800 kg of downward compression when sailing. Foam alone will crush under this load.

#### Step-by-Step Reinforcement:

**STEP 1: Primary Bulkhead (12mm Marine Plywood)**

```
TOP VIEW - Station 4 Bulkhead:
                                        
    ┌───────────────────────────────────┐
    │                                   │  ← 12mm marine plywood bulkhead
    │         ╔═══════════╗            │     extends full height
    │         ║  MAST     ║            │
    │         ║  STEP     ║  ← Hardwood block
    │         ║  (Oak)    ║     100×100×150mm
    │         ╚═══════════╝            │
    │                                   │
    │    [Foam Hull Wall]               │
    └───────────────────────────────────┘
    
    
SIDE VIEW - Mast Step Detail:
    
         DECK LEVEL
    ═════════════════════════════════
              ↓ MAST
         ┌────┴────┐
         │  Mast   │ ← Aluminum tube partner
         │ Partner │    clamped to mast
         └────┬────┘
              │
    ──────────┼────────────── ← Deck (fiberglass over foam)
              │
         ┌────▼────┐
         │ Hardwood│  ← 100×100mm oak/teak
         │  Block  │     with mast socket
         │  Step   │
         └────┬────┘
              │
    ╔═════════╩═════════╗
    ║   BULKHEAD 12mm   ║  ← Marine plywood
    ║      PLYWOOD      ║
    ╚═══════════════════╝
         ↓  ↓  ↓
    ┌────────────────┐
    │ Compression    │  ← Forces transfer to keel
    │ Spreader Beam  │     Laminated hardwood
    │ (see detail)   │     200mm × 50mm
    └────────────────┘
```

**Materials for mast step:**
- Hardwood block (oak or teak): 100mm × 100mm × 150mm tall
- Marine plywood bulkhead: 12mm, full height (430mm for our foam hull)
- Compression spreader beam: 200mm wide × 50mm thick × 600mm long
- Epoxy: West System 105/206 for bonding
- Fiberglass tabbing: 6oz cloth, 150mm wide strips

**Construction procedure:**

1. **Cut socket in hardwood block**
   - Drill 65mm diameter hole (for 60mm mast)
   - Depth: 100mm
   - Line with UHMW plastic bushing (reduces wear)

2. **Attach block to bulkhead**
   - Epoxy bond: hardwood block centered on bulkhead
   - Through-bolt with 4× M10 stainless bolts
   - Countersink bolt heads flush

3. **Install compression spreader beam**
   ```
   FRONT VIEW (looking at bulkhead):
   
       ┌─────────┐
       │  MAST   │
       │  STEP   │
       └────┬────┘
            │
    ════════╪════════  Bulkhead face
            │
       ┌────▼────────────────┐
       │ Compression Spreader │ ← Laminated beam
       │ ←  600mm wide  →    │    bonds to both sides
       └─────────────────────┘       of bulkhead
              ↓  ↓  ↓
       [Transfers load to hull floor]
   ```

4. **Fiberglass tabbing**
   - 6oz cloth, 4 layers, 150mm wide
   - Tab bulkhead to hull (both sides)
   - Tab compression beam to hull floor
   - Build up fillets with epoxy/cabosil at joints

**Load path verification:**
- Mast → Hardwood step → Bulkhead → Compression beam → Hull floor → Keel

---

### 1.3 Mast Partner (Deck-Level Support)

**Purpose:** Prevents mast from moving laterally at deck level

```
TOP VIEW - Mast Partner:

    ┌───────────────────────────────┐
    │      DECK SURFACE             │
    │                               │
    │         ╔═══╗                │
    │         ║ M ║  ← Mast (60mm dia)
    │         ║ A ║
    │         ║ S ║
    │         ║ T ║
    │         ╚═══╝                │
    │    ┌─────────────┐           │
    │    │   Partner   │ ← Plywood ring
    │    │   Ring      │    75mm ID, 150mm OD
    │    │  (Ply 18mm) │    Through-bolted
    │    └─────────────┘           │
    │                               │
    └───────────────────────────────┘


SIDE VIEW - Partner Detail:

    ══════════════════════════  ← Deck (fiberglass)
        ╔═══════╗
        ║ MAST  ║
        ║       ║
        ╚═══╤═══╝
    ┌───────▼───────┐
    │  Partner Ring │  ← 18mm marine ply
    │   (plywood)   │     Epoxy laminated
    └───────────────┘         3 layers
        ↓↓↓↓↓↓↓
    Through-bolts to deck structure
```

**Construction:**
- 3 layers 18mm marine plywood, epoxy laminated
- Total thickness: 54mm
- Inner diameter: 75mm (loose fit on 60mm mast)
- Outer diameter: 150mm (distributes load)
- 6× M8 through-bolts to deck/bulkhead structure
- Seal gap with rubber collar (allows rotation)

---

## PART 2: FORESTAY & BACKSTAY ATTACHMENTS

### 2.1 Stay Load Analysis

**Typical loads when sailing:**
- Forestay tension: 300-500 kg (pulling bow upward)
- Backstay tension: 300-500 kg (pulling stern upward)
- Combined with mast compression: creates balanced triangle

```
SIDE VIEW - Stay Geometry:

    FORESTAY                           BACKSTAY
    (Tension)                          (Tension)
       ↗                                   ↖
      /  300-500kg                  300-500kg  \
     /                                           \
    /              MAST                           \
   /          ↓ 500-800kg ↓                       \
  /    ═══════════╪═══════════                     \
 /                │  Compression                    \
●────────────────●───────────────────────────────────●
BOW         MAST STEP                              STERN
Attachment   (Station 4)                        Attachment
Station 0-1                                     Station 7-8
```

### 2.2 Bow Forestay Attachment

**Location:** Station 1 or 2 (600-1200mm from bow)

**Reinforcement required:** Foam will tear under 300-500kg tension loads

```
SIDE VIEW - Forestay Attachment:

              FORESTAY
              (Wire or Dyneema)
                   ↓
    ╔═══════════════════════════╗
    ║     DECK (Fiberglass)     ║
    ╚═══════════╤═══════════════╝
                ↓
         ┌──────▼──────┐
         │ Pad Eye     │  ← Stainless steel, thru-bolt
         │ SS 316      │
         └──────┬──────┘
                ↓
         ┌──────▼──────┐
         │ Backing     │  ← Aluminum plate
         │ Plate       │    150×150×6mm
         │ (Aluminum)  │
         └──────┬──────┘
                ↓
    ════════════╪════════════  Deck/hull junction
                │
         ┌──────▼──────┐
         │ Structural  │  ← Marine plywood
         │ Bulkhead    │    or hardwood block
         │ (12mm ply)  │    bonded to hull
         └─────────────┘
                ↓
         [Load transfers to keel]


TOP VIEW - Backing Plate:

    ┌────────────────────────────┐
    │      DECK SURFACE          │
    │                            │
    │    ●                       │  ← Pad eye visible
    │    │                       │
    │  [Backing plate            │
    │   under deck]              │
    │                            │
    │    M10 bolts (4×) through  │
    │    deck into bulkhead      │
    │                            │
    └────────────────────────────┘
```

**Installation procedure:**

1. **Identify attachment point** (Station 1 or 2)

2. **Install structural backing:**
   - If NO bulkhead at this station:
     - Install hardwood block (150×150×100mm)
     - Epoxy bond to hull interior
     - Fiberglass tab with 6oz cloth (4 layers)
   
   - If bulkhead exists:
     - Reinforce area with additional plywood layer
     - Extend tabbing to ensure solid bond

3. **Through-bolt pad eye:**
   - Drill 4× 10mm holes through deck
   - Install stainless pad eye on deck
   - Install aluminum backing plate under deck
   - Bolt through with M10 × 80mm bolts
   - Use Loctite 243 on threads
   - Torque to 40 Nm

4. **Seal penetrations:**
   - Bed pad eye in 3M 5200 sealant
   - Fill bolt holes with thickened epoxy around bolts
   - Ensures watertight seal

**Critical:** The backing plate must bear against solid structure (bulkhead or hardwood block), NOT just the foam core. Foam will compress under load.

---

### 2.3 Stern Backstay Attachment

**Same construction as forestay, mirrored at stern**

Location: Station 7 or 8 (600-1200mm from stern)

**Key difference:** Backstay typically sees less load than forestay, but use same reinforcement for safety margin.

---

## PART 3: SHROUD TO AMA (WINDWARD STAY)

### 3.1 Why the Shroud is Critical

The mast has three stays at the mast head: one led forward, one aft, and one (or more) to the outrigger. The geometry between mast, outrigger and shrouds creates a very stiff yet flexible truss that supports the sail and outrigger with the minimum possible structure (weight).

**This is the highest-loaded connection in the entire rig.**

When sailing, the shroud to the ama (windward outrigger) prevents the mast from falling to leeward. Tension in this stay can reach **600-900 kg** in strong winds.

```
TOP VIEW - Shroud Geometry:

                AMA (Windward)
                    ●
                    │ ↖ Shroud (600-900kg tension!)
                    │     \
                    │       \
                    │         \
    ════════════════╪══════════●═══════  MAIN HULL
    [  4000mm   ]   │          MAST
                    │        (at Station 4)
                    │
              CROSSBEAM
           (Transfers shroud
            load to both hulls)


SIDE VIEW - Shroud Load Path:

         MAST TOP
              ↓
         ╔════╧════╗
         ║  MAST   ║
         ╚════╤════╝
              │
    Shroud →  ●  ← Masthead attachment
            ╱   ╲    (600-900kg tension)
          ╱       ╲
        ╱           ╲
    CROSSBEAM     CROSSBEAM
      ●───────────────●
      │               │
      ↓               ↓
   MAIN HULL        AMA
  (Compression)   (Compression)
```

### 3.2 Crossbeam Design & Attachment

**Purpose:** Transfers shroud tension from ama to main hull

**Critical loads:**
- Bending moment from shroud pull: Very high
- Compression from mast: Medium
- Torsion from sailing forces: Medium

#### Crossbeam Specifications:

**Material:** Aluminum 6061-T6 square tube
- Size: 50mm × 50mm × 3mm wall
- Length: 4000mm (spans from main hull to ama)
- Weight: ~15 kg per beam
- Quantity: 2 beams (forward and aft of mast)

**Alternative (lighter):** Laminated plywood box beam. Plywood can be useful for the vertical shear webs of a box beam.

```
CROSSBEAM CROSS-SECTION:

    Option A: Aluminum Tube (Simple)
    
    ┌─────────────────┐
    │                 │
    │  50mm × 50mm    │  ← 6061-T6 aluminum
    │  Wall: 3mm      │     Square tube
    │                 │
    └─────────────────┘


    Option B: Plywood Box Beam (Lighter)
    
    ┌─────────────────┐
    │ ┌─────────────┐ │
    │ │             │ │  ← 12mm marine ply top/bottom
    │ │   Hollow    │ │     9mm marine ply sides
    │ │   (foam or  │ │     Epoxy laminated
    │ │    air)     │ │
    │ └─────────────┘ │
    └─────────────────┘
         60mm wide
```

**Which to choose:**
- Aluminum: Easier to source, predictable strength, no maintenance
- Plywood: Lighter (12 kg vs 15 kg), requires careful construction

For beginner: **Use aluminum tube** (simpler, proven)

---

### 3.3 Crossbeam Attachment to Main Hull

**This is the second-most critical stress point after the mast step.**

Three sets of double bulkheads project above ama deck and sandwich the crossbeams, with 4 or 5 12" SS through-bolts at each pair of bulkheads.

```
TOP VIEW - Crossbeam Mounting (Station 4):

    ╔═══════════════════════════════════╗
    ║                                   ║
    ║     MAIN HULL (Foam core)         ║
    ║                                   ║
    ║   ╔═══╗                          ║
    ║   ║ M ║  Mast                    ║
    ║   ║ A ║                          ║
    ║   ║ S ║                          ║
    ║   ║ T ║                          ║
    ║   ╚═══╝                          ║
    ║     │                             ║
    ║     ├───────────────────          ║
    ║     │  CROSSBEAM →               ║ ────────────→ To Ama
    ║     ├───────────────────          ║
    ║     │                             ║
    ║   ╔═══════════╗                  ║
    ║   ║ BULKHEAD  ║ ← Double bulkhead║
    ║   ║ (×2 12mm) ║    sandwiches    ║
    ║   ╚═══════════╝    crossbeam     ║
    ║                                   ║
    ╚═══════════════════════════════════╝


SIDE VIEW - Crossbeam Bolting Detail:

    ═══════════════════════════  ← DECK (fiberglass)
           ↓       ↓
    ┌──────────────────────┐
    │   Crossbeam Tube     │  ← Aluminum 50×50mm
    │   (Aluminum)         │
    └──────────────────────┘
           │ │ │ │
           ↓ ↓ ↓ ↓  M10 through-bolts (4-6×)
    ╔═══════════════════════╗
    ║ BULKHEAD (12mm ply)   ║  ← Primary bulkhead
    ║        #1             ║
    ╠═══════════════════════╣
    ║ BULKHEAD (12mm ply)   ║  ← Secondary bulkhead
    ║        #2             ║     (50mm spacing)
    ╚═══════════════════════╝
           ↓  ↓  ↓
    [Bolts clamp crossbeam between bulkheads]


EXPLODED VIEW - Hardware:

    CROSSBEAM
        │
        ├─── M10 × 120mm SS bolt
        │
    BULKHEAD #1 (12mm)
        │
    SPACER (50mm) ← Hardwood block or aluminum
        │
    BULKHEAD #2 (12mm)
        │
        ├─── SS washer (30mm dia)
        │
        └─── Nyloc nut M10
```

**Installation procedure:**

**STEP 1: Prepare double bulkhead**
- Cut two identical bulkheads from 12mm marine plywood
- Shape to hull interior profile
- Drill 4-6× 10mm bolt holes (evenly spaced)

**STEP 2: Install first bulkhead**
- Epoxy bond to hull interior at Station 4 (forward) and Station 6 (aft)
- Fiberglass tab with 6oz cloth (4 layers, 150mm wide)
- Allow 24 hours cure time

**STEP 3: Position crossbeam**
- Drill matching holes in crossbeam
- Deburr all edges
- Position crossbeam against first bulkhead

**STEP 4: Install second bulkhead**
- Insert hardwood spacer blocks (50mm thick) between bulkheads
- Position second bulkhead over crossbeam
- Ensure bolt holes align

**STEP 5: Through-bolt assembly**
- Insert M10 × 120mm stainless bolts
- Add large washers (30mm diameter) under nuts
- Tighten progressively (cross-pattern)
- Torque to 50 Nm
- Apply Loctite 243 to prevent loosening

**STEP 6: Secondary fiberglass**
- Tab second bulkhead to hull (both sides)
- Build fillets around crossbeam-to-bulkhead joint
- 2 layers 6oz cloth minimum

---

### 3.4 Crossbeam Attachment to Ama

**Similar construction, but lighter loading**

The ama end sees compression (pushing down into ama hull) rather than the complex bending of the main hull attachment.

```
SIDE VIEW - Ama Attachment:

    ════════  AMA DECK
        │
    ┌───▼──────────────┐
    │  Crossbeam Tube  │
    └───┬──────────────┘
        │ Through-bolts
    ╔═══╧════════════╗
    ║ Bulkhead       ║  ← Single bulkhead OK
    ║ (12mm ply)     ║     (lower loads)
    ╚════════════════╝
        ↓
    [Fiberglass tab to ama hull]
```

**Simplified for ama:**
- Single bulkhead (12mm plywood) sufficient
- 4× M8 bolts adequate (lower load)
- Still fiberglass tab thoroughly

---

## PART 4: ASSEMBLED RIG - COMPLETE LOAD PATH

### 4.1 Forces in Balance

When everything is properly installed, forces flow in a balanced truss:

```
COMPLETE SYSTEM - TOP VIEW:

                    AMA
                     ●
                     │ ↖ Shroud (tension)
                     │     \
                     │       \
                     │         \
    MAIN HULL════════╪══════════●═══════════════
    ════════════════╪══════════MAST════════════
                     │     ↑
                     │     │ Mast (compression)
                     │     │
                  CROSSBEAM
                (Transfers loads)


COMPLETE SYSTEM - SIDE VIEW:

    FORESTAY            SHROUD             BACKSTAY
    (Tension)          (Tension)          (Tension)
       ↗                  ↗                  ↖
      /                  /                    \
     /             MAST  /                     \
    /          ════╪════/                       \
   /               ↓   /                         \
  ●────────────────●──●───────────────────────────●
BOW           MAST STEP │                       STERN
            (Compression)│
                    CROSSBEAM
                         │
                         ↓
                       AMA
```

**System characteristics:**
- **Mast:** Pure compression (500-800 kg)
- **Shroud:** Pure tension (600-900 kg)
- **Forestay/Backstay:** Pure tension (300-500 kg each)
- **Crossbeams:** Bending + compression
- **Bulkheads:** Compression transfer to hull

This arrangement allows the lightest possible structure, and savings in weight and cost that are not possible with catamaran or trimaran configurations.

---

## PART 5: FOAM CORE-SPECIFIC REINFORCEMENT

### 5.1 Why Foam Needs Special Attention

**Problem:** XPS foam core crushes under point loads above ~170 kPa (25 PSI)

**Your rig loads:**
- Mast step: 800 kg ÷ (100×100mm) = 800 kPa → **4.7× crushing strength!**
- Forestay: 500 kg ÷ (50×50mm pad eye contact) = 2000 kPa → **11× crushing strength!**

**Without reinforcement, the rig would punch through the foam in the first strong wind.**

### 5.2 Load Distribution Strategy

**Principle:** Spread point loads over large areas of foam

```
CROSS-SECTION - Load Spreading:

    BAD (Point load crushes foam):
    
              PAD EYE
                 ↓ 500kg
    ══════════════▼══════════  Deck
            ░░░░░│░░░░░        Foam core (50mm)
            ░░░░░X░░░░░  ← CRUSHING!
    ══════════════════════════  Bottom skin


    GOOD (Distributed load):
    
              PAD EYE
                 ↓ 500kg
    ══════════════▼══════════  Deck
         ┌────────────────┐
         │ Backing Plate  │  ← Aluminum 150×150mm
         └────────────────┘    Spreads load
            ░░░░░░░░░░░░░      Foam core (50mm)
            ░░░░░░░░░░░░░  ← OK! Only 22 kPa
    ══════════════════════════  Bottom skin
    
    Stress: 500kg ÷ (150×150mm) = 22 kPa ✓ Safe!
```

**Rule of thumb:**
- Minimum backing plate size: 10× the attachment bolt diameter
- For M10 bolt: 100mm × 100mm minimum
- For M12 bolt: 120mm × 120mm minimum
- Larger is always better (up to practical limits)

---

### 5.3 Bulkhead-to-Foam Tabbing

**Critical:** Bulkheads must be solidly bonded to foam core

```
DETAIL - Fiberglass Tabbing:

    SIDE VIEW:
    
    ╔═══════════════╗
    ║   BULKHEAD    ║  12mm marine plywood
    ║   (12mm ply)  ║
    ╚═══════╤═══════╝
            │
         ┌──▼──┐  ← Epoxy fillet
        ╱│     │╲    (thickened with cabosil)
       ╱ │     │ ╲   Radius: 25mm
      ╱  │     │  ╲
     ╱═══════════════╲  ← Fiberglass tabbing
    ░░░░░░░░░░░░░░░░░░░     4 layers 6oz cloth
    ░  FOAM CORE 50mm ░     150mm wide total
    ░░░░░░░░░░░░░░░░░░░
    ══════════════════════  Bottom skin


    TOP VIEW - Tabbing Width:
    
                 ┌─────┐
                 │ BHD │
                 └──┬──┘
         ←75mm→    │   ←75mm→
    ════════════╤══╧══╤════════════
                │     │
         Layer 1│     │Layer 1
         (6oz)  │     │(6oz)
                │     │
    ────────────┼─────┼────────────
                │     │
         Layer 2│     │Layer 2
                │     │
    ════════════╧═════╧════════════
    
    Total tab width: 150mm (75mm each side)
    4 layers of 6oz cloth
```

**Tabbing procedure:**

1. **Prepare surface:**
   - Sand foam core surface with 80-grit
   - Wipe with acetone
   - Ensure bulkhead is perpendicular and positioned

2. **Mix thickened epoxy:**
   - West System 105 resin + 206 hardener
   - Add cabosil (fumed silica) until peanut butter consistency
   - Mix thoroughly

3. **Apply fillet:**
   - Use plastic spreader or gloved finger
   - Create 25mm radius fillet along bulkhead-foam joint
   - Both sides of bulkhead
   - Smooth surface (no voids or air pockets)

4. **Apply fiberglass layers:**
   - Cut 6oz cloth into 150mm wide strips
   - Wet out first layer with unthickened epoxy
   - Smooth with squeegee (remove air bubbles)
   - Overlap layers by 25mm
   - Apply 4 layers total
   - Allow to cure 24 hours

5. **Sand and finish:**
   - Sand smooth with 120-grit
   - Fair any low spots with epoxy fairing compound
   - Final sand with 220-grit

**Result:** Bulkhead is now structurally part of the hull, capable of transferring loads without crushing foam.

---

## PART 6: SAILING RIG MATERIAL SPECIFICATIONS

### 6.1 Mast

**Dimensions:** 6000mm tall × 60mm diameter
**Material:** Aluminum 6061-T6 tube
**Wall thickness:** 3mm
**Weight:** ~8 kg

**Why this size:**
- Adequate strength for 140 sq ft crab claw sail
- Light enough to handle manually
- Standard size (available from suppliers)

**Alternative:** The masts are aluminum scaffold tubes, 48.3mm diameter, 4.47mm wall. They are of an alloy which rests salt water and is forgiving of surface abrasion unlike thinner wall tube.

**Source:** 
- Online Metals (onlinemetals.com)
- Local metal supplier
- Scaffold supplier (48.3mm size)

---

### 6.2 Standing Rigging (Stays)

**Forestay:** 5mm Dyneema or 1/8" SS wire
- Length: ~6500mm (mast top to bow)
- Breaking strength: 1800 kg (4× safety factor)
- Weight: 0.2 kg (Dyneema) or 0.8 kg (wire)

**Backstay:** Same as forestay
- Length: ~6500mm (mast top to stern)

**Shroud (to ama):** 6mm Dyneema or 5/32" SS wire
- Length: ~4500mm (mast top to ama)
- Breaking strength: 2500 kg (3× safety factor for highest load)
- Weight: 0.3 kg (Dyneema) or 1.2 kg (wire)

**Recommendation:** Use Dyneema
- Lighter (saves 1.5 kg total)
- No corrosion issues
- Easy to splice (no swaging tools needed)
- Slightly stretchy (reduces shock loads)

**Source:**
- Dux Dyneema line (duxline.com)
- Samson rope (samsonrope.com)
- West Marine (local pickup)

---

### 6.3 Running Rigging (Halyards & Sheets)

**Halyard:** 8mm braided polyester
- Length: 15m (raises and lowers sail)
- Breaking strength: 1200 kg
- Weight: 0.6 kg

**Mainsheet:** 10mm braided polyester
- Length: 20m (controls sail angle)
- Breaking strength: 1800 kg
- Weight: 1.2 kg

**Source:**
- West Marine
- Amazon (marine cordage section)
- Defender Industries

---

### 6.4 Hardware List

**Mast step components:**
| Item | Specification | Qty | Unit Cost | Supplier |
|------|--------------|-----|-----------|----------|
| Hardwood block (oak) | 100×100×150mm | 1 | $25 | Lumber yard |
| UHMW bushing | 65mm ID × 75mm OD × 100mm | 1 | $18 | McMaster-Carr |
| M10 SS bolts | 80mm length | 4 | $3 | McMaster-Carr |

**Stay attachments:**
| Item | Specification | Qty | Unit Cost | Supplier |
|------|--------------|-----|-----------|----------|
| Pad eyes (SS 316) | 10mm hole, 2000 kg rated | 3 | $24 | West Marine |
| Backing plates (aluminum) | 150×150×6mm | 3 | $18 | Online Metals |
| M10 SS bolts | 80mm length | 12 | $3 | McMaster-Carr |
| SS washers | 30mm dia, 10mm hole | 12 | $1 | McMaster-Carr |

**Crossbeam hardware:**
| Item | Specification | Qty | Unit Cost | Supplier |
|------|--------------|-----|-----------|----------|
| Aluminum tube | 50×50×3mm, 4000mm long | 2 | $95 | Online Metals |
| M10 SS bolts | 120mm length | 16 | $4 | McMaster-Carr |
| SS washers | 30mm dia | 32 | $1 | McMaster-Carr |
| Nyloc nuts M10 | Stainless | 16 | $2 | McMaster-Carr |

**Total hardware cost:** ~$450

---

## PART 7: ASSEMBLY SEQUENCE

### 7.1 Build Order (Critical!)

**DO NOT install sailing rig until hull structure is complete and cured.**

**Correct sequence:**

1. **Week 1-2:** Build foam core hull (CNC cut + fiberglass)
2. **Week 3:** Install all 4 bulkheads with fiberglass tabbing
3. **Week 4:** Cure time (minimum 7 days for epoxy full strength)
4. **Week 5:** Install mast step and compression spreader
5. **Week 6:** Install crossbeams (forward and aft)
6. **Week 7:** Install forestay/backstay pad eyes
7. **Week 8:** Install mast and rig stays
8. **Week 9:** Tune rig (adjust stay tensions)
9. **Week 10:** Sea trials

**Why this order matters:**
- Bulkheads must be glassed into hull BEFORE any loads
- Epoxy needs full 7 days to reach maximum strength
- Mast step requires compression beam installed first
- Crossbeams bolt to bulkheads (bulkheads must be solid)

---

### 7.2 Rig Tuning Procedure

**Goal:** Balance stay tensions so mast stands straight under load

**Tools needed:**
- Loos tension gauge (measures wire tension)
- Adjustable wrenches
- Mast level or plumb bob
- Helper (one person in boat, one observing)

**Step-by-step:**

1. **Step mast into mast step**
   - Lower mast through partner ring
   - Seat firmly in hardwood socket

2. **Attach forestay**
   - Connect to bow pad eye with shackle
   - Hand-tight only (no tension yet)

3. **Attach backstay**
   - Connect to stern pad eye with shackle
   - Hand-tight only

4. **Attach shroud to ama**
   - Connect to crossbeam or ama bulkhead
   - Hand-tight only

5. **Initial tensioning (on land, no sail):**
   - Tension forestay to 150 kg (300 lbs)
   - Tension backstay to 150 kg (match forestay)
   - Tension shroud to 200 kg (400 lbs)
   
   **Check mast:** Should be vertical (use level or plumb bob)

6. **On-water tuning (light wind, 5-10 knots):**
   - Raise sail
   - Sail on port tack (ama to right)
   - Observe mast bend
   
   **If mast bends to leeward:** Tighten shroud +50 kg
   **If mast bends forward:** Tighten backstay +25 kg
   **If mast bends aft:** Tighten forestay +25 kg

7. **Repeat on starboard tack**
   - Proa SHUNTS (reverses direction)
   - Ama now on left side
   - Observe mast again
   
   **Should behave identically**

8. **Final tensions (moderate wind, 10-15 knots):**
   - Forestay: 300-400 kg
   - Backstay: 300-400 kg
   - Shroud: 500-700 kg
   
   **Mast should be straight under load**

**Safety check:** Sight up the mast track
- Should be straight vertical (no S-curve)
- If bent, reduce opposing stay tension

**Re-tune after first 5 hours of sailing**
- Stays stretch slightly when new
- Bolts may settle

---

## PART 8: INSPECTION & MAINTENANCE

### 8.1 Pre-Sail Checklist

**EVERY time before sailing:**

- [ ] Visual inspect all pad eyes (no cracks)
- [ ] Check all stay connections (shackles tight, no wear)
- [ ] Wiggle mast in step (should be snug, no play)
- [ ] Check crossbeam bolts (torque to 50 Nm monthly)
- [ ] Inspect fiberglass tabbing (no delamination)
- [ ] Check for water in ama (drain if present)

---

### 8.2 Annual Inspection

**Once per year (start of season):**

1. **Remove mast** (lay horizontal on sawhorses)

2. **Inspect mast step:**
   - Check hardwood block for cracks
   - Check UHMW bushing for wear (replace if grooved)
   - Check through-bolts for corrosion
   - Re-tighten all bolts to spec

3. **Inspect pad eyes:**
   - Check for cracks (especially around welds)
   - Check through-bolt threads (should be dry, no rust)
   - Replace any corroded hardware

4. **Inspect crossbeams:**
   - Check aluminum tube for cracks (especially near bolted joints)
   - Check through-bolts for looseness (re-torque to 50 Nm)
   - Inspect bulkheads for delamination (tap with coin - should sound solid)

5. **Inspect stays:**
   - **Dyneema:** Check for chafe at attachment points, replace if >10% fibers show wear
   - **SS wire:** Check for broken strands (replace if ANY strand broken)

6. **Fiberglass tabbing:**
   - Check all bulkhead tabs for cracks or delamination
   - Tap with coin - should sound solid (not hollow)
   - If any voids, grind out and re-tab

**Replace immediately if:**
- Any stay shows damage
- Any pad eye shows cracks
- Any through-bolt shows significant corrosion
- Any bulkhead shows movement relative to hull

---

## PART 9: TROUBLESHOOTING COMMON ISSUES

### 9.1 Mast Won't Stay Vertical

**Symptom:** Mast leans to one side, even with stays tensioned

**Causes:**
1. Mast step not perpendicular to hull
2. Crossbeam not level
3. Ama not parallel to main hull

**Fixes:**
1. Check mast step with level - should be 90° to hull bottom
2. Measure crossbeam height at main hull and ama (should match)
3. Measure ama position at bow and stern (should be equidistant)

---

### 9.2 Stays Keep Loosening

**Symptom:** Stay tension decreases after a few hours sailing

**Causes:**
1. New rope stretching (normal for first 5-10 hours)
2. Through-bolts settling into wood
3. Pad eye backing plate compressing foam

**Fixes:**
1. Re-tension stays (expected for new rigging)
2. Re-torque all through-bolts to specification
3. **If chronic:** Add additional backing plate thickness

---

### 9.3 Creaking Noises from Mast Step

**Symptom:** Loud creaking when sailing, especially in gusts

**Causes:**
1. Mast rubbing in UHMW bushing (normal, but can be loud)
2. Hardwood block moving relative to bulkhead
3. Bolts loose

**Fixes:**
1. Apply waterproof grease to mast at bushing interface
2. Check through-bolts (re-tighten to 40 Nm)
3. **If persistent:** Add additional bolt

---

### 9.4 Crossbeam Bolts Backing Out

**Symptom:** Nyloc nuts loosen despite proper torque

**Causes:**
1. Vibration from sailing
2. Nyloc nut threads stripped (lost locking feature)

**Fixes:**
1. Replace with fresh nyloc nuts
2. Add Loctite 243 to threads (in addition to nyloc)
3. Check monthly and re-tighten as needed

---

### 9.5 Water Intrusion at Pad Eye

**Symptom:** Water drips through pad eye bolt holes when sailing

**Causes:**
1. Sealant (3M 5200) not applied or has failed
2. Through-bolts not sealed properly

**Fixes:**
1. Remove pad eye
2. Clean all mating surfaces with acetone
3. Re-bed with generous 3M 5200
4. Fill bolt holes with thickened epoxy around bolt shafts
5. Re-install and allow 7 days cure

---

## PART 10: UPGRADE PATHS

### 10.1 Carbon Fiber Mast (Advanced)

**Weight savings:** 8 kg → 3 kg (saves 5 kg aloft!)

**Cost:** ~$600 vs $150 for aluminum

**Benefit:** Lower center of gravity = more stable

**When to upgrade:** After 1-2 seasons, if you love sailing and want better performance

---

### 10.2 Hydraulic Backstay Adjuster

**Purpose:** Adjust mast bend while sailing (tune sail shape)

**Cost:** ~$200

**Benefit:** Better upwind performance in varying winds

**When to upgrade:** If racing or doing long-distance cruising

---

### 10.3 Rotating Mast

**Purpose:** Reduces aerodynamic drag (mast becomes leading edge of airfoil)

**Cost:** ~$150 (mast step bearing + hardware)

**Benefit:** 5-10% speed increase

**When to upgrade:** For performance-oriented sailors

---

## SUMMARY: CRITICAL STRESS POINTS

### The Big 5 Attachment Points (In Order of Load):

1. **Shroud to crossbeam/ama** (600-900 kg) - HIGHEST LOAD
   - Requires double bulkhead sandwich
   - 6× M10 through-bolts minimum
   - Most likely failure point if under-built

2. **Mast step compression** (500-800 kg) - CRITICAL
   - Requires hardwood block on bulkhead
   - Compression spreader beam to hull floor
   - Will punch through foam without reinforcement

3. **Forestay attachment** (300-500 kg)
   - Requires backing plate + structural block
   - Cannot bolt to foam alone
   - Common failure point

4. **Backstay attachment** (300-500 kg)
   - Same as forestay
   - Often under-built (people assume less load)

5. **Mast partner** (200-300 kg lateral)
   - Requires substantial plywood ring
   - Through-bolt to bulkhead structure
   - Prevents mast whipping at deck level

**DO NOT SKIMP on any of these. Each failure mode is catastrophic:**
- Shroud failure → Mast falls, capsizes boat
- Mast step failure → Mast punches through hull, boat sinks
- Forestay failure → Mast falls backward, injuries likely
- Backstay failure → Mast falls forward, damages hull
- Partner failure → Mast whips violently, rigging fails

---

## FINAL CHECKLIST

Before first sail with rig installed:

- [ ] All bulkheads glassed into hull with 4+ layers 6oz tabbing
- [ ] Mast step hardwood block through-bolted (4× M10 bolts, 40 Nm)
- [ ] Compression spreader beam installed and tabbed
- [ ] Forestay pad eye backed by 150×150mm plate and structural block
- [ ] Backstay pad eye backed by 150×150mm plate and structural block
- [ ] Crossbeams bolted between double bulkheads (6× M10 bolts each, 50 Nm)
- [ ] Mast partner ring installed and through-bolted
- [ ] All fiberglass has cured minimum 7 days
- [ ] All through-bolts have Loctite 243
- [ ] All pad eyes bedded in 3M 5200
- [ ] Stays are correct length and properly tensioned
- [ ] Mast is vertical when sighted from bow and beam
- [ ] All shackles moused (secured with wire so they can't unscrew)
- [ ] Helper available for first sail (two people minimum)
- [ ] Light wind conditions (5-10 knots max) for first sail
- [ ] PFD and safety equipment on board

---

**This is a comprehensive guide. Don't skip steps. Your safety depends on proper construction.**

**When in doubt, over-build. The penalty is a few extra pounds. The risk is catastrophic failure.**

**Good luck with your build!** 🛶⛵
