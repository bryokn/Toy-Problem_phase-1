var speed;
var overSpeedLimit;
var demeritPoint = Math.floor((speed-70)/5);
// Write a program that takes the speed of a 
// car as input e.g 80. If the speed is less than 
// 70, it should print “Ok”. Otherwise, for every 
// 5 km/s above the speed limit (70), it should
//  give the driver one demerit point and print 
//  the total number of demerit points.
speed=prompt(`Input your speed`);
if (speed <=70){
    console.log(`Ok`);
}
else if (speed>=71){
   demeritPoint= Math.floor((speed-70)/5);
    if(demeritPoint<12){
        demeritPoint;
    }
        else{
            "License suspended"
        };
    }


    
