var output = [];
var count = 1;
function  fizzbuzz() {
for(count = 1; count <= 100; count++)
{
if(count % 3 === 0 && count % 5 ===0){
        output.push("FIZZBUZZ");
}
else if(count % 3 === 0 ){
        output.push("FIZZ");
}
else if(count % 5 === 0 ){
        output.push("BUZZ");
}
else{
        output.push(count);
}
        
        
}
        console.log(output);       
}
 