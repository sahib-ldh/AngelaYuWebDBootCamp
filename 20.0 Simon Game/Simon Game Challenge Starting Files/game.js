    var buttonColours = ["red", "blue", "green", "yellow"];

    var gamePattern = [];
    var userClickedPattern = [];
    var started = false;
    var level = 0;


 // keyboard keypressed
$(document).keypress(function() {
    if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});

    //clikced button
$('.btn').click(function() {
    var userChosenColour  = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
        
});

    // checking answers 
function checkAnswer(currentLevel) {
        console.log("userClickedPattern:", userClickedPattern);
        console.log("gamePattern:", gamePattern);
        console.log("Checking answer at level:", currentLevel);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

            // Check if user has finished the entire current sequence
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence();                    
                }, 1000);
            }

        } else {
            console.log("wrong");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");                    
            }, 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");     
            startOver();
        }
    }

    function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
    }

    // next sequence of game
    function nextSequence() {
        userClickedPattern = [];
        level++;
     $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();


    }

    //sound playing function
    function playSound(name){
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }
    //flash animation on pressing div
    function animatePress(currentColor) {
        $("#" + currentColor).addClass("pressed");
        setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
        }, 100); // 100 milliseconds  
    }






