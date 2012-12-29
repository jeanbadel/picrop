$(function(){
	$(".picrop").Picrop({
		"fx": true,
		onCrop : function(pic, ppic){
			console.log("current pic" + pic);
			console.log("current parent pic" + ppic);
		}
	});
});