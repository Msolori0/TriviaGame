$(document).ready(function(){

//Timer
var time=60;

$("#start").click(function(){
  start();
  $("#start").hide();
});

function start(){
  counter = setInterval(timer, 1000);
};

function timer(){
  time--;
  $("#timer").html(time);

  if (time===0){
    stop();
    alert('times up')
  };
}

  function stop(){
  clearInterval(counter);
};


});




