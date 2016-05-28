$("#clubs .match").matchHeight();

var eventbriteToken = "JVAOXWZE4KHOZP24TO2J";

$("#clubs > ul > li").each(function() {
	var element = $(this);
	var organiserId = $(this).find(".id").html();
	var apiCall = "https://www.eventbriteapi.com/v3/events/search/?token=" + eventbriteToken + "&organizer.id=" + organiserId + "&expand=venue";
	$.getJSON(apiCall, function(data) {
		var eventsUpcoming = data.events.length;
		if(eventsUpcoming < 1) {
			element.find(".date").html("not planned yet.");
		} else {
			var dateOfNextEvent = data.events[0].start.local;
			var friendlyDate = new Date(dateOfNextEvent).toString("MMMM d yyyy");
			element.find(".date").html(friendlyDate);
		}
	});
});

$("ul.nav .toggle-menu").click(function() {
	$("ul.nav li").slideToggle();
	$("ul.nav li").toggleClass("active");
});

$("#faq li").click(function() {
	var sectionClass = $(this).attr("class");
	var matchingSection = $("#faq").find(".faq-section." + sectionClass);
	matchingSection.slideToggle();
});