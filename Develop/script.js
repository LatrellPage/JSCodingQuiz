let Time = document.getElementById('time-left')
    
function startQuiz() {
    let timeLeft=75;
    let timeInterval= setInterval(function()  {
        if(timeLeft > 0) {
        Time.textContent= 'Time: ' + timeLeft;
        timeLeft--;
        //Call another function here//
        firstQuestion();
        }

        else if(timeLeft===0){
            Time.textContent=''
            clearInterval(timeInterval)
            //Call another function here//
            
        }

        


    },1000)

function firstQuestion() {
        let firstPage = document.querySelectorAll('#firstpageB, #firstpageH1, #firstpageP');
        firstPage.forEach(function(element) {
            element.style.display = 'none';
        });
          
        const questionContainer = document.getElementById('question-container');
        const Line = document.querySelector('hr');
        Line.style.display = 'block';
        questionContainer.style.display = 'block';

        const correctAnswer1 = document.getElementById('button-three');
        const wrongAnswers1 = document.querySelectorAll('#button-one, #button-two, #button-four');

        wrongAnswers1.forEach(function(element) {
         element.addEventListener('click', function() {
              let wrongAnswerText = document.getElementById('wrong-text')
              wrongAnswerText.style.display = 'block';
              setTimeout(function() {
                wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
              }, 1000)
              secondQuestion()
              return;

            });
            
         });
        

        correctAnswer1.addEventListener('click', function() {
            let correctAnswerText = document.getElementById('correct-text')
             correctAnswerText.style.display= 'block';
             setTimeout(function() {
                correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
            }, 1000)
             secondQuestion()
             return;

        });

        // SecondQuestion()
        // let secondQ = document.querySelector('h2')
        //    secondQ.textContent= 'The condition in an if / else statement is enclosed within _____.'
   
    }

function secondQuestion() {
    let Q = document.querySelector('h2');
           Q.textContent= 'The condition in an if / else statement is enclosed within _____.';
    
    let buttonOne = document.getElementById('button-one');
    let buttonTwo = document.getElementById('button-two');
    let buttonThree = document.getElementById('button-three');
    let buttonFour = document.getElementById('button-four');

    buttonOne.textContent='1. quotes';
    buttonTwo.textContent='2. curly brackets';
    buttonThree.textContent='3. parentheses';
    buttonFour.textContent='4. square brackets';

           
    buttonTwo.style.width='120px';
    buttonThree.style.width='110px';
    buttonFour.style.width='140px';

    // let correctAnswer2= document.getElementById('button-three')
    // let wrongAnswer1 = document.querySelector('button-one')
    // let wrongAnswer2 = document.querySelector('button-two')
    // let wrongAnswer3 = document.querySelector('button-four')
    // wrongAnswer1.addEventListener('click', function() {
    //     // thirdQuestion()
    //     let wrongAnswerText = document.getElementById('wrong-text')
    //             wrongAnswerText.style.display = 'block';
    //             setTimeout(function() {
    //                 wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
    //             }, 1000);
    // //  thirdQuestion()

    // });

    // wrongAnswer2.addEventListener('click', function() {
    //     // thirdQuestion()
    //     let wrongAnswerText = document.getElementById('wrong-text')
    //             wrongAnswerText.style.display = 'block';
    //             setTimeout(function() {
    //                 wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
    //             }, 1000);
    //     // thirdQuestion()

    // });

    // wrongAnswer3.addEventListener('click', function() {
    //     thirdQuestion()
    //     let wrongAnswerText = document.getElementById('wrong-text')
    //             wrongAnswerText.style.display = 'block';
    //             setTimeout(function() {
    //                 wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
    //             }, 1000);
    // //  thirdQuestion()

    // });
    // thirdQuestion()


    const correctAnswer2 = document.getElementById('button-three');
    const wrongAnswers2 = document.querySelectorAll('#button-one, #button-two, #button-four');

    wrongAnswers2.forEach(function(element) {
        element.addEventListener('click', function() {
            let wrongAnswerText = document.getElementById('wrong-text')
            wrongAnswerText.style.display = 'block';
            setTimeout(function() {
                wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
            }, 1000);
         thirdQuestion()
   
        });
         
    });
       
   
        correctAnswer2.addEventListener('click', function() {
            let correctAnswerText = document.getElementById('correct-text')
            correctAnswerText.style.display= 'block';
            setTimeout(function() {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
            }, 1000);
             thirdQuestion();
        });

        

       
           
    }

    
function thirdQuestion() {
     let Q = document.querySelector('h2');
     Q.textContent= 'Arrays in JavaScript can be used to store _____.';
 
     let buttonOne = document.getElementById('button-one');
     let buttonTwo = document.getElementById('button-two');
     let buttonThree = document.getElementById('button-three');
     let buttonFour = document.getElementById('button-four');

     buttonOne.textContent='1. numbers & strings';
     buttonTwo.textContent='2. other arrays';
     buttonThree.textContent='3. booleans';
     buttonFour.textContent='4. all of the above';

     buttonOne.style.width='100px';
     buttonTwo.style.width='120px';
     buttonThree.style.width='110px';
     buttonFour.style.width='140px';
    }

    const correctAnswer3 = document.getElementById('button-three');
    const wrongAnswers3 = document.querySelectorAll('#button-one, #button-two, #button-four');
    wrongAnswers3.forEach(function(element) {
        element.addEventListener('click', function() {
             let wrongAnswerText = document.getElementById('wrong-text')
             wrongAnswerText.style.display = 'block';
            setTimeout(function() {
               wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
            }, 1000);
         fourthQuestion()

        });
           
    });
       

        correctAnswer3.addEventListener('click', function() {
           let correctAnswerText = document.getElementById('correct-text')
           correctAnswerText.style.display= 'block';
           setTimeout(function() {
               correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
             }, 1000);
         fourthQuestion();
        });


}