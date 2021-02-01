
$(document).ready(function(){
	$('.flip').click(function(){
		$(this).parent().parent().toggleClass('is-flipped');		
	});
});

$(document).ready(function(){
	$('.flip-back').click(function(){
		$(this).parent().parent().removeClass('is-flipped');
	
	});
});