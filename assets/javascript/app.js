$(document).ready(function(){

//Timer
var time=60;
  //when you click start the timer begins
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
//stoping timer
  function stop(){
  clearInterval(counter);
};

function answers(){
var q1=document.trivia.q1.value;
var q2=document.trivia.q1.value;
var q3=document.trivia.q1.value;
var q4=document.trivia.q1.value;
var q5=document.trivia.q1.value;
var q6=document.trivia.q1.value;
var q7=document.trivia.q1.value;
var q8=document.trivia.q1.value;

var correct=0;
var incorrect=0;
var unanswered=0;

//question 1
if (q1===""){
unanswered++;}

else if(q1==="d"){
  correct++;
}
else{
  incorrect++;
};

//question2
if (q2===""){
  unanswered++;}
  else if(q2==="a"){
    correct++;
  }
  else{
    incorrect++;
  };
//question 3
  if (q3===""){
    unanswered++;}
    else if(q3==="a"){
      correct++;
    }
    else{
      incorrect++
    }

//question 4
if (q4===""){
  unanswered++;}
  else if(q4==="b"){
    correct++;
  }
  else{
    incorrect++
  }

  //question 5
  if (q5===""){
    unanswered++;}
    else if(q5==="a"){
      correct++;
    }
    else{
      incorrect++
    }

    //question 6
    if (q6===""){
      unanswered++;}
      else if(q6==="b"){
        correct++;
      }
      else{
        incorrect++
      }

      //question 7
      if (q7===""){
        unanswered++;}
        else if(q7==="c"){
          correct++;
        }
        else{
          incorrect++
        }

        //question 8
        if (q8===""){
          unanswered++;}
          else if(q8==="b"){
            correct++;
          }
          else(){
            incorrect++
          }
}
});




