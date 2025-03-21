//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

 // If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
function bmiCalculator(weight,height)
{
       var bmi = weight/Math.pow(height,2);
       return Math.round(bmi);
}

bmiCalculator(76,1.737)




// bmi should equal 20 when it's rounded to the nearest whole number.


