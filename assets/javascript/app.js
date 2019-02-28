
$(document).ready(()=>{
    let firstArray= [{question: "Actor Adam West got the attention of producers of Batman by appearing in what product TV commercial?", responses: ["Colgate toothpase", "Jif Peanut Butter", "Nestle's Quik", "Arm & Hammer Baking Soda"], answerIndex: 2, imgUrl: './assets/images/batman1.jpg'},
                    {question: "Adam West and the DC Comics description of Batman share which of the following:", responses: ["They both are the same height.", "They both knew some amount of karate.", "They both were bit by bats.", "Both of their parents died tragically."], answerIndex: 0, imgUrl: './assets/images/batman2.jpg'},
                    {question: "Adam West was a frequent guest star on which animated TV series?", responses: ["The Magic School Bus", "The Simpsons", "Family Guy", "Southpark"], answerIndex: 2, imgUrl: './assets/images/batman3.png'},
                    {question: "Adam West turned down which iconic role?", responses: ["James Bond", "James T. Kirk", "Hannibal Lector", "The Maytag Repair Man"], answerIndex: 0, imgUrl: './assets/images/batman4.jpeg'},
                    {question: "What was one unintended side effect of Adam West becoming Batman?", responses: ["He never had to pay for a meal out ever again.", "He became much more withdrawn because of all the notoriety.", "All of his phones had to be red.", "He wore tights to stay warm while he slept."], answerIndex: 1, imgUrl: './assets/images/batman5.jpg'}];
    
        
    let startNumber;
    let transitionTimer;
    let cardQuestionIndex = 0;
    let wins = 0;
    let loss = 0;
    let correctAnswerCount = 0;
    let incorrectAnswerCount = 0;
    let gameplay = true;
    //let audioWin = new Audio('./assets/audio/correct.wav');
    //let audioLoss = new Audio('./assets/audio/incorrect.wav');
    let questionCount = 0;

    $("#result").text("Correct: " + correctAnswerCount + " | Incorrect: " + incorrectAnswerCount);
    

function initializeAdam(){
    $("#resultbox").text("");
    $("#result").text("Correct: " + correctAnswerCount + " | Incorrect: " + incorrectAnswerCount);
    
    //initialize photo display - changes with each round as cardQuestionIndex increases
    $("#photo").html("<img src='" + firstArray[cardQuestionIndex].imgUrl + "' height='200px'>");
    
    //initial timer to 11 seconds
    startNumber = 11;
    
    //display alert when game is over
    if(cardQuestionIndex===firstArray.length+1){
        alert("Game Over");
    }
    
    //this starts the timer of a 10 second count
    const timer1 = setInterval(function() {
         $('#seconds-left').text(startNumber-1);
        startNumber--;
  	    if(startNumber <= 0){
        clearInterval(timer1);
        gameplay = false;
        $('#seconds-left').text("Time's Up!");
        nextQuestion();
    };
    }, 1000);
    
    let specificQuestion = firstArray[cardQuestionIndex];
    $("#question").text(specificQuestion.question);
    $('#answer-0').text("");
    $('#answer-1').text("");
    $('#answer-2').text("");
    $('#answer-3').text("");
    for(let i = 0; i < specificQuestion.responses.length; i++){
        let answerButton = $("#answer-"+i);
        answerButton.append(specificQuestion.responses[i]);
    }
    gameplay=true;
 }
 initializeAdam();

$(".trivia").click(function(){
    let j = questionCount;  
 
    let ansIndex = firstArray[j].answerIndex;
    let correctResponse = firstArray[j].responses[ansIndex];
    var selectedResponse = $(this).text();
     
    if (gameplay){  
        
        if(selectedResponse === correctResponse){
           
            $("#resultbox").text("Correct!");
           
            gameplay = false;
            
            correctAnswerCount++;
            startNumber=0;

        }
       
        else{
            
            $("#resultbox").text("Sorry, wrong answer! The correct answer was " + correctResponse); 
            incorrectAnswerCount++;
            startNumber=0;
           
        }
    }
});

function nextQuestion(){
    cardQuestionIndex++;
    gameplay = false;
    
    let k = questionCount;  
    questionCount++;
    let ansIndex = firstArray[k].answerIndex;
    let correctResponse = firstArray[k].responses[ansIndex];
    
    var resultTxt = $("#resultbox").text();
   
    if(resultTxt === ""){
        $("#resultbox").text("The correct answer was " + correctResponse); 
        incorrectAnswerCount++;
    }
    
    transitionTimer = 4;
    const timer2 = setInterval(function() {
        
        transitionTimer--;
       
          if(transitionTimer === 0){
        clearInterval(timer2);
        gameplay = false;
        initializeAdam();
        };
    }, 1000);
    

}

$("#button-clear").on("click", function() {
        
    //if game is over, button is active
    if(gameplay === false){
        //reset all game variables to starting values and re-initialize the game
        cardQuestionIndex = 0;
        wins = 0;
        loss = 0;
        correctAnswerCount = 0;
        incorrectAnswerCount = 0;
        gameplay = true;
        questionCount = 0;
        $("#result").text("Correct: " + correctAnswerCount + " | Incorrect: " + incorrectAnswerCount);
        initializeAdam();
    }
   
});


   
});
