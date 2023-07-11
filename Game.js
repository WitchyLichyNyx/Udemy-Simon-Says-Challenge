
let buttonColours = ["green","red","yellow","blue"]; // The colours of the game
let randomChosenColour // selects a random color
let gamePattern = []; //creates a pattern from random colors
let userClickedPattern = []; // an array for the user's selected colors
let level = 0;


// This anonymous function detects a click and...
$(".btn").click(function (event){
    
    playSound(event.target.id); // calls the animation
    let userChosenColour = event.target.id; 
    userClickedPattern.push(userChosenColour); //pushes the play's chosen pattern into the array
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    // console.log(userClickedPattern);
    
});


// This anonymous function detects a keypress and...
$(document).one("keydown", function(){
    nextSequence();
    
    
});



// This function selects a random number and returns it so far;
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    level++;
    $('h1').text("level " + level);

    randomChosenColour = buttonColours[randomNumber]; // selects a random color
    gamePattern.push(randomChosenColour); //creates a pattern from random colors
    // console.log(gamePattern);
    playSound(randomChosenColour); // 

    return randomNumber;
}

//This function plays animation and sound in the next sequence and on click
function playSound(name){
    
    $("#" + name).fadeOut(100).fadeIn(100);    
    let gameSound = new Audio('sounds/'+ name + '.mp3');
        gameSound.play();
}

// Adds a class that gives the box a gray color and shadow

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// checks the answers of the player
function checkAnswer(currentLevel){

    
        if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
            if (gamePattern.length === userClickedPattern.length){
        
                setTimeout(function(){
                    nextSequence();
                    userClickedPattern=[];
                    console.log(userClickedPattern);
                }, 1000);
                
            }
        } else {    //If they get the answer wrong
            // WRONG answer audio
            let gameSound = new Audio('sounds/wrong.mp3');
            gameSound.play();
            // red flash!
            $(document.body).addClass("game-over");
                setTimeout(function() {
                    $(document.body).removeClass("game-over");
                }, 200);
            $('h1').text("You DIED, Press Any Key to Restart"); //Changes H1
            // function to restart!
            startOver();
        }
        console.log(gamePattern[currentLevel] + " vs " + userClickedPattern[currentLevel]);
        console.log(gamePattern.length + " vs " + userClickedPattern.length);
   
}

function startOver(){

    $(document).one("keydown", function(){
        level = 0;
        gamePattern=[];
        userClickedPattern=[];
        nextSequence();
        
        
    });
}