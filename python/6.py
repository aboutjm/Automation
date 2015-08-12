# -*- coding: utf-8 -*-
"""
Created on Tue Aug 04 16:26:06 2015

@author: Administrator
"""

###6-1
def compare(x,y):
    if x > y:
        return 1
    elif x == y:
        return 0
    else:
        return -1
###6-2
def hypotenuse(x,y):
    cc = x**2 + y**2
    c = cc**0.5
    return c
###6-3
def is_between(x,y,z):
    if x <= y <= z:
        return True
    return False
###6-4
"""
x=1
y=2
c(1,5,3)
total=9
b(9)
prod=90
a(9,9)
x=10
x*y=90
square=8100
"""
###6-5
##http://en.wikipedia.org/wiki/Ackermann_function
def A(m,n):
    print m,n
    if m == 0:
        n = n + 1
    elif m > 0 & n == 0:
        A(m-1,1)
    elif m > 0 & n > 0:
        A(m-1, A(m,n-1))
    print m,n
##http://thinkpython.com/code/ackermann.py
###6-6
##1
#
##2
#
##http://thinkpython.com/code/palindrome_soln.py
###6-7
def is_power(a,b):
    if a % b == 0:
        if a / b == b:
            print "true"
            return True
        else:
            is_power(a/b,b)
    else:
        print "false"
        return False
###6-8
def gcd(a,b):
    if a >= b:
        for i in range(b):
            if a % ( b - i ) == 0 and b % ( b - i ) == 0:
                return b-i
    gcd(b,a)