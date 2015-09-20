---
layout: post
title: "The Painting Problem"
date: 2008-09-17
assetsdir: painting
---

This problem was presented to me at the Sonya Kovalevsky math days at [KTH](http://www.kth.se) back in 2001. Me and my partner figured out the solution of the first part by hand. The second part however was way harder and we didn't manage to find a solution.

I thought about it on and off for seven years (!) before I finally solved it (with the aid of my computer).

Problem 1
--
You're asked to put up a painting. The painting has a long thread attached to its upper corners.

{% include blog_img.html img="fig1.jpg" %}

You should hang up the painting with two nails in a way such that if one (any one) of the two nails is removed, the painting falls down.

Problem 2
--
The same task as task A, but with three nails. That is, you should hang up the painting so that it falls down if one (any one) of the three nails is removed.

Solution
--
Spoiler Alert! Scroll down for solution.
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

{% include blog_img.html img="fig2.jpg" %}

{% include blog_img.html img="fig3.jpg" %}

How I found the solution
--
I solved it by writing an exhaustive search algorithm. How to approach the problem is tricky since there's no obvious set of "choices" for a search algorithm to explore and it's by no means obvious how to easily check whether a solution is correct or not (i.e. how to check if the painting actually falls down upon removing a given nail).

After a lot of thinking however, I realized that one can, without loss of generality, narrow it down to 5 choices in each step: clockwise or counter-clockwise loops around nail 1, 2 or 3 minus the option to go back where it came from. To check if the painting would fall down if nail *X* were to be removed one does the following:

1. Remove all occurrences of *clockwise(X)* and *counterClockwise(X)* (since these loops now surrounds thin air)
2. Repeatedly replace all consecutive occurrences of *clockwise(Y)* and *counterClocwise(Y)* (since these actions cancel each other)
3. If the resulting string is empty, all loops are "canceled out" and the painting is free to fall.
    
The shortest solution turned out to be 10 steps (loops) long. The search tree therefore contains 5<sup>10</sup>&asymp;10 million nodes. I guess you could cut it down to a third by taking symmetry of the nails into account. The algorithm ignores the fact that the thread can pass itself by either going above or below existing loops. I don't believe this is an issue however, since step 2 above only considers consecutive loops.
    
The obvious next step is to do it for four nails. I'm currently letting my algorithm search for such a solution but I have little hope that it will find anything in feasible time. With my current optimizations it would take at least 2 months to search to a depth of 15 steps. And even that is a bit optimistic since the complexity rose from 4 steps to 10 going from 2 nails to 3.
    
An Update!
--
Apparantly this problem has been addressed by proper mathematicians who has solved the general *N*-nail problem using topology! Here's a [link to the paper](http://arxiv.org/pdf/1203.3602.pdf).
