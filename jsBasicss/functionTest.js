var arr1 = [7,2,8,14,1,6, "praveen", "vemula", "akash", true, false]
const arrSort = (arr) => {
    if(!Array.isArray(arr)){
        console.log("Not an Array");
        return null
    }
    for(let i = 0; i< arr.length; i++){
        for(let j = i + 1; j< arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]= temp;
            }
        }
    }
    return arr
}
console.log(arrSort(arr1));

const arrSortReverse = (arr) => {
    if(!Array.isArray(arr)){
        console.log("Not an Array");
        return null
    }
    return arr.sort((a,b) => {return b - a})
}
console.log(arrSortReverse(arr1));


function onlyNumbers(array) {
    return array.every(element => {
      return typeof element === 'number';
    });
}

// var sortFn = (arr) => {
//     if(onlyNumbers(arr))
//         key = 1
//     else 
//         key = 2
//     switch (key) {
//         case 1:
//             var sortedArray = arr.sort((a,b) => {return b - a})
//             break;
//         case 2:
//             var sortedArray = arr.sort()
//             break;
//         default:
//             break;
//     }
//     return sortedArray;
// }
// console.log(sortFn(arr1));

var arr2 = [7,2,8,14,1,6]
const arrSecondLargest = (arr) => {
    if(!Array.isArray(arr)){
        console.log("Not an Array");
        return null
    }
    if(onlyNumbers(arr)){
        var sortedArray = arr.sort((a,b) => {return b - a});
        return sortedArray[1]
    }
    else
        return "Invalid Array"
}
console.log(arrSecondLargest(arr2));


const fibonacciWithLoop = (num) => {
    if (!Number.isInteger(num)) {
        console.log("Invalid Input, Not an Integer");
        return null;
    }
    if (num <= 1) return num;
    if (num == 2) return 1;
    var n1 = 0, n2 = 1, nextNum
    for (let i = 1; i <= num; i++) {
        console.log(n1);
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
    return
}
var num = 8.5
console.log("Fibonacci: ");
fibonacciWithLoop(num)


const fibonacciRecurrsion = (num) => {
    if (!Number.isInteger(num)) {
        console.log("Invalid Input, Not an Integer");
        return null;
    }
    if (num <= 1) return num;
    if (num == 2) return 1;
    return fibonacciRecurrsion(num - 1) + fibonacciRecurrsion(num - 2)
}

var result = fibonacciRecurrsion(8)
console.log(result);