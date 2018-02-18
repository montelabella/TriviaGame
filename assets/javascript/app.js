
window.onload = (function() {
    //  Global Variables
    var time = 20;
    var questions;
    var answers;
    var setIntervalID;
    var place = 0
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    
    
    
    
    
    var questions = [
    {
        question: "What actor played the character Indiana Jones?", 
        answer: ["Brad Pitt", "Harrison Ford","Obi Wan Kenobi","Sean Connery"],
        correct: "Harrison Ford"
    
    },
    {
        question: "What is Indiana Jones afraid of?", 
        answer: ["Scorpians", "Mice", "Snakes", "Nothing"],
        correct: "Snakes"
    },
    {
        question: "What is Indiana's real name?", 
        answer: ["Henry Jones, Jr.", "Robert Jones","John Jones, Jr.","Indiana Jones"],
        correct: "Henry Jones Jr."
    
    },
    {
        question: "Indy's father is played by which famous actor?", 
        answer: ["Christopher Lloyd", "Michael Caine","James Bond","Sean Connery"],
        correct: "Sean Connery"
    
    },
    {
        question: "Which Indiana Jones movie had a mine-cart chase?", 
        answer: ["Temple of Doom", "The Crystal Skull","Raiders of The Lost Ark","The Last Crusade"],
        correct: "Temple of Doom"
    
    },
    {
        question: "Which film is this quote from? 'Throw me the idol, I throw you the whip.'", 
        answer: ["Temple of Doom", "The Crystal Skull","Raiders of The Lost Ark","The Last Crusade"],
        correct: "Raiders of The Lost Ark"
    
    }
    ]; 
    console.log(questions[place].question);
    console.log(questions[0].answer[1])
    
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
        function showQuestions(questions, quizContainer){
            var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                //radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
        } //adds questions/answers to output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }//outputs to html
            quizContainer.innerHTML = output.join('');
    }
    
    
        function showResults(questions, quizContainer, resultsContainer){
            //get answers from quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
            //users answers
            var userAnswer = '';
            var numCorrect = 0;
            for(var i=0; i<questions.length; i++){
                //i did not create this code, i borrowed it after trying to find out how to show results/ i am not
                //i understand this piece much.
                
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            //if correct
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                    answerContainers[i].style.color = 'green';
            }
            else{
                answerContainers[i].stylecolor = 'red';
            }
        }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
        // show the questions
        showQuestions(questions, quizContainer);
    
        // when user clicks submit, show results
        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    }
    
    
    //array square brackets
    //object .
    
    //functions
    function timeCount() {
        time--
        place++
    
        //console.log(time);
        
    
    
    
    
    
    
    
    //submitButton.addEventListener('click', showResults);
    //questions//
    //function question1() {
        setintervalId = setInterval(timeCount,1000);)}
        //console.log(time);
       // console.log(setintervalId)
    
    
    
    
    
    
       // $("#start").on('click',function () {
         //   $("#start").remove();
           // question1();
    
            /// what did i break here?  button no longer disappears//
           //console.log('working');
        