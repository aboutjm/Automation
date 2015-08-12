# -*- coding: utf-8 -*-
"""
Created on Tue Aug 04 11:23:05 2015

@author: Administrator
"""

###5-2
def do(s):
    print s
def do_n(do,n):
    if n <= 0:
        return
    do(n)
    do_n(do,n-1)
###5-3
##1
def check_fermat(a,b,c,n):
    if n <= 2:
        print "N need more than 2"
        return
    if a**n+b**n == c**n:
        print "Gosh, Fermat's mistake!"
    else:
        print "No, that's not good."
##2
def user_input_check():
    a = raw_input("Please enter an integer!\n")
    b = raw_input("Please enter an integer!\n")
    c = raw_input("Please enter an integer!\n")
    n = raw_input("Please enter a number greater than 2!\n")
    a = int(a)
    b = int(b)
    c = int(c)
    n = int(n)
    check_fermat(a,b,c,n)
###5-4
##1
def is_triangle(a,b,c):
    if (a + b) <= c:
        print "no"
    elif (b + c) <= a:
        print "no"
    elif (c + a) <= b:
        print "no"
    else:
        print "yes"
##2
def user_input_is():
    a = raw_input("Please enter an integer!\n")
    b = raw_input("Please enter an integer!\n")
    c = raw_input("Please enter an integer!\n")
    a = int(a)
    b = int(b)
    c = int(c)
    is_triangle(a,b,c)
###5-5
###5-6