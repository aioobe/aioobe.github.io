---
layout: post
title: "Programming Puzzle: iCar"
date: 2015-10-11
assetsdir: icar
---

> This problem was selected as one of eight problems in [The 2015 Nordic Collegiate Programming Contest](https://icpc.baylor.edu/regionals/finder/nordic-2015). The full set of problems for this competition can be found {% include blog_link.html text="here" url="ncpc2015problems.pdf" %}.

You are at home and about to drive to work. The road you will take is a straight line with no speed limit. There are, however, traffic lights precisely every kilometer, and you can not pass a red light. The lights change instantaneously between green and red, and you can pass a light whenever it is green. You can also pass through a light at the exact moment of changing colour. There are no traffic lights at the start or the end of the road.

Now your car is special; it is an iCar, the first Orange car, and it has only one button. When you hold down the button, the car accelerates at a constant rate of 1 m/s<sup>2</sup>; when you release the button the car stops on the spot.

You have driven to work many times, so you happen to know the schedules of the traffic lights.


The problem
--
How quickly can you get to work?

Input
--
The first line contains a single integer *n*, the length of the road in kilometers (1 &le; *n* &le; 16). Each of the next *n*&minus;1 lines contains 3 integers *t<sub>i</sub>*, *g<sub>i</sub>* and *r<sub>i</sub>*, the first time the *i*th light will switch from red to green after the moment you start driving the car; the green light duration, and the red light duration (40&nbsp;&le;&nbsp;*g<sub>i</sub>*, *r<sub>i</sub>*&nbsp;&le;&nbsp;50; 0&nbsp;&le;&nbsp;*t<sub>i</sub>*&nbsp;&lt;&nbsp;*g<sub>i</sub>*&nbsp;+&nbsp;*r<sub>i</sub>*). Times are given in seconds.

You may assume that any light with *t<sub>i</sub>* &gt; *r<sub>i</sub>* is green at the time you start driving the car, and switches to red *t<sub>i</sub>*&nbsp;&minus;&nbsp;*r<sub>i</sub>* seconds later.

Output
--
Output the minimum time required to reach the end of the road. Answers within a relative or absolute error of 10<sup>&minus;6</sup> will be accepted.

Example
--

**Example Input 1**

    1

**Solution 1**

    44.72135955

**Example Input 2**

    2
    50 45 45

**Solution 2**

    68.52419365

**Example Input 3**

    2
    25 45 45

**Solution 3**

    63.2455532
