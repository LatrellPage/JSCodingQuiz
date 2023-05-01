const answerButtonOne = document.querySelector('#button-one');
const answerButtonTwo = document.querySelector('#button-two');
const answerButtonThree = document.querySelector('#button-three');
const answerButtonFour = document.querySelector('#button-four');
const correctAnswerText = document.getElementById('correct-text');
const wrongAnswerText = document.getElementById('wrong-text')

let Time = document.getElementById('time-left')

function startQuiz() {
    let timeLeft = 75;
    let timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            Time.textContent = 'Time: ' + timeLeft;
            timeLeft--;
            //Call another function here//
            //firstQuestion();
        }

        else if (timeLeft === 0) {
            Time.textContent = ''
            clearInterval(timeInterval)
            highscore()


        }

    }, 1000)

    firstQuestion()

}


function firstQuestion() {


    let firstPage = document.querySelectorAll('#firstpageB, #firstpageH1, #firstpageP');
    firstPage.forEach(function (element) {
        element.style.display = 'none';
    });

    const questionContainer = document.getElementById('question-container');
    const Line = document.querySelector('hr');
    Line.style.display = 'block';
    questionContainer.style.display = 'block';




    answerButtonOne.addEventListener('click', function () {

        let answer = answerButtonOne.textContent
        checkAnswerOne(answer);
    })

    answerButtonTwo.addEventListener('click', function () {

        let answer = answerButtonTwo.textContent
        checkAnswerOne(answer);
    })

    answerButtonThree.addEventListener('click', function () {

        let answer = answerButtonThree.textContent
        checkAnswerOne(answer);
    })

    answerButtonFour.addEventListener('click', function () {

        let answer = answerButtonFour.textContent
        checkAnswerOne(answer);
    })


}



