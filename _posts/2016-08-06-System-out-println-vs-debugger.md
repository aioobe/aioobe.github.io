---
layout: post
title: "System.out.println vs Debugger"
date: 2016-08-06
assetsdir: println-vs-debugger
---

I've met too many people looking down on "System.out.println debugging" and claiming that not using a debugger is a mistake.

I don't agree.

Sure, you can learn a lot from stepping through code but should you ever accidentally step over a critical line, for instance by stepping over a method which you should have stepped into, or need to do a non-trivial modification to the code, you need to restart the execution and go back to square 1.

{% include blog_img.html img="crates.png" %}
<div class="figureText">The state of a debug execution is fragile. You invest time that may go to waste, should you make a small mistake.</div>

When diagnosing a bug I tend to restart the execution over and over again. Trying different inputs, making small modifications to see how it affects the execution down the road or just to try again if the bug is non-deterministic. As with all repetitive tasks, programmers should shy away from doing it manually and try to automate it. By "automating" I here mean getting the same information you would get from a debug run by just clicking a button, and this I claim, is easiest to do by putting useful logging statements at key points in the code.

{% include blog_img.html img="scaffold.png" %}

<div class="figureText">Writing clear System.out.println statements obviously takes more time than setting a break point, but it's more robust when it comes to mistakes.</div>

Finally, some protips:

- Take care to write clear debug messages. Seriously, the output of `System.out.println(x);` will make *no sense* 10 minutes from now. A better choice would be `System.out.println("In StrangeClass.weirdMethod: x=" + x);`
- If you did not follow the above advice, and see something like `7` being printed on the console, and you have no idea where it comes from, you can use [this trick](http://stackoverflow.com/a/30437736/276052) to sort it out.
- As soon as a debugging statement has served it's purpose, remove it. Too much debug output is confusing, and more confusion is the last thing you need when trying to understand code.
- So you fixed the bug and the test passes. Before you commit your change, make sure you don't have any debugging statements left in the code. Something like `git diff | grep "^\+.*System\.out"` might be a good idea.
