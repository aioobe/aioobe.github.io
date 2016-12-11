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

**The puzzler**: Is the second version "safer" than the first version? Or, put differently: Are there more 8 character passwords with exactly 1 digit, than there are 8 character passwords with only lower case characters?

On the one hand one might think "*a mix of characters and digits must be better than just characters*", but on the other hand we have "*being forced to 'downgrade' a character (26 options) to a digit (10 options) must surely be bad*".

So which one is it?

The solution becomes apparent if we consider an 8 character password with 1 digit as

- a 7 character password (26<sup>7</sup> choices),
- 1 digit (10 choices), and
- a digit position (8 choices)

We see immediately that 26<sup>7</sup>&times;10&times;8 &gt; 26<sup>8</sup>. What saves us here, intuitively, is the fact that the digit has many possible positions. 

**Conclusion**: It is indeed "safer" to replace a character with a randomly selected digit.
