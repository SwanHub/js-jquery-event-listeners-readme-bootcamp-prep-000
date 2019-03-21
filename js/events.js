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
  $('form input').on('keydown', function(key) {
    if (key === "G") {
      window.alert("You pressed the g key")
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();

});
