function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function() {
    if ($("input:typing").val() === "g") {
      window.alert("g key submission")
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
