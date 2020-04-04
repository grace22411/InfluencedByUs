$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".modal-content").show();
    })

    $(".fa-times").click(function(){
        $(".modal-content").fadeOut();
    });

    $('.code-text').click(function(){
        $('.referral').fadeIn(1000);
        $('.code').fadeOut(200);
    })
    
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

     
});