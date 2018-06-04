$(function(){
	$.fatNav();
	AOS.init();

 $(document).on("scroll",function(){
	 if($(this).scrollTop() < 300){
		$("nav").removeClass("scrolls");
	 }else{
		$("nav").addClass("scrolls");
	 }
 });

});