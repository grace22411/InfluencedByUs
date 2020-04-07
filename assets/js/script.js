$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".modal-content").show();
  })

  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
  });

  $('.code-text').click(function () {
    $('.referral').fadeIn(1000);
    $('.code').fadeOut(200);
  })

  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  

  var selectedPreference = [];
  //const category = element.data("name")

  $(".eventBtn").click(function(){
    let category = $(this).data("name");
    //$(this).getAttribute('date-name').selectedPreference.push();

    if (selectedPreference.includes(category)) {
      const index = selectedPreference.indexOf(category);
      if (index > -1) {
        selectedPreference.splice(index, 1);
      }
    } else {
      selectedPreference.push(category);
    }

    $('#rightDiv').empty()
    $.each(selectedPreference, function (i, l) {
      let tweet = $("<div class='tweet'>" + l + '<i class="fas fa-times"></i>' + "</div>");
      $('#rightDiv').append(tweet);
    });

    $('.later').hide();
    $('.done').show();
    console.log(selectedPreference);

    $('.fa-times').click(function(){
      $('.tweet').fadeOut();
  });
  });

  



});


