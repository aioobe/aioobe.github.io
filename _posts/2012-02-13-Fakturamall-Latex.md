---
layout: post
title:  "(Swedish) Fakturamall, LaTeX"
date:   2012-02-13
assetsdir: invoice-template
---

Här är mallen som jag skapat för mina fakturor. Jag är inte speciellt bra på LaTeX så det hela är lite av ett hack. Om du snyggar upp koden eller eller förbättrar den på något annat sätt så skicka gärna en kopia till [mig](/). Jag uppdaterar denna sida och ger dig cred om du så önskar.
      
Exempel
--
{% include blog_img.html img="invoice.png" %}

Användning
--
LaTeX räknar ut momsen och totalen. Allt du skriver är

    \product{Datortillbehör}{8000.00}{1}
    \product{Hårddisk, 500 gb}{1500.00}{3}
    \product{Produkt nummer 3}{300.00}{10}
    \product{Produkt nummer 4}{260.00}{5}

och sedan kan du skriva ut momsen med `\tax` och totalen med `\totaltc`.

Filer
--

- [Exempel-PDF](/assets/blog/{{ page.assetsdir }}/invoice.pdf)
- [Tex-mall](/assets/blog/{{ page.assetsdir }}/invoice.tex)
