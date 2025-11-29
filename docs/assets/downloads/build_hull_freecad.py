"""
OSEP-16 Hull Builder for FreeCAD
Import this script into FreeCAD to automatically build the hull

Usage:
1. Open FreeCAD
2. Macro → Macros → Create → Paste this code
3. Execute
4. Hull will be built automatically
"""

import FreeCAD as App
import Part
import Draft

# Create new document
doc = App.newDocument("OSEP16_Hull")

# Station definitions
stations = {
    0:  {'z': 0,     'beam': 0,    'sheer': 12, 'keel': -2,  'chine_b': 0,    'chine_h': -2},
    1:  {'z': 19.2,  'beam': 6,    'sheer': 14, 'keel': -4,  'chine_b': 5.5,  'chine_h': -2},
    2:  {'z': 38.4,  'beam': 9,    'sheer': 15, 'keel': -6,  'chine_b': 8.5,  'chine_h': -1},
    3:  {'z': 57.6,  'beam': 11,   'sheer': 16, 'keel': -7,  'chine_b': 10,   'chine_h': 0},
    4:  {'z': 76.8,  'beam': 11.5, 'sheer': 16, 'keel': -7.5,'chine_b': 10.5, 'chine_h': 0},
    5:  {'z': 96,    'beam': 12,   'sheer': 16, 'keel': -8,  'chine_b': 10,   'chine_h': 0},
    6:  {'z': 115.2, 'beam': 11.5, 'sheer': 16, 'keel': -7.5,'chine_b': 10.5, 'chine_h': 0},
    7:  {'z': 134.4, 'beam': 11,   'sheer': 16, 'keel': -7,  'chine_b': 10,   'chine_h': 0},
    8:  {'z': 153.6, 'beam': 9,    'sheer': 15, 'keel': -6,  'chine_b': 8.5,  'chine_h': -1},
    9:  {'z': 172.8, 'beam': 6,    'sheer': 14, 'keel': -4,  'chine_b': 5.5,  'chine_h': -2},
    10: {'z': 192,   'beam': 0,    'sheer': 12, 'keel': -2,  'chine_b': 0,    'chine_h': -2},
}

# Create station wires
station_wires = []

for stn_num in range(11):
    s = stations[stn_num]
    
    if s['beam'] == 0:  # Bow/stern - single line
        p1 = App.Vector(0, s['keel'] * 25.4, s['z'] * 25.4)  # Convert to mm
        p2 = App.Vector(0, s['sheer'] * 25.4, s['z'] * 25.4)
        line = Part.LineSegment(p1, p2)
        station_wires.append(Part.Wire([line.toShape()]))
    else:
        # Create cross-section profile
        points = [
            App.Vector(0, s['keel'] * 25.4, s['z'] * 25.4),
            App.Vector(-s['chine_b'] * 25.4, s['chine_h'] * 25.4, s['z'] * 25.4),
            App.Vector(-s['beam'] * 25.4, s['sheer'] * 25.4, s['z'] * 25.4),
            App.Vector(0, s['sheer'] * 25.4, s['z'] * 25.4),
            App.Vector(s['beam'] * 25.4, s['sheer'] * 25.4, s['z'] * 25.4),
            App.Vector(s['chine_b'] * 25.4, s['chine_h'] * 25.4, s['z'] * 25.4),
            App.Vector(0, s['keel'] * 25.4, s['z'] * 25.4),  # Close the loop
        ]
        
        # Create spline through points
        spline = Part.BSplineCurve()
        spline.interpolate(points)
        station_wires.append(Part.Wire([spline.toShape()]))

# Create loft surface
loft = Part.makeLoft(station_wires, True, False)

# Create Part object
hull_obj = doc.addObject("Part::Feature", "OSEP16_MainHull")
hull_obj.Shape = loft

doc.recompute()

print("Hull created successfully!")
print("Length: 192 inches (4876.8 mm)")
print("Max Beam: 24 inches (609.6 mm)")
print("You can now export as STEP, STL, or other formats")

