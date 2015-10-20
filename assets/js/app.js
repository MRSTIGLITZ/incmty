(function($, window){
	$("#pais").ddslick({
		background: "#FFFFFF",
		width: 70,
		onSelected: function(selectedData){
			console.log(selectedData);
		}
	});
})(jQuery);