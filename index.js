let buttonColours = ["green","red","yellow","blue"];
let randomChosenColour = buttonColours[nextSequence()];
let gamePattern = [randomChosenColour];

$(".btn").click(function(event){
    console.log(event.target.id);
    $("#" + event.target.id).fadeOut(100).fadeIn(100);
    switch (event.target.id){
        case "green":
            let greenSound = new Audio('sounds/green.mp3');
                greenSound.play();
        break;
        
        case "red":
            let redSound = new Audio('sounds/red.mp3');
                redSound.play();
        break;

        case "yellow":
            let yellowSound = new Audio('sounds/yellow.mp3');
                yellowSound.play();
        break;

        case "blue":
            let blueSound = new Audio('sounds/blue.mp3');
                blueSound.play();
        break;
    }


});




$("#"+randomChosenColour);

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    return randomNumber;
}

console.log(randomChosenColour);
console.log(gamePattern);