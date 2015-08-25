# -*- coding: utf-8 -*-
"""
Created on Thu Aug 06 18:07:35 2015

@author: Administrator
"""

###7-1
#
def print_n(s,n):
    while n>0:
        print s
        n=n-1
###7-2
#
def root(a):
    x = a/2.0
    epsilon=0.0000001
    while True:
        y = (x+a/x)/2
        if abs(y-x) < epsilon:
            break
        x = y
    return y
###7-3
#
import math
def test_root():
    a = 9.0
    while a > 0:
        y1 = root(a)
        y2 = math.sqrt(a)
        print a,y1,y2,y1-y2
        a=a-1
#test_root()
###7-4
#
def eval_loop():
    while True:
        a = raw_input("Please enter an integer!\n")
        if a == "done":
            break
        b = eval(a)
        print b
###7-5
#
def estimate_pi():
    print 1