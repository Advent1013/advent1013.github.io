console.log("Could this be an easter egg?");
$(window).resize(function() {
	var dev = "images/devblg.png";
	var adv = "images/advblg.png";
	var lan = "images/lanblg.png";
    if($(this).width() < 450){
	    dev = "images/devblgtiny.png";
		adv = "images/advblgtiny.png";
		lan = "images/lanblgtiny.png";
	}
	$("#devimg").attr('src',dev);
	$("#advimg").attr('src',adv);
	$("#lanimg").attr('src',lan);
});
