const prompt = require("prompt-sync")();

T =  parseInt(prompt("enter the no. of inputs = "),10)
var arry = [];

for(i =0; i< T; i++){
L  = parseInt(prompt("enter the first value = "),10)
R  = parseInt(prompt("enter the second value = "),10)
arry.push([L, R]);
}




function evenodd(L, R)
{
    let Totalodd = Math.abs((R - L));
     Totalodd = Math.floor((Totalodd) / 2);
    if (R % 2 == 1 || L % 2 == 1)
        Totalodd++;

 
    if (Totalodd % 2 == 0)
    return (console.log("Even"));
    else
    return (console.log("Odd"));;
}

for(i=0; i<T; i++)
{
    L = arry[i][0]
    R = arry[i][1]
    evenodd(L, R)
}
// evenodd(L, R)