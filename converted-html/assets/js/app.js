(function($, window){

	$("#pais").ddslick({
		background: "#FFFFFF",
		width: 70,
		onSelected: function(selectedData){
			console.log(selectedData);
		}
	});

	$("tr.reveal-link").on("click", function(){
		$("#info-modal").foundation('reveal', 'open');
	});

	$("a.close-reveal-modal").on("click", function(){
		$("#info-modal").foundation('reveal', 'close');
	});

})(jQuery);