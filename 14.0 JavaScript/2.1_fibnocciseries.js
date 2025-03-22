function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var a,b,c;
     var fibonacci = [];
    for(var i=0;i<n;i++){
        if(i==0){
            fibonacci.push(0);
        }else if(i ==1){
            fibonacci.push(1);
        }else{
            a = fibonacci[i-2];
            b = fibonacci[i-1];
            c = a +b;
            fibonacci.push(c);
        }
    }
    
   return fibonacci;
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(10);