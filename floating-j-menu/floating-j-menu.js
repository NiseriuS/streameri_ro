// Begin Script - jQuery Floating Menu V 2.0 2016
var FMpath = "white"	// MENU IMAGE PATH | black | white |
document.write('<div id="menuJF" class="printhide"><div id="menu-HT">');

// START ICON LINKS
document.write('<a target="_blank" href="orgcorp/home/index_h.html"><img src="floating-j-menu/icons-NS/home.png" title="Home" border="0" class="menu-floating-tab"></a>');
document.write('<a target="_blank" href=".orgcorp/downloads/index_d.html"><img src="floating-j-menu/icons-NS/download.png" title="Downloads" border="0" class="menu-floating-tab"></a>');
document.write('<a target="_blank" href="//orgcorp/changes/index_c.html"><img src="floating-j-menu/icons-NS/changes.png" title="Changes" border="0" class="menu-floating-tab"></a>');
document.write('<a href="#"><img src="floating-j-menu/icons-'+FMpath+'/floatm-top.png" border="0" class="menu-floating-tab"></a>');

// COPY AND PASTE ABOVE LINE TO ADD A NEW BUTTON
// END ICON LINKS

document.write('</div></div>');

// START FLOATING SCRIPT
// 2016 © Allwebco Design Corporation
// YOU DO NOT NEED TO EDIT BELOW THIS LINE

var menuPosition = $('#menuJF').css;

// START SCRIPT - ANIMATION SPEED IS MICROSECONDS

function FloatMenu(){
	var animationSpeed=1500;
	var animationEasing='easeOutQuint';
	var scrollAmount=$(document).scrollTop();
	var newPosition=menuPosition+scrollAmount;
	if($(window).height()<$('#menuJF').height()+$('#menuJF .menu-HT').height()){
		$('#menuJF').css('top',menuPosition);
	} else {
		$('#menuJF').stop().animate({top: newPosition}, animationSpeed, animationEasing);
	}
}
$(window).load(function() {
	menuPosition=$('#menuJF').position().top;
	FloatMenu();
});
$(window).scroll(function () { 
	FloatMenu();
});

