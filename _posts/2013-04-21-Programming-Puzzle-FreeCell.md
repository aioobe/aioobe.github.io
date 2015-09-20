---
layout: post
title: "Programming Puzzle: FreeCell"
date: 2013-04-21
assetsdir: freecell
---

> This problem was selected as one of eight problems in [KTH Challenge 2013](http://challenge.csc.kth.se/2013/). The full set of problems for this competition can be found {% include blog_link.html text="here" url="kth-challenge-2013-problems.pdf" %}.

FreeCell Solitaire is, just as computer science, mostly about sorting. The goal is to sort a deck of cards using a fairly convoluted algorithm.
        
The rules are the following: A shuffled deck is laid out in eight columns. Only the bottom card of a column may be moved. A card of value *v* may be moved to the bottom of another column only if the column is empty, or if the bottom card of the destination column is of the opposite color and of value *v*+1. (3 of hearts may for instance be moved below 4 of clubs.) At your disposal you have four free cells (see them as the available memory if you so like!) which can hold one card each. The figure below illustrates a few legal moves.


{% include blog_img.html img="freecell.png" style="width: 75%;" %}
        
Most FreeCell computer games allow you to move more than one card at a time, provided there are enough empty cells and empty columns to accomplish the same move but one card at a time. In the image above for instance, the whole 5-4-3 pile can be moved to 6 of spades by using the free cells and empty column to temporarily hold 3 and 4.

The problem
--
Is it possible to move a sorted pile of ***k* cards** from one column to another (non empty) column given that you have ***n* empty cells**, and ***m* free columns** (and nothing else) to work with?
        
Input
--
The input consists of several test cases. Each test case is represented by a line with tree numbers representing *n*, *m* and *k* respectively. (We&rsquo;re considering a generalized form of FreeCell in which 0 < *n*, *m* < 5 and 0 < *k* < 100.) Input is terminated by EOF.

Output
--
The program should print *yes* if it is possible to move a pile of *k* cards using *n* empty cells and *m* free columns.

Example
--
Given 3 free cells, and 1 empty column, as in the figure above (disregard from the arrows), one can move 8 cards (but not 9!) from one column to another.

**Example Input**

    3 1 8
    3 1 9

**Solution**

    yes
    no

