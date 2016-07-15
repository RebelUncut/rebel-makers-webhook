$("#clubs .match").matchHeight();

$("ul.nav .toggle-menu").click(function() {
	$("ul.nav li").slideToggle();
	$("ul.nav li").toggleClass("active");
});

$("#faq .item dd").hide();
$("#faq .item dt").click(function() {
	$(this).next().slideToggle();
	$(this).toggleClass("active");
});