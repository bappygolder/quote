/*jshint esversion: 6 */

//<div id="footer"></div>
const body = document.querySelector('body');

//store all the JS File links
const jQueryFileLink = '<script src="js_and_plugins/jquery-3.1.1.min.js"></script>';
const animsitionFileLink = '<script src="js_and_plugins/animsition/animsition.min.js"></script>';
const stickyFileLink = '<script src="js_and_plugins/sticky/jquery.sticky.js"></script>';
const uiFileLink = '<script src="js_and_plugins/ui.js"></script>';
const mainJSfileLink = '<script src="js_and_plugins/main.js"></script>'; 	

//add all necessary JavaScript files at the footer of the body
body.insertAdjacentHTML('beforeend', jQueryFileLink);
body.insertAdjacentHTML('beforeend', animsitionFileLink);
body.insertAdjacentHTML('beforeend', stickyFileLink);
body.insertAdjacentHTML('beforeend', uiFileLink);
body.insertAdjacentHTML('beforeend', mainJSfileLink);

//slick slider functionality
$(".quotes_slider").slick({
	fade: true, 			//fade between slides instead of sliding
	dots: true,				//removes previous and next buttons and 
	arrows: false			//turning off left and right arrow
});
//footer.append(); //jQuery