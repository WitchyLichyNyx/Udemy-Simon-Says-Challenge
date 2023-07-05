let buttonColours = ["green","red","yellow","blue"];
let userClickedPattern = [];
let randomChosenColour
let gamePattern = [];
let userChosenColour
let level = 0;



$(document).one("keypress", function(){
    $("h1").text("level " + level);
    randomChosenColour = buttonColours[nextSequence()];
    animatedPress(randomChosenColour);
    gamePattern = [];
    userClickedPattern = [];

    console.log(gamePattern);

    return (gamePattern);
});

gamePattern.push(randomChosenColour);

$(".btn").click(function (event){
    
    userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    presentation (userChosenColour);

    console.log(userClickedPattern);

    return (userClickedPattern);
});












function presentation(color){
    animatedPress(color);
    $("#" + color).fadeOut(100).fadeIn(100);
    
    console.log("clicked");
    let gameSound = new Audio('sounds/'+ color + '.mp3');
        gameSound.play();
}

function animatedPress(currentColour){
    $("." + currentColour).click(function(){
        console.log("anipress");
        $("." + currentColour).addClass("pressed");
    })
    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    level++;
    $("h1").text("level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    return randomNumber;
}






// console.log(randomChosenColour);
// console.log(gamePattern);