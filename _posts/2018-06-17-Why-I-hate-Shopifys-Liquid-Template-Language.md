---
layout: post
title: "Why I hate Shopify's Liquid Template Language"
date: 2018-06-17
---

After writing a few hundred articles over at [Programming.Guide](https://programming.guide) using Jekyll / Liquid, I've concluded that I absolutely hate Liquid. Here's a non-exhaustive list of my pet peeves...

Horrible Arithmetics
--------------------
I mean...

    {% raw %}{% assign x = a | plus: 100 | divided_by: y %}{% endraw %}

...come on? Any sane language would allow `{% raw %}{% assign x = a + 100 / y %}{% endraw %}`.

No Parenthesized Expressions
----------------------------

Since there's no concept of operator precedence, you'd expect to at least be able to do

    {% raw %}{% assign x = a | plus: (100 | divided_by: y) %}{% endraw %}

but nope.

Terrible String Handling
------------------------
Almost everything is a string, yet string handling is horrible. Want to insert a newline? `\n`? -- No. The best way is to actually do

    {% raw %}{% capture newLine %}
    {% endcapture %}{% endraw %}

and then use `newLine`.

Expressions vs Variables
------------------------
Sometimes a variable is the only acceptable expression. You can't for instance do

    {% raw %}{% for item in items | sort: "price" %}
        ...
    {% endfor %}{% endraw %}

You *must* store the sorted array in a temporary variable. Same limitation for filter arguments, include arguments, if statements, ...

Negate Boolean Values
---------------------
You can express *'and'* and *'or'*, but not *'not'*. Someone must have realized this shortcoming and introduced `{% raw %}{% unless ... %}{% endraw %}`, which is `{% raw %}{% if not ... %}{% endraw %}`. Unfortunately this still doesn't allow you to express *'if a or not b'*. Sigh...

All Variables are Global
------------------------
This means that whenever I `{% raw %}{% include ... %}{% endraw %}` a file, I risk messing up all my current variables. It also makes it impossible to use variables in recursive includes (like when rendering menus or comment trees) since assignments in inner includes will overwrite variables in the outer includes.

No Object Literals
------------------
There is a concept of objects / maps, but there's no way to create them yourself. An expression like `{% raw %}{{ x | inspect }}{% endraw %}` might give you

    { "a" => "b" }

Yet there's no way to express something like

    {% raw %}{% assign x = {"a" => "b"} %}{% endraw %}

No Array Literals
-----------------
There's no way to write array literals. This is for instance invalid:

    {% raw %}{% assign arr = ["a"] %}{% endraw %}

You have to resort to something ugly like: `"a" | split: "X"`.

Since `"" | split: "X"` should logically result in `[""]` it would seem even trickier to produce the empty array. Luckily(?) `split` is buggy, and `"" | split: "X"` actually returns `[]`.

Perhaps that's by design? Maybe `split` filters out empty elements? -- No, `",a" | split: ","` gives `["", "a"]`... go figure.

Horrible Comment Syntax
-----------------------
And the award for the worst comment-syntax of the century goes to...... Liquid! It's not particularly tempting to comment the code when you have to write

    {% raw %}{% comment %}Simple explanation{% endcomment %}{% endraw %}

No While Loops
--------------
No while loops? Seriously? Not even something that resembles it? I see where they came from. Shopify don't want "designers" to bring down servers by creating infinite loops, but recursive includes are allowed! Just as the recursion depth is capped, you could cap the number of iterations!
