//Declare variables
var speed;
var overSpeedLimit;
var demeritPoint = Math.floor((speed-70)/5);

//Input speed of the car
speed=prompt(`Input your speed`);
//Check speed if less than or equal to 70
if (speed <=70){
    console.log(`Ok`);//Print Ok is speed is within the limit
}
else if (speed>=71){
    //Calculate the demerit points of above 70
   demeritPoint= Math.floor((speed-70)/5);
    //Check if demerit points are less than 12
    if(demeritPoint<12){
        console.log(demeritPoint + " demerit points");
    }
        else{
           console.log( "License suspended" );
        }//Print "License suspended" is demerit points reach or exceed 12 points
    }
