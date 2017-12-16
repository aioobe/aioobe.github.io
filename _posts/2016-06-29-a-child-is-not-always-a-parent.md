---
layout: post
title:  "A child is not always a parent!"
date:   2016-06-29
---

Don't use the parent/child terminology when discussing inheritance relations.

The parent/child terminology is appropriate when discussing *"has-a"* relations. (A parent *has a* child, and a child *has a* parent.) In other words, this

> `/home` is the parent directory of `/home/aioobe`

and this

> The `abcd` node is a child of the `abc` node in a trie

is perfectly fine.

An inheritance relation on the other hand, is an *"is-a"* relation, as in

> A `Cat` *is an* `Animal`

It does't make sense to say that an `Animal` is *the parent* of a `Cat` or that a `Cat` is *a child* of an `Animal` (at least not when there's only one cat around). A parent and a child doesn't have an *is a* relation with each other.

In the case of inheritance there's always a better terminology: Superclass and subclass. So, instead of saying for instance

> `Animal` is the parent of `Cat`

say

> `Animal` is the superclass of `Cat`

&lt;/rant&gt;
