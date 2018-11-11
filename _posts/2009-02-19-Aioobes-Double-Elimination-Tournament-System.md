---
layout: post
title: "Aioobe's Double Elimination Tornament System"
date: 2009-02-19
assetsdir: tournament
---

This is a demonstration of my implementation of a [*double-elimination tournament*](http://en.wikipedia.org/wiki/Double-elimination). A double elimination tournament is divided into a <em>winners bracket</em> (WB) and a <em>losers bracket</em> (LB). All participants start of in the WB. If a player loses a game in the WB he drops down to the LB, and if he losses a game in the LB the he's eliminated from the tournament. Consequently, a player is eliminated after two losses, thus the name double-elimination. The winner of the WB plays the winner of the LB in the final round.

Features of the system
--
- Fully automatic/algorithmic generation of brackets
- Handles any number of players (including odd numbers such as 9, 13, 35)
- Bracket Balancing (each player is idle as few consecutive rounds as possible)
      
Implementation
--
1. Enter a comma separated list of players and click reset (or stick with the defaults).
2. <b style='color: red'>Click on those players that should proceed in the tournament.</b>
3. Send your comments to andreas dot lundblad at gmail dot com :)

<applet width="680" height="600" code="se.aoeu.bracketapplet.BracketApplet" archive="/assets/blog/{{ page.assetsdir }}/BracketApplet.jar">
</applet>


How to obtain the application, and its source code
--
A stand-alone application (including source code) is released as [postcardware](http://en.wikipedia.org/wiki/Postcardware). To obtain a copy you simply send me a greeting from your hometown in the form of a postcard. My home address is available [here](/). Remember to include the email address to which you wish to receive the application. Demo video below.

<iframe width="620" height="415" src="https://www.youtube.com/embed/kR5mFi-XlbY" frameborder="0" allowfullscreen></iframe>

The application also implements the "if-necessary" extra final round (see note 1 above) and save/load features!

Notes
--
- The demo above suggests that if the winner of the WB loses the final he is eliminated on his first loss. To deal with this injustice the finalists could play an extra game if this is the case.
- Seeding will be included in the next version ;)

