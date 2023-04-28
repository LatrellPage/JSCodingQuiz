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
        let question=document.querySelector('h1')
        question.textContent='Commonly used data types DO NOT include:'
    }
    // for (let i= 75; i = 0; i--){
    //     let time = document.getElementById('time-left')
    //     paragraph.textContent='i';

    // }
    
    // let time = document.getElementById('time-left')
    // paragraph.textContent=''


}