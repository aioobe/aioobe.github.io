---
layout: post
title: "Programming Puzzle: Count von Walkers Fence"
date: 2014-04-13
assetsdir: count-von-walker
---

> Here's a programming puzzle I came up with. It was selected as one of eight problems in [KTH Challenge 2014](http://challenge.csc.kth.se/2014/). The full set of problems for this competition can be found {% include blog_link.html text="here" url="kth-challenge-2014-problems.pdf" %}.

The old Count von Walker ponders along the fence of his backyard. The fence has a repeating pattern with poles in the ground at equal distances. Since von Walker has nothing better to do, he counts the number of steps he takes between each pole.

The distance between two consecutive poles turns out not to be an even multiple of the length of his steps because sometimes he takes two steps between the poles, and sometimes he takes three steps.

{% include blog_img.html img="figure.png" style="width: 90%;" %}

Von Walker knows that his steps are always 1 meter long, so he starts thinking of what the distance between the poles may be. *"It must be more than 2 meters since I occationally can fit 3 steps between the poles, but it must be less than 3 meters since I sometimes only fit 2 steps in between."*

The Problem
--
Construct an algorithm that, given a list of step counts, tells the minimum possible distance resp. maximum possible distance between two consecutive poles. (The poles can be considered to be of 0 width and each step is between two poles.)

Input
--
The input consists of several test cases. Each test case is represented by a line containing the list of integer step counts, *c*<sub>1</sub>, *c*<sub>2</sub>, &hellip;, *c*<sub>*N*</sub> where 0 &le; *c*<sub>*i*</sub> &le; 10000 and *N*&nbsp;&le;&nbsp;1000. Input is terminated by EOF.

Output
--
For each line of input, the program should print *D*<sub>min</sub> and *D*<sub>max</sub> (separated by a space and followed by a new line character) where *D*<sub>min</sub> and *D*<sub>max</sub> represent the least possible resp. greatest possible distance between two consecutive poles.

In other words, the given list of step counts *c*<sub>1</sub>, *c*<sub>2</sub>, &hellip;, *c*<sub>*N*</sub> should be possible <em>if and only if</em> the actual distance between two poles lies in the interval (*D*<sub>min</sub>, *D*<sub>max</sub>).

Results with relative or absolute error 10<sup>-7</sup> will be considered correct.

Example
--
Given the list of step counts [1, 1] the minimum and maximum possible distance between two consecutive poles is 0.5 resp. 1.5.

For the step counts [2, 3, 2] the minimum and maximum distance is 2 resp. <sup>8</sup>/<sub>3</sub>.

**Example input**

    1 1
    2 3 2

**Solution**

    0.5 1.5
    2 2.6666666666666665


        
