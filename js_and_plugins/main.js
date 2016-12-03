//add all necessary JavaScript files
$("div.footer").append('<script src="js_and_plugins/footer.js"></script>');


//animate page when loading
$(".animsition").animsition();

//quotes oject
var all_quotes = {
	q1 : {
		"quote" : "Your past doesn't equal your future.",
		"author" : "Tony Robbins"
	}
};

//add quotes to page
$("#qute_view").html(all_quotes.q1.quote);
$("#author_view").append(all_quotes.q1.author);

//show tooltip with help options
//hide and show the button on input focus