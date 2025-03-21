var fname = prompt("what is your name??");
var pname = prompt("what is your crush name??");

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n === 100)
{
alert("OMG!!!, " + fname + " and " + pname + " love match is : " + n + "% and you are made for each other..... perfect soulmate");    
}else if (n > 80){
    alert("Hello, " + fname + " and " + pname + " love match is : " + n + "%, You guys love each other.");
}else if (n > 50 && n <= 80 )
{
    alert("Hello, " + fname + " and " + pname + " love match is : " + n + "%, Its ok ok match.");
}
else if (n > 25 && n<= 50 )
{
    alert("Hello, " + fname + " and " + pname + " love match is : " + n + "%, BREAKKK UP IS COMINGGG.");
}
else {
     alert(n + "% match You are are like oil and water");

}


