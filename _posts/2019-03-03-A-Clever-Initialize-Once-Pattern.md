---
layout: post
title: "A Clever Initialize-Once Pattern"
date: 2019-03-03
---

Initialization methods should most often only be called once per run of the application, per session, per request, etc. Once it has been called, subsequent calls can be ignored or, if you want to enforce clean and tidy control flow, consider them as errors:

    public void initialize() {
        if (initialized) {
            throw new AlreadyInitializedException();
        }
        initialize = true;

        // Actual initialization...
    }

(Not thread safe, but let's assume it's a single threaded application.)

Now suppose you compile and ship the above code. A week later the customer calls you and says "The application won't start. It crashes with an AlreadyInitializedException and a stack trace." You get hold of the stack trace and you get a clear picture of why the second call to `initialize` was made.

Unfortunately that second call seems to be legit! The first call must have been made in error, but you have no trace of how and when that call was made. A smarter version of the above code is therefore:

    private Throwable firstInitialization = null;
    
    // ...

    public void initialize() {
        if (firstInitialization != null) {
            throw new AlreadyInitializedException(
                    "See 'caused by' trace for first call",
                    firstInitialization);
        }
        firstInitialization = new Throwable();

        // Actual initialization...
    }

With the above code, the stack trace you receive from the customer will include stack traces for both the first (in this example invalid) call, and the second call which actually throws the `AlreadyInitializedException`.

Is this a dirty hack?
---------------------
You could argue both ways: Since this is not the traditional way a caused-by exception is wrapped, it violates the principle of least astonishment and may confuse fellow developers. At the same time, you can argue that the first call is indeed the _cause_ for the second call to fail. The use of the caused-by constructor is therefore semantically correct and confused developers should think harder.
