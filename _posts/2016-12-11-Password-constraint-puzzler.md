---
layout: post
title:  "Password Constraint Puzzler"
date:   2016-12-11
---

I was creating a Java snippet for password generation for [programming.guide](http://programming.guide) and stumbled across a fun puzzler. Suppose you have the following scenario:

> You're a user trying to register a new account. The site says that the password must be at least 8 characters, so you enter `"qurcoehx"`. The site responds with
>
> &nbsp;&nbsp;&nbsp;*<font style="color: red">Password must contain at least 1 digit</font>*
>
> You're lazy and don't want to type more characters than necessary, so you stick to 8 characters and replace the `c` with a `7`: `"qur7oehx"`. The site accepts the password.

**The puzzler**: Is the second version "safer" than the first version? Or, put differently: Are there more 8 character passwords with exactly 1 digit, than there are 8 character passwords with only letters?

On one hand you can reason&hellip;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*a mix of characters and digits must be better than just characters*

&hellip;but on the other hand&hellip;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*being forced to 'downgrade' a letter to a digit must surely be bad.*

So which one is it?

Let's first focus on lower case character. Without a digit, there are 26<sup>8</sup> 8 character passwords. When forced to include a digit, we have:

- a 7 letter password (26<sup>7</sup> choices),
- 1 digit (10 choices), and
- a digit position (8 choices)

We see that 26<sup>7</sup>&times;10&times;8 is greater than 26<sup>8</sup>, so replacing a character with a digit actually helps. What "saves" us here, intuitively, is the fact that the digit has many possible positions.

If we simplify the inequality by dividing both sides with 26<sup>7</sup>, we get

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&times;8 &gt; 26

In other words, inserting a digit is better as long as

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&times;[number of digit positions] > [number of letters].

Even with just 2 characters we're better off "downgrading" one of them from a letter to a digit.

If we on the other hand consider upper case letters as well, i.e. 52 alternatives, we need more than ⌊52/10⌋ = 5 characters for the downgrade to make sense.

**Conclusion**: The tongue in cheek security analysis here is, as long as you have a reasonable long password, it's an improvement to replace a letter with a digit.
