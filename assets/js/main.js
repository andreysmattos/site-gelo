$(function(){



	var $doc = $('html, body');
	$('.ancora').click(function() {
		$doc.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});


	$('#vai, #volta').click(function(){
		var temclass = $('.flip-container').hasClass('hover');
		if(temclass){
			$('.flip-container').removeClass('hover');
			
		} else {
			$('.flip-container').addClass('hover');
		}

		
	});

});