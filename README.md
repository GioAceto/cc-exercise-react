# Colby Commencement Exercise

## Objective

Create a small commencement-style site from a given design. Feel free to develop in whatever technologies best suits you. And feel free to be creative! This exercise is to test how well you can turn a design into an interactive web experience, something done regularly by our team. If you have questions, don't hesitate to ask!

**Brandon Waltz**  
*brandon.waltz@colby.edu*

**You can find the design at this link:**  
https://xd.adobe.com/view/752953c3-5cff-4f4a-7357-cffa2fa80220-0318/

The design is rough and doesn't have precise scaling, but you should be able to get the idea of relative sizing from the design and the list of requirements. Also, the event data differs from what's in the design.

## Requirements

### Global

-   Needs to be responsive
-   The top navigation needs to be sticky when scrolling

### Homepage

-   The top hero section needs to be full viewport height with the date/countdown block half displayed at the bottom of the viewport on initial load
-   The countdown timer to midnight 5/22/22 needs to be actively counting down
-   The play icon in the hero section needs to open a popup video player as a lightbox or modal with following embed code:

```
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/554279132?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=6a2a47460b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Colby College Commencement with end card.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
```

-   Events and event data should be populated from the `events.json` file
-   The little calendar button in the top right corner of the Events section should go to https://events.colby.edu
-   The Share section should use embed code below for social feed:

```
<script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
<link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
<ul class="juicer-feed" data-feed-id="colby-college-master-feed"></ul>
```

-   Photos in Photos section should open in a lightbox gallery
-   Social icons should go to our social channels: https://www.facebook.com/colbycollege/, https://www.instagram.com/colbycollege, https://twitter.com/ColbyCollege

### Event Page

-   Top hero section is slimmer, not full viewport height but needs to include event title for desktop somewhere in lower right
-   Use the following embed code to add the chat feature:

```
<div id="disqus_thread"></div>
<script>
    var disqus_developer = 1;
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://EXAMPLE.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

\*\* Hopefully the Disqus widget works, it may not.

-   More Events block should be a carousel of all events, exluding the event the user is viewing.

\*\*Links or buttons with unspecified urls can just go to "#"

## Ingredients

-   An images folder has been provided - names should be pretty self-explainitory
-   Our lightbox library has been provided - find docs here: https://fslightbox.com/javascript/documentation
-   You can use icons form Material Icons: https://fonts.google.com/icons
-   See style guide below for colors and fonts
-   Use `<link rel="stylesheet" href="https://use.typekit.net/djf7stt.css">` to pull in the fonts

## Style Guide

**Font:**  
`font-family: libre-franklin,Sans-serif;`

**Colors:**  
Colby Blue = #002878  
Black = #000000  
Light Black = #363636  
Light Gray = #ebebeb  
Dark Gray = #707070  
Orange = #CC6C41  
White = #ffffff
