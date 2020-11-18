





$(document).ready(function(){
  var mediaquery = window.matchMedia("(max-width: 600px)");

  $("#btn_modal").click(function(){
    $("#modal").fadeIn("slow");

    if(mediaquery.matches){
      $(".modal-box").animate({left: '5%'});
    }else {
      $(".modal-box").animate({left: '25%'});
    }
  });

  $(".btn_close").click(function(){
    $("#modal").fadeOut(500);
    $(".modal-box").animate();
  });
});
