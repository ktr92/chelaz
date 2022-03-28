$(document).ready(function() {
	if (screen && screen.width > 992) {

$('#fullpage').fullpage({
    sectionsColor: ['#fff', '#fff', '#fff'],
	onLeave: function(origin, destination, direction){
		$('.menublock').removeClass('visible');
		if(direction =='down'){
			activateNavItem($('#my-nav').find('li').eq(origin.index+1));
			if (origin.index==0) {
				/*$('.fullpage-nav').addClass('fullpage-nav_dark');*/
				$('.fullpage-up').css('display','block');
			}
			else {
				/*$('.fullpage-nav').removeClass('fullpage-nav_dark');*/
			}
			if (origin.index==1) {$('.fullpage-down').css('display','none');}
		}
		else if(direction == 'up'){
			activateNavItem($('#my-nav').find('li').eq(origin.index-1));
			if (origin.index==1) {$('.fullpage-up').css('display','none');}
			
			if (origin.index==2) {
			/*	$('.fullpage-nav').addClass('fullpage-nav_dark');*/
				$('.fullpage-down').css('display','block');
			}
			else {
			/*	$('.fullpage-nav').removeClass('fullpage-nav_dark');*/
			}
		}
		
		
		
	},
    afterRender: function(){
        activateNavItem($('#my-nav').find('li').eq($('.section.active').index()));
		if (origin.index==1) {$('.fullpage-nav').addClass('fullpage-nav_dark');}
    }
});

}
});
$('.fullpage-nav li').click(function(){
    var destination = $(this).closest('li');
    $.fn.fullpage.moveTo(destination.index() + 1 );
	$('li').removeClass('active');
	$(this).addClass('active');
});
function activateNavItem(item){
    item.addClass('active').siblings().removeClass('active');
}
$(document).on('click', '.fullpage-down', function(){
  fullpage_api.moveSectionDown();
});
$(document).on('click', '.fullpage-up', function(){
  fullpage_api.moveSectionUp();
});
