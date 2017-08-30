$(document).ready(function(){
  $(window).scroll(function(event) {
    var animate= $(window).scrollTop();
    console.log(animate);
    if (animate>220) {
      $(".navbar").css({
        background:'black',
        transition:'all .5s ease',
      });
    };
    if (animate==0) {
			$(".navbar").css({
				background:'transparent',
        transition:'all .5s ease',
			});
		}
  });
});
