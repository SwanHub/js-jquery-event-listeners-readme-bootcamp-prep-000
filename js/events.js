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
  $('input#typing').on('keydown', function(key) {
    if (key === "g") {
      alert("g key submission")
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
