var guestList = ["Rahul", "Sahib", "Pawan","Suraj","Pankaj","Sukhi"];  
var guestName = prompt("What is your Name ???");

if(guestList.includes(guestName))
{
    alert("YAY ! you are invited!");
}
else{
    alert("Hurrr!! you not allowed");    
}
