// $(window).scroll(function(e){
//   if($(window).scrollTop()<=0)
//     $(".explore,.navbar").addClass("at_top");
//   else
//   $(".explore,.navbar").removeClass("at_top");
// })
$(document).on('click','a',function(event){
  event.preventDefault();
  var target= $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
  
})

var s = skrollr.init()

$(function(){
    var $li = $('ul.tab-title li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });
var vm = new Vue({
  el:"#app",
  data:{
    namecardopen:false,
    dayboxopen:false,
   
  }
  
})