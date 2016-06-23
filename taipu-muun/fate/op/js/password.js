// Store the correct sentence here.

var correctSentence = "The cherry blossoms are blooming.";

var userSentence = $("#leSentence").val();

if (userSentence === correctSentence) {
	var redirectScriptThing = document.createElement("script");
	redirectScriptThing.src = "js/redirectme.js";
	document.body.appendChild(redirectScriptThing);
}
