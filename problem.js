let marks;
//declare variable
//  A > 79, B - 60 to 79, C -  59 to 49,
// D - 40 to 49, E - less 40.
marks=prompt(`input your marks`);
 if(marks>0 && marks<100){
if(marks>79){
    `A`;
 }
 else if(marks>=60 && marks<=79){
    `B`
 }
else if(marks>=59 && marks<=49){
    `c`
}
else if(marks>=40 && marks<=49){
    `D`
}
else if(marks<40){
    `E`

    }
}
else {
   alert(`your results are invalid input between 0 and 100`); 
}
