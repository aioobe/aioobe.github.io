---
layout: post
title:  "A child is not always a parent!"
date:   2016-06-29
---

Don't use the parent/child terminology when discussing inheritance relations.

The parent/child terminology is appropriate when discussing *"has-a"* relations. (A parent *has a* child, and a child *has a* parent.) In other words, this

> `/home` is the parent directory of `/home/aioobe`

and this

> The `abcd` node is a child of the `abc` node in a trie"

is perfectly fine.

An inheritance relation on the other hand, is an *"is-a"* relation, as in

> A cat *is an* animal

It does't make sense to say that an animal is *the parent* of a cat (at least not when there's only one cat around). In the case of inheritance, there's a better terminology: Super-class and sub-class. So, instead of saying

> Animal is a parent of Cat

say

> Animal is a super-class of Cat

&lt;/rant&gt;
