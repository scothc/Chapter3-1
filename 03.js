// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.


$(document).on("click", ".author", function() {
	$(this).toggleClass("selected");

});


$(document).on("dblclick", ".chapter-title", function() {
	$(this).siblings("p").fadeToggle();

});

// study this code!
//var body_classes = ("default", "narrow", "large");
//var 

//$(document).on("keydown", function(event) {
//	if event.keyCode == '39') {

// study this code!

//also study style-switcher code

//		$("body").removeAttr("class")
//		$("body").addClass("default")
//}	else {
//		$("body").removeAttr("class");
//		$("body")addClass(body_classes[current_index];
//		}
//	}
//});


//
//$(document).on("keydown", function(event) {

	//if (event.keyCode == '39') {

		//then goto next body class and apply to body "p"
		 //for (  );

		// can use event.which also, right arrow key






