---
layout: post
title: "My (Correct) Opinions on Hard Line-Wrapping"
date: 208-01-12
assetsdir: line-wrapping
---

Let's begin by pinning down what hard line wrapping really is:

- If a text includes new-line characters (the character you type when hitting the return key) to wrap long lines, the text uses <strong>hard line wraps</strong>.
- If the text only uses new-line characters in the end of paragraphs, i.e. lets long lines flow to the end of the application window, it uses <strong>soft line wraps</strong>.

An example of a soft-wrapped text
--

{% include blog_img.html img="unwrapped.png" %}

An example of a hard-wrapped text
--
{% include blog_img.html img="wrapped.png" %}

Before you hard-wrap your tex-file consider the following...
--

**...I might prefer longer lines than you**

By hard-wrapping you impose your preferred line width upon me. By avoiding hard-wrapping you allow me to soft-wrap at whatever line-width I want.
      
**...I might have a narrower editor/terminal than you**

What if my text editor is a bit narrower than<br/>
yours? Your<br/>
hard-wrapped lines might end up like this in<br/>
my editor. This<br/>
quite annoying and definitely harder to read.

**...it sometimes prevents navigation by search**

If I read a PDF-version of your document and want to jump to the corresponding point in the latex document I want to be able to search for a sequence of words. This will be impossible if the sequence of words has a hard-wrap somewhere in it.

**...it might be hard to go back!**

As far as I know there is no way of easily going back to "soft-wrap" or "long lines".

