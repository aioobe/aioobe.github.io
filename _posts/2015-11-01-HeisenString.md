---
layout: post
title: "Heisen String"
date: 2015-11-01
assetsdir: heisen-string
---

Here's a good (and somewhat surprising) reason keep your `toString` implementations free of side effects.

The program below will, as shown in the screen shot, output <code>HeisenString[<b style="color: red">1</b>]</code> in a normal run:

{% include blog_img.html img="normal-run.png" %}

Now suppose we want to debug this program. We set a break point right before the `System.out.println` and hit debug. Without really asking for it IntelliJ (and many other popular IDEs) show the string representation of the local variables:

{% include blog_img.html img="during-debug.png" %}

This causes the `toString` method to be called one extra time during debugging, and as a result the program outputs <code>HeisenString[<b style="color: red">2</b>]</code>:

{% include blog_img.html img="after-debug.png" %}
