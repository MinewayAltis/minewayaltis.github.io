//ADD JQUERY AND JQUERY UI BEFORE YOU WRITE YOUR JS CODE

$(document).ready(function() {
  var score = 0;
   var timeLeft = 90;
    
  $('.pokemon').removeClass('animation');

  $('.resetbutton').click(function() {
    score = 0;
    document.getElementById('points').innerHTML = score;
  });
  


function countDown() {
    var gameEnd = setInterval(function() {
    document.getElementById('time').innerHTML = timeLeft;

      if (timeLeft == 0) {
        clearInterval(gameEnd);
        alert("Time's up! You scored " + score + " points.");
        $('.pokemon').removeClass('animate');
        $('.playbutton').prop("disabled", false);
      }
      
      else {
        timeLeft = timeLeft - 1;
      }
    }, 1000);
  }

 
  $('.playbutton').click(function() {
    countDown();
    $(this).prop('disabled', true);
   $('.pokemon').addClass('animation');
  document.getElementById('points').innerHTML = score;
  });
  

  $('.diglett').click(function() {
    score = score + 1;
    document.getElementById('points').innerHTML = score;
  });

  $('.voltorb').click(function() {
    score = 0;
    document.getElementById('points').innerHTML = score;
  });

  $('.dugtrio').click(function() {
    score = score + 3;
    document.getElementById('points').innerHTML = score;
  });

  $('.eevee').click(function() {
    score = score - 2;
    document.getElementById('points').innerHTML = score;
  });

}); //closing bracket for document.ready