//add all necessary JavaScript files
$("div.footer").append('<script src="js_and_plugins/footer.js"></script>');


//animate page when loading
$(".animsition").animsition();

//quotes oject stored using object literal
/*var all_quotes = {
	q1 : {
		"quote" : "Your past doesn't equal your future.",
		"author" : "Tony Robbins"
	}
};*/

//crate quote object using constructor function
function All_quotes(quote, author){
	"use strict";	
	this.quote = quote;
	this.author = author;	
}

//all quotes instances - template: var qN = new All_quotes("", "");
var q1 = new All_quotes(
			"Your past doesn't equal your future.", 
			"Tony Robbins"
		);
var q2 = new All_quotes(
			"The secret of change is to focus all your energy, not fighting the old, but on building the new.", 
			"Socrates"
		);
var q3 = new All_quotes(
			"Keep calm and carry on.", 
			"Winston Churchill"
		);
var q4 = new All_quotes(
			"Passion is like fire in your belly. If you contain it, it produces great results like light from fire. If you can't control it can consume you like devastating bushfire.", 
			"Bappy Golder"
		);
var q5 = new All_quotes(
			"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", 
			"Henry Ford"
		);

//add quotes to page
$("#qute_view").html(q1.quote);
$("#author_view").append(q1.author);

//show tooltip with help options
//hide and show the button on input focus