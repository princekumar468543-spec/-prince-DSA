let arr1 = [1,4,2,5,2];
let arr2 = [2,7,3,5,6];

let result = [];

let i = 0;
let j = 0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        result.push(arr1[i]);
        i++
    } else{
        result.push(arr2[j]);
        j++
    }
}

    while(i<arr1.length){
         result.push(arr1[i]);
         i++;
    }

    while(j<arr2.length){
         result.push(arr2[j]);
         j++;
    }
     
result.sort((a,b) => a-b);


console.log(result)


let arr3 = [1,2,4,5];
let arr4 = [2,3,6,7];

let result2 = [];

let i1 = 0;
let j1 = 0;

while(i1 < arr3.length && j1 < arr4.length){

    if(arr3[i1] < arr4[j1]){
        result2.push(arr3[i1]);
        i1++;
    }
    else{
        result2.push(arr4[j1]);
        j1++;
    }
}

while(i1 < arr3.length){
    result2.push(arr3[i1]);
    i1++;
}

while(j1 < arr4.length){
    result2.push(arr4[j1]);
    j1++;
}

console.log(result2);