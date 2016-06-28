---
layout: post
title:  "A generic assert method"
date:   2016-06-28
---

I'm a fan of expressing this

{% highlight java %}
if (conditionA) {
    return a;
} else if (conditionB) {
    return b;
} else if (conditionC) {
    return c;
} else {
    return null;
}
{% endhighlight %}

like this

{% highlight java %}
return conditionA ? a
     : conditionB ? b
     : conditionC ? c
     : null;
{% endhighlight %}

But sometimes the last part actually looks like

{% highlight java %}
    ...
} else {
    throw new AssertionError("Unexpected condition");
}
{% endhighlight %}

in which case you can't directly translate the whole thing to a conditional expression.

Here's where this little utility method comes in handy:

{% highlight java %}
public static <T> T fail(RuntimeException exc) {
    throw exc;
}
{% endhighlight %}

which allows you to write

{% highlight java %}
return conditionA ? a
     : conditionB ? b
     : conditionC ? c
     : fail(new AssertionError("Unexpected condition");
{% endhighlight %}

The generic return type ensures that the method always fits in as an expression. Unfortunately JUnits Assert.fail doesn't follow this pattern.