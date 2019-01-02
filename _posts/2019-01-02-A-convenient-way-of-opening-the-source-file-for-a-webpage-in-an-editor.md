---
layout: post
title: "A convenient way of opening the source file for a webpage in an editor"
date: 2019-01-02
assetsdir: custom-edit-page-scheme
---

<br />
{% include blog_img.html img="demo.gif" %}
<br />

If you work with static site generators such as [Jekyll](https://jekyllrb.com/) or [Hugo](https://gohugo.io/) you're probably familiar with the non-zero threshold of for example correcting a typo in a blog post.

Here's a trick for how to open the relevant source file in a text editor with a single click:

- Create a userscript (aka Greasemonkey script) that inserts an *"Edit this page"* link with a custom scheme such as `editpage://`
- Create a script that:
  1. Translates the path of the link to the path on your filesystem
  2. Opens the corresponding file
- Register the script as a handler for the custom scheme

Step 1: Add the "Edit this page" links
--------------------------------------
Install [Tampermonkey](https://tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/). Add the following user script:

    // ==UserScript==
    // @name  Blog Edit Links
    // @match *://*.yourblog.com/*
    // @match *://localhost/*
    // ==/UserScript==
    
    var editNode = document.createElement("span");
    editNode.style.position = "absolute";
    editNode.style.top = "0";
    editNode.style.right = "0";
    var path = window.location.pathname
    editNode.innerHTML = "<a href='editpage://" + path + "'>edit</a>";
    document.body.insertBefore(editNode, document.body.firstChild);

Adjust the `@match` clauses according to your needs. Make sure the script is activated and refresh your page. You should see something like:

{% include blog_img.html img="edit-link.png" style="width: 20em" %}

For a page at URL `yourblog.com/some/page.html` the link will be `editpage://some/page.html`.

Step 2: Create a script that opens the correct source file
----------------------------------------------------------
The script will be invoked with the `editpage://some/page.html` link as argument. This should be translated into something like `/home/you/myblog/some/page.md` and opened in an editor. Here's my version:

    #!/bin/bash
    PROJECT_DIR="$HOME/myblog"
    URL="$1"
    URL_PATH="${URL##editpage://}"
    FS_PATH="$PROJECT_DIR/$URL_PATH"
    
    # Directory? Use index.html
    if [ -d "$FS_PATH" ]
    then
        FS_PATH="$FS_PATH/index.html"
    fi
    
    # .html file missing? Try with .md counterpart
    if [ ! -f "$FS_PATH" ]
    then
        FS_PATH="${FS_PATH/.html/.md}"
    fi
    
    OPTS="--socket-name=blog --no-wait"
    # From https://superuser.com/a/862809/36873
    emacsclient $OPTS --eval "(if (> (length (frame-list)) 1) 't)" | grep t
    if [ "$?" = "1" ]; then
        OPTS="$OPTS --create-frame"
    fi

    emacsclient $OPTS --alternate-editor "" "$FS_PATH"

I use `emacsclient` to reuse the same editor window for every click on an edit link.

Step 3: Register the handler for `editpage://` links
----------------------------------------------------
I'm using Ubuntu and Gnome, so you'll have to do some googling to get this step done if you have a different setup. (Original instructions [here](https://askubuntu.com/questions/514125/url-protocol-handlers-in-basic-ubuntu-desktop).)

1. Put the following lines in `~/.local/share/applications/editpage.desktop`:

       [Desktop Entry]
       Name=Edit Blog Page
       Exec=path/to/your/script.sh %u
       Icon=emacs-icon
       Type=Application
       Terminal=false
       MimeType=x-scheme-handler/editpage;

2. Run

       update-desktop-database

3. Run the following to register the handler:

       xdg-mime default editpage.desktop x-scheme-handler/editpage

Bonus feature
-------------
Add the following lines to your userscript to easily hop between your dev version and your live version of the current page&hellip;

    editNode.innerHTML = "<a href='editpage://" + path + "'>edit</a>, "
                       + "<a href='https://yourdomain.com" + path + "'>live</a>, "
                       + "<a href='http://localhost:4000" + path + "'>dev</a>";

My workflow is typically:

- Navigate my homepage
- Discover something I want to fix
- Click the *dev* link
- Click *edit*
- Fix issue
- Make sure it looks good in browser
- Commit / push
- Click *live* link
- Make sure live version is updated.

Improvements
------------
That's what I use at the moment, and should be enough to get you up and running. An obvious improvement would be to decode custom URLs like blog post pages for example.
