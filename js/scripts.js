console.log("Could this be an easter egg?");
var maxImgs = 2;
var landingbg = 1 + Math.floor(Math.random() * maxImgs);
  
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

function selectBG(){
	var tempbg = 1 + Math.floor(Math.random() * maxImgs);
	while(tempbg == landingbg){
		tempbg = 1 + Math.floor(Math.random() * maxImgs);
	}
	landingbg = tempbg;
	$('#landing').css("background-image", "url(images/landingbg/"+landingbg+".gif)");
}
$("landingclick").click(function(){selectBG()});
