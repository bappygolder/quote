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

var q1 = new All_quotes("Your past doesn't equal your future.", "Tony Robbins");
var q1 = new All_quotes("Your past doesn't equal your future.", "Tony Robbins");
var q1 = new All_quotes("Your past doesn't equal your future.", "Tony Robbins");
var q1 = new All_quotes("Your past doesn't equal your future.", "Tony Robbins");

//add quotes to page
$("#qute_view").html(q1.quote);
$("#author_view").append(q1.author);

//show tooltip with help options
//hide and show the button on input focus