
const prompt = require("prompt-sync")();

var T = parseInt(prompt("enter the no. of strings = "),10)
var arr = new Array(T);

for (var i = 0; i < T; i++) {
    arr[i] = (prompt("enter the string = ")).toString();
}

for( i =0; i < T; i++){
    for (j =0; j<T-1-i; j++)
    {
       
        a = arr[j+1].localeCompare(arr[j]);
        
        if(a == -1){
            swap(arr,j+1,j);

        }
    }

    
}

function swap(arr, x, y)
{
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
for(i =0; i< T; i++){
    console.log(arr[i])
}
// console.log(arr)