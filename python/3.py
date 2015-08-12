# -*- coding: utf-8 -*-
"""
Created on Mon Jun 15 13:05:23 2015

@author: Administrator
"""
    

def do_twice(f):
    f()
    f()
def do_four(f):
    do_twice(f)
    do_twice(f) 
def print_beam():
    print '+ - - - -',
def print_post():
    print '|        ',
def print_beams():
    do_twice(print_beam)
    print '+'
def print_posts():
    do_twice(print_post)
    print '|'
def print_row():
    print_beams()
    do_four(print_posts)
def print_grid():
    do_twice(print_row)
    print_beams()
print_grid()

def tab():
    a = ''
    for i in range(2):
        a = a + '+ '
        for i in range(4):
            a = a + '- '
    a = a + '+' 
    b = ''
    for i in range(2):
        b = b + '| '
        for i in range(4):
            b = b + '  '
    b = b + '|'
    for i in range(2):
        print a
        for i in range(4):
            print b
    print a
tab()