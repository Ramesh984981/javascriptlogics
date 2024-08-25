let n = [1,2,3,4]

function isEven(num){
    for(var i=0; i<= num.length; i++){
        if(num[i] % 2==0){
            console.log(num[i] + " is even");
        }else{
            console.log(num[i] + " is odd");
        }
    }

} 

const evenNumber = isEven(n)

console.log("evennumber", evenNumber);