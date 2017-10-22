$("#filter-slider").slider({tooltip:'hide'});
$("#filter-slider").on("slide", function(slideEvt) {
	$("#sliderVal").text(slideEvt.value + " ");
});
