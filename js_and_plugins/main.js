//add all necessary JavaScript files
$("div.footer").append('<script src="js_and_plugins/footer.js"></script>');


//animate page when loading
$(".animsition").animsition();

//quotes oject stored using object literal
/*let all_quotes = {
	q1 : {
		"quote" : "Your past doesn't equal your future.",
		"author" : "Tony Robbins"
	}
};*/

//crate quote object using constructor function
function quoteListObj(){
	"use strict";
	this.quoteList = [];
}

//method to add quotes to quoteListObj
quoteListObj.prototype.add = function(quote, author){
	"use strict";
	var new_quote = [];
	
	//add quote to the new quote array
	new_quote.push(quote);
	new_quote.push(author);
	
	//add the new quote array to the quote list
	this.quoteList.push(new_quote);
	
};

//instantiate new quote list
var the_quote_list = new quoteListObj();

the_quote_list.add("Your past doesn't equal your future.", "Tony Robbins");
the_quote_list.add("Keep calm and carry on.", "Winston Churchill");

//add quotes to page
$("#qute_view").html(the_quote_list.quoteList[0][0]);
$("#author_view").append(the_quote_list.quoteList[0][1]);

//show tooltip with help options
//hide and show the button on input focus