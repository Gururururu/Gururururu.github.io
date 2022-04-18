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

// var s = skrollr.init()

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
    daynightboxopen:false,
    monsterboxopen:false,
   
  }
  
})

var percent =0
function eatcount(){
  $(".monsterText").html("We are<br>SQUARE<br>MONSTER!")
}

var timer=setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if (percent>100){
    $(".pageloading").addClass("complete")
    clearInterval(timer)
    setTimeout(eatcount,3000)
  }
},30)