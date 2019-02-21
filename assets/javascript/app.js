$(document).ready(()=>{
    let wins = 0;
    let loss = 0;
    let openingNumber = Math.floor(Math.random()*100)+19;
    let gemOne = Math.floor(Math.random()*12)+1;
    let gemTwo = Math.floor(Math.random()*12)+1;
    let gemThree = Math.floor(Math.random()*12)+1;
    let gemFour = Math.floor(Math.random()*12)+1;
    let score = 0;
    let gameplay = true;
    let audioWin = new Audio('./assets/audio/win.wav');
    let audioLoss = new Audio('./assets/audio/loss.wav');
    $("#number-to-guess").text(openingNumber);
    $("#resultbox").text("Total Wins: "+wins+"  •  Total Losses: "+loss);

function initializeSeinfeld(){
    openingNumber = Math.floor(Math.random()*100)+19;
    gemOne = Math.floor(Math.random()*12)+1;
    gemTwo = Math.floor(Math.random()*12)+1;
    gemThree = Math.floor(Math.random()*12)+1;
    gemFour = Math.floor(Math.random()*12)+1;
    score = 0;
    $("#result").text(score+" points");
    $("#number-to-guess").text(openingNumber);
    gameplay=true;
 }

$("#gem-1").click(function(){
    if (gameplay){
    let jerry = gemOne;
    score += jerry;
    }
});

$("#gem-2").click(function(){
    if (gameplay){
    let elaine = gemTwo;
    score += elaine;
    }
});

$("#gem-3").click(function(){
    if (gameplay){
    let george = gemThree;
    score += george;
    }
});

$("#gem-4").click(function(){
    if (gameplay){
    let kramer = gemFour;
    score += kramer; 
    }
});

$("#button-clear").on("click", function() {
    if (!gameplay){
        initializeSeinfeld();
    }
});

$(".gem").on("click", function(){
$("#result").text(score+" points");

if(score === openingNumber){
    $("#result").text("You Won! You have "+score+" points.");
    if (gameplay) {
        wins++;
    }
    gameplay=false;
    audioWin.play();
    $("#resultbox").text("Total Wins: "+wins+"  •  Total Losses: "+loss);
  }
  else if(score > openingNumber){
    $("#result").text("You Lost! You have "+score+" points.");
    if (gameplay) {
        loss++;
    }
    gameplay=false;
    audioLoss.play();
    $("#resultbox").text("Total Wins: "+wins+"  •  Total Losses: "+loss);
  }
   
});

});