$(document).ready(function(){
  $("#maincontainer").show();
  $("#questions").hide();
  $('#correct').hide();
  $('#incorrect').hide();
  $('#unanswered').hide();
  $('#submit').hide();


  //Timer
  var time=60;

  //landing screen


  //when you click start the timer begins
  $("#start").click(function(){
    start();
    $("#start").hide();
    $("#questions").show();
    $('#maincontainer').hide();
    $('#submit').show();




    function start(){
      counter = setInterval(timer, 1000);
      $("#timer").show();
    };

    function timer(){
      time--;
      $("#timer").html(time);

      if (time===0){
      stop();
      answers();
      $('#questions').hide();
      $('#correct').show();
      $('#incorrect').show();
      $('#unanswered').show();
      };

    };

    //stoping timer
    function stop(){
      clearInterval(counter);
    };


    function answers(){
      var q1 =document.trivia.q1.value;
      var q2 =document.trivia.q2.value;
      var q3 =document.trivia.q3.value;
      var q4 =document.trivia.q4.value;
      var q5 =document.trivia.q5.value;
      var q6 =document.trivia.q6.value;
      var q7 =document.trivia.q7.value;
      var q8 =document.trivia.q8.value;

      var correct=0;
      var incorrect=0;
      var unanswered=0;

      //question 1
      if (q1==""){
      unanswered++;}

      else if(q1=="d"){
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
      else{
       incorrect++
      };

      document.getElementById("correct").innerHTML = ("Correct: " + correct);
      document.getElementById("incorrect").innerHTML = ("Incorrect: " + incorrect);
      document.getElementById("unanswered").innerHTML = ("Unanswered: " + unanswered);
    };

    $("#submit").click(function(){
      answers();
      console.log(answers());
      $('#correct').show();
      $('#incorrect').show();
      $('#unanswered').show();
      $('#questions').hide();
      stop();
    });

  });
 

});

