$(function(){
	var $nav = $('#gNav');

	$('#spNavBtn').click(function(){
		$(this).toggleClass('is-active');
		$nav.fadeToggle();
		$('body').toggleClass('menu-opend');
	});
});
