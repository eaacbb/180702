$(function() {

	setInterval(function() {
		$("#cube_1 div").css("opacity", range_1);
		$("#cube_2 div").css("opacity", range_2);
		$("#cube_3 div").css("opacity", range_3);
		$("#cube_4 div").css("opacity", range_4);
		$("#cylindre_1 div").css("opacity", range_3);
		$("#cylindre_2 div").css("opacity", range_4);
		$("#rectangle div").css("opacity", range_3);
		$("#rectangle2 div").css("opacity", range_1);
		$("#triangle div").css("opacity", range_2);
		$("#arche div").css("opacity", range_3);
		$("#arche2 div").css("opacity", range_4);
	}, 10);


	$(".forme").draggable({
		stack: ".forme"
	});

	// $(".forme").draggable({
	// 	grid: [100, 45.25],
	// 	stack: ".forme"
	// });
});
