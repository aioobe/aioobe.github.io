---
layout: post
title: "Getting RFID implants in both hands"
date: 2018-12-05
assetsdir: rfid-implants
---

I realized that RFID implants are no longer in "alpha stage". They are fairly well tested, easy to get hold of them, they are cheap, inserting them isn't a big deal, usage is getting widespread, and should you regret putting them in they're actually quite easy to remove!

{% include blog_img.html img="nfc-in-ziplock.jpg" style="max-height: 25em;" %}

The alternatives
----------------
There are a few competing standards. These are the types of chips I considered...

{% include blog_img.html img="mifare-classic-logo.png" style="float: right; width: 25%; margin-left: 1em;" %}
  
- NFC, Mifare Classic

  Legacy technology, but commonly used in loyalty cards, public transportation, etc. [Security is broken](https://www.computerworld.com/article/2537817/security0/how-they-hacked-it--the-mifare-rfid-crack-explained.html), which is bad if you're worried that someone will clone your implant, but good if you intend to clone your own cards to the chip.

<p style="clear: both" />
{% include blog_img.html img="nfc-ntag.jpg" style="float: right; width: 25%; margin-left: 1em;" %}
  
- NFC, NTAG216

  This is a newer standard. Support among mobile phones is more widespread for NTAG than for Mifare. My Galaxy S6 for example, works with NTAG but not with Mifare. (My wife's S8 however works with both standards.) There's no security mechanism to read/write this type of chip.

<p style="clear: both" />
{% include blog_img.html img="em-tag.jpg" style="float: right; width: 25%; margin-left: 1em;" %}
  
- EM chip

  De facto standard in many office buildings. In particular it's used in the building where I work. Usually (always?) easy to clone. EM chips are _low frequency_ (125 kHz) as opposed to NFC which are _high frequency_ (13.56 MHz) which means that EM chips have slightly better range than NFC chips.

There are other alternatives too, but the above ones were the "candidates" I considered.

My Choices
----------
I had already installed a front door lock in my house, [ID Lock 150](https://idlock.se/id-lock-150/), which is compatible with NFC cards, so I had kind of already decided to go with an NFC implant. Since I was curious to try to clone some of my cards I carried in my wallet, I went for a Mifare Classic.

At the same time I felt that I wouldn't really be satisfied with the whole project if I still needed a fob for the office. So I decided to go all in and put an EM chip in the other hand.

There are versions of the Mifare chip that allows you to rewrite its unique identifier (UID, first bytes of the cards storage). A feature known as "Chinese backdoor". According to the spec, these bytes _should_ be read only, so technically speaking these chips aren't compliant. It's however quite useful if you want to create a 100% accurate clone of, for example, a loyalty card.

There are two implants on the market with Chinese Backdoors (that I know of):

- [xM1 Plus](https://dangerousthings.com/shop/xm1-plus/) from [DangerousThings](https://dangerousthings.com), and
- [MultipassMifare](https://cyberise.me/multipassme/27-multipass-mifare.html) from [Cyberise.Me](https://cyberise.me/).

Due to [an issue](https://forum.dangerousthings.com/t/xm1-chip-issue/1520) with the xM1 Plus, I decided to go for the one from Cyberise.me.

{% include blog_img.html img="multipass-mifare.jpg" caption="The MultipassMifare from Cyberise.Me." %}

The syringe doesn't look like your usual flu shot:

{% include blog_img.html img="syringe-by-hand.jpg" caption="The MultipassMifare syringe next to my hand, still in its sterile wrapping." style="max-height: 30em" %}

From the limited research I did on the EM chip, it seems like they are all based on T5577 and have the same form factor. Since I was already shopping at Cyberise.Me I went with their [MultipassRFID](https://cyberise.me/multipassme/29-multipass-rfid.html).

{% comment %}{% include blog_img.html img="em-and-cent.jpg" caption="The MultipassRFID from Cyberise.Me." %}{% endcomment %}

{% include blog_img.html img="me-and-both-packages.jpg" caption="Me with the MultipassMifare and MultipassRFID packages." style="max-height: 30em;" %}

The procedure
-------------
The procedure was uneventful. Videos of both insertions below. There are plenty of similar videos (better ones!) on YouTube.

I say in the first video that it hurt a little, but actually it was more an _awkward_ sensation than a painful one. (No anaesthesia, and someone is poking around inside your hand!) It should also be said that the first chip was the larger one and it went pretty deep, which also shows in the aftermath pictures further down. The second procedure honestly didn't hurt more than a pinch.

<div style="text-align: center; margin: 3em;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tiX3ISvCfzo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div style="font-style: italic;">First procedure, right hand, larger implant.</div>
</div>

<div style="text-align: center; margin: 3em;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/poNnGzZFwuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div style="font-style: italic;">Second procedure, left hand, smaller implant.</div>
</div>

Aftermath
---------
Almost no bleeding from my left hand. Some bleeding from my right hand right after the procedure, and very little bleeding the day after. No bleeding at all after that.

{% include blog_img.html img="bandaids.jpg" caption="About an hour after the procedure." style="max-height: 30em;" %}

After a couple of days I had close to no bruising on my left hand, and a pretty bad bruising on my right hand. It's a bit hard to see how big the bruise is on my right hand, but if you look at my right thumb you see the color shift and you get a sense of the radius of the bruise.

{% include blog_img.html img="bruising.jpg" caption="Six days after the procedure." style="max-height: 30em;" %}

At one point my right thumb even felt numb for a while. I was a bit worried, but the next day it felt better and I had no issues after that.

The pictures of my hands further down in the next section are taken five weeks after the procedure, and as you can see, there are barely any scars at all.

Size of the implants
--------------------
At first I didn't think much about the sizes of the implants. _"Bah, they're measured in millimeters! I don't think I'm very sensitive anyway."_ But let me tell you, millimeters matter here.

Here's a comparison of the chips I have on my desk right now:

{% include blog_img.html img="chip-size-comparison.jpg" caption="Size comparison. Top to bottom: NTAG from Chipster.nu, MifareMultipass from Cyberise.Me, Mifare from Chipster.nu" style="max-height: 30em;" %}

And here's a picture where you can see outlines of the implants in my hands:

{% include blog_img.html img="my-hands.jpg" caption="Left hand: MultipassRFID tag (12&times;2 mm), Right hand: MultipassMifare (18&times;3 mm)" style="max-height: 30em;" %}

Now let me tell you _why_ I think the size matters here. If you press on one end of the implant, the other end will tend to push upward (think teeterboard) which can hurt a little. Here's an illustration:

{% include blog_img.html img="pain-illustration.png" caption="Pressing on one end of the implant tends to push out the other end causing a slightly stinging feeling." style="max-height: 30em;" %}

This effect is more noticible on my longer implant. You typically notice it when someone gives you a firm hand shake.

Also, if you have a longer implant, it takes less force to push it inwards into the hand when for instance pushing on a door handle.

{% include blog_img.html img="pain-illustration-2.png" caption="Potential pain when pushing on, for example, a door handle." style="max-height: 30em;" %}

That being said, the uncomfortable feeling wares off. After a couple of weeks when the bruising has vanished, the implant has wiggled its way to its most natural positioned, and the body has "adapted" to the implant all of this is far less noticible.

Success
-------
Here's me unlocking the door to my house.

<div style="text-align: center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wo1xKhdV_3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Don't let the video fool you. It looks easy, but it required about 20 attempts before figuring out the right position and angle for this to work. After some practice however, the success rate was pretty good.

Conclusion
----------
I'm really happy I went with both an NFC chip and an EM chip. Admittedly, it's not particularly inconvenient to carry an extra fob for the office and I can register my public transportation card with my door lock, so not even an extra card to carry for that purpose. But it's sligthly more convenient not having to take out your wallet and it's a lot more fun to unlock doors with your hands. :-)

I've learned a ton of things about the technology. If I some how woke up without my implants tomorrow, I would order new ones and put them in right away.

PLOT TWIST...
-------------
About a month after inserting the chips, my MultipassMifare broke for some reason! Read more about it in [my next blog post]({% post_url 2019-01-27-Removing-my-NFC-implant %})...
