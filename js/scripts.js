console.log("Could this be an easter egg?");
var landingbg = 1 + Math.floor(Math.random() * 2);
  
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
$('#landing').css("background-image", "url(images/landingbg/"+landingbg+".gif)");