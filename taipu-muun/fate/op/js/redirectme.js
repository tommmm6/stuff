/* 
B-baka!
Oh, come on maaan. Gimme more credit than that :P

Like seriously
I ain't gonna make it <i>that</i> easy for you...
:P

Though, I could've made the strange commenting on hf-op.html a little less obvious.
And maybe I could've hidden the actual code.
Oh well...

If you're seeing this, you probably haven't tried importing the script into le page.
Run le Javascript thingy below on hf-op.html for a nice image.

var s = document.createElement("script"); s.src = "js/redirectme.js"; document.body.appendChild(s);

*/




/* For the lols, in case this script gets attached to a webpage.
 * BEWAR: Adblock Issues?
 * I dunno.
 * This method probably ain't gonna be triggering dem adblocks any time soon. 
 */

var leFunnyImage = document.createElement("img")
leFunnyImage.id  = "leFunnyImage";
leFunnyImage.src = "http://i.imgur.com/LxpyXo6.gif";

// Seems JS is incapable of accepting "100%" as the height before the element is added...
leFunnyImage.height = window.innerHeight;
$("body").html(leFunnyImage);  // I'll laugh if this actually works...

// Overflowy and image alignment stuff.
$("body").css({
	overflow: "hidden",
	// Blooming hashes...
	"text-align": "center"
})

