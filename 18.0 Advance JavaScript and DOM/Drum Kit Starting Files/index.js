var numOfDrumButtom = document.querySelectorAll(".drum").length;
for(var i =0; i<numOfDrumButtom;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
       
        var buttonhtml = this.innerHTML;
        makeSound(buttonhtml);
        buttonAnimation(buttonhtml);
       
    });

    
}



document.addEventListener("keypress",function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w": 
        var audio = new Audio ("sounds/crash.mp3");
        audio.play();
        break;
        case "a": 
        var audio = new Audio ("sounds/kick-bass.mp3");
        audio.play();
        break;
        case "s": 
        var audio = new Audio ("sounds/snare.mp3");
        audio.play();
        break;
        case "d": 
        var audio = new Audio ("sounds/tom-1.mp3");
        audio.play();
        break;
        case "j": 
        var audio = new Audio ("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k": 
        var audio = new Audio ("sounds/tom-3.mp3");
        audio.play();
        break;
        case "l": 
        var audio = new Audio ("sounds/tom-4.mp3");
        audio.play();
        break;
        
        


        default:console.log("Invalid key: " + key); 
    }


}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}


// Array.from(document.querySelectorAll(".drum")).forEach(button => {
//     button.addEventListener("click", () => alert("Clicked!"));

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();