function checkAnswerOne(answer) {
    console.log('answer inside checkAnswer', answer)

    if (answer === 'alerts') {
        correctAnswerText.style.display = 'block';
        setTimeout(function () {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        secondQuestion()

    } else {
        wrongAnswerText.style.display = 'block';
        setTimeout(function () {
            wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        secondQuestion()
    }
}

function secondQuestion() {

    let Q = document.querySelector('h2');
    Q.textContent = 'The condition in an if / else statement is enclosed within _____.';

    answerButtonOne.textContent = 'quotes';
    answerButtonTwo.textContent = 'curly brackets';
    answerButtonThree.textContent = 'parentheses';
    answerButtonFour.textContent = 'square brackets';

    answerButtonFour.style.width = '115px';


    answerButtonOne.addEventListener('click', function () {

        let answerTwo = answerButtonOne.textContent
        checkAnswerTwo(answerTwo);
    })

    answerButtonTwo.addEventListener('click', function () {

        let answerTwo = answerButtonTwo.textContent
        checkAnswerTwo(answerTwo);
    })

    answerButtonThree.addEventListener('click', function () {

        let answerTwo = answerButtonThree.textContent
        checkAnswerTwo(answerTwo);
    })

    answerButtonFour.addEventListener('click', function () {

        let answerTwo = answerButtonFour.textContent
        checkAnswerTwo(answerTwo);
    })





}

function checkAnswerTwo(answerTwo) {

    if (answerTwo === 'parentheses') {
        correctAnswerText.style.display = 'block';
        setTimeout(function () {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        thirdQuestion()
        return;
    }


    else {
        wrongAnswerText.style.display = 'block';
        setTimeout(function () {
            wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        thirdQuestion()
    }
}


function thirdQuestion() {
    console.log('calling third function')
    let Q = document.querySelector('h2');
    Q.textContent = 'Arrays in JavaScript can be used to store _____.';




    answerButtonOne.textContent = 'numbers & strings';
    answerButtonTwo.textContent = 'other arrays';
    answerButtonThree.textContent = 'booleans';
    answerButtonFour.textContent = 'all of the above';



    answerButtonOne.style.width = '130px';
    answerButtonTwo.style.width = '90px';
    answerButtonThree.style.width = '70px';
    answerButtonFour.style.width = '120px';



    answerButtonOne.addEventListener('click', function () {

        let answerThree = answerButtonOne.textContent
        checkAnswerThree(answerThree);
    })

    answerButtonTwo.addEventListener('click', function () {

        let answerThree = answerButtonTwo.textContent
        checkAnswerThree(answerThree);
    })

    answerButtonThree.addEventListener('click', function () {

        let answerThree = answerButtonThree.textContent
        checkAnswerThree(answerThree);
    })

    answerButtonFour.addEventListener('click', function () {

        let answerThree = answerButtonFour.textContent
        checkAnswerThree(answerThree);
    })
}


function checkAnswerThree(answerThree) {

    if (answerThree === 'all of the above') {
        correctAnswerText.style.display = 'block';
        setTimeout(function () {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        fourthQuestion()
        return;
    }
    else {
        wrongAnswerText.style.display = 'block';
        setTimeout(function () {
            wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        fourthQuestion()
    }
}

function fourthQuestion() {
    console.log('calling fourth function')
    let Q = document.querySelector('h2');
    Q.textContent = 'String values must be enclosed within _______ when being assigned to variables.';




    answerButtonOne.textContent = 'commas';
    answerButtonTwo.textContent = 'curly brackets';
    answerButtonThree.textContent = 'quotes';
    answerButtonFour.textContent = 'parentheses';



    answerButtonOne.style.width = '60px';
    answerButtonTwo.style.width = '100px';
    answerButtonThree.style.width = '50px';
    answerButtonFour.style.width = '90px';



    answerButtonOne.addEventListener('click', function () {

        let answerFour = answerButtonOne.textContent
        checkAnswerFour(answerFour);
    })

    answerButtonTwo.addEventListener('click', function () {

        let answerFour = answerButtonTwo.textContent
        checkAnswerFour(answerFour);
    })

    answerButtonThree.addEventListener('click', function () {

        let answerFour = answerButtonThree.textContent
        checkAnswerFour(answerFour);
    })

    answerButtonFour.addEventListener('click', function () {

        let answerFour = answerButtonFour.textContent
        checkAnswerFour(answerFour);
    })
}

function checkAnswerFour(answerFour) {

    if (answerFour === 'quotes') {
        correctAnswerText.style.display = 'block';
        setTimeout(function () {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        fifthQuestion()
        return;
    }
    else {
        wrongAnswerText.style.display = 'block';
        setTimeout(function () {
            wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        fifthQuestion()
    }
}

function fifthQuestion() {
    console.log('calling fourth function')
    let Q = document.querySelector('h2');
    Q.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';




    answerButtonOne.textContent = 'JavaScript';
    answerButtonTwo.textContent = 'terminal/bash';
    answerButtonThree.textContent = 'for loops';
    answerButtonFour.textContent = 'console.log';



    answerButtonOne.style.width = '80px';
    answerButtonTwo.style.width = '90px';
    answerButtonThree.style.width = '70px';
    answerButtonFour.style.width = '80px';



    answerButtonOne.addEventListener('click', function () {

        let answerFive = answerButtonOne.textContent
        checkAnswerFive(answerFive);
    })

    answerButtonTwo.addEventListener('click', function () {

        let answerFive = answerButtonTwo.textContent
        checkAnswerFive(answerFive);
    })

    answerButtonThree.addEventListener('click', function () {

        let answerFive = answerButtonThree.textContent
        checkAnswerFive(answerFive);
    })

    answerButtonFour.addEventListener('click', function () {

        let answerFive = answerButtonFour.textContent
        checkAnswerFive(answerFive);
    })
}

function checkAnswerFive(answerFive) {

    if (answerFive === 'console.log') {
        correctAnswerText.style.display = 'block';
        setTimeout(function () {
            correctAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        highscore()

    }
    else {
        wrongAnswerText.style.display = 'block';
        setTimeout(function () {
            wrongAnswerText.style.display = "none"; // Hide the text after 3 seconds
        }, 500)
        highscore()
    }
}

function highscore() {

    let Q = document.querySelector('h2');
    Q.textContent = 'All done!';

    answerButtonOne.style.display = 'none';
    answerButtonTwo.style.display = 'none';
    answerButtonThree.style.display = 'none';
    answerButtonFour.style.display = 'none';



    // Create a new paragraph element
    let newParagraph = document.getElementById('highscore-p');

    // Add text content to the paragraph element
    newParagraph.style.display = 'block'
    newParagraph.textContent = 'Your final score is' + timeLeft;
    newParagraph.style.fontWeight = 'bold'


    // // Add the paragraph element to the HTML document
    // const container = document.querySelector('answer-container');
    // container.appendChild(newParagraph);


}