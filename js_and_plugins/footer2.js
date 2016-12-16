/*jshint esversion: 6 */

//<div id="footer"></div>
const body = document.querySelector('body');

//store all the JS File links
const jQueryFileLink = '<script src="js_and_plugins/jquery-3.1.1.min.js"></script>';

//add all necessary JavaScript files at the footer of the body
body.insertAdjacentHTML('beforeend', jQueryFileLink);