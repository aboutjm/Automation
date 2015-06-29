"""This module contains code from
Think Python by Allen B. Downey
http://thinkpython.com

Copyright 2012 Allen B. Downey
License: GNU GPLv3 http://www.gnu.org/licenses/gpl.html

"""
import math
from swampy.TurtleWorld import *
world = TurtleWorld()
bob = Turtle()

bob.delay = 0.001
"""#4.1
fd(bob,100)
lt(bob)
fd(bob,100)
"""

"""#4.2
for i in range(4):
    fd(bob,100)
    lt(bob)
"""

"""#4.3(1)
def square(t):
    for i in range(4):
        fd(t,100)
        lt(t)
"""

"""#4.3(2)
def square(t,length):
    for i in range(4):
        fd(t,length)
        lt(t)
"""

"""#4.3(3)
def polygon(t,length,n):
    angle = 360.0/n
    for i in range(n):
        fd(t,length)
        lt(t,angle)
"""

"""#4.3(4)
def circle(t,r):
    circumference = r * math.pi * 2
    n = int(circumference/3)+1
    length = circumference / n
    polygon(t,length,n)
"""

#4.3(5)
def arc(t,r,angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length/3)+1
    step_length = arc_length / n
    step_angle = float(angle) / n
    polyline(t,step_length,n,step_angle)
def polyline(t,length,n,angle):
    for i in range(n):
        fd(t,length)
        lt(t,angle)
def circle(t,r):
    arc(t,r,360)
    
#4.12
#4-1
    #1.
    #2.
    #3.
    
#4-2
def petal(t,r,degree):
    turn = 180 - degree
    arc(t,r,degree)
    lt(t,turn)
    arc(t,r,degree)

def flower(t,r,degree):
    n = int(180/(90-degree))
    for i in range(n):
        petal(t,r,degree)
        lt(t,degree)

flower(bob,100,80)
#4-3
    
#4-4
    
#4-5

