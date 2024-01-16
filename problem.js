let marks;
//declare variable
//  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
//User to input their marks
marks=prompt(`input your marks`);
//Check if input is between 0-100 
if(marks>0 && marks<100){
 //Check grade based on ranges below
if(marks>79){
    console.log(`A`);
 }
 else if(marks>=60 && marks<=79){
    console.log(`B`);
 }
else if(marks>=50 && marks<=59){
    console.log(`C`);
}
else if(marks>=40 && marks<=49){
    console.log(`D`);
}
else if(marks<40){
    console.log(`E`);

    }
}
else {
   alert(`Your results are invalid. Input between 0 and 100`); //Display alert if input is not within range
}
