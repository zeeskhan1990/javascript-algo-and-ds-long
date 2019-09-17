function bubbleSort(arr) {
    /**
     * Check if any swap took place in the last pass, if it didn't then it means it's not gonna take in this one too, so exit.
     * Check for already sorted array
     */
    let noSwaps
    const len = arr.length
    for(let i=0; i<len; i++) {
        noSwaps = true
        //This comparison would cause checking against out of bound array index because of value of i being 0 in the first iteration
        for(let j=0; j<len-i;j++) {
            console.log(arr, arr[j], arr[j+1])
            noSwaps = false
            if(arr[j+1] < arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
        if(noSwaps)
            break;
    }
    return arr
}
/**
 * for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
 */

 function selectionSort(arr) {
     for(let i=0;i<arr.length;i++) {
         let min = i
         for(let j=i+1;j<arr.length;j++) {
             if(arr[j]<arr[min]) {
                 min = j
             }
         }
         [arr[i], arr[min]] = [arr[min], arr[i]]
     }
     return arr
 }

 /**
  * This implementation avoids multiple swaps on every comparison
  */
 /* function insertionSort(arr) {
    for(let i=1;i<arr.length;i++) {
        let tempMin = i
        for(j=i-1;j>=0;j--) {
            if(arr[i]<arr[j]) {
                tempMin = j
            } else
                break;
        }
        //Remove zero elements from tempMin position and insert the element retrieved from 'i'th position after deleting it from there
        arr.splice(tempMin, 0, arr.splice(i,1)[0])
    }
    return arr
 } */

 function insertionSort(arr) {
    console.log("Array is: ", arr)
    let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        console.log("i: ", i)
        console.log("currentVal: ", currentVal)
        let j
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log("j: ", j)
            console.log("arr[j] ", arr[j])
            console.log("arr[j+1] ", arr[j+1])
            arr[j+1] = arr[j]
        }
        console.log("Value of replaceIndex: ", j+1)
        console.log("Value in replaceIndex: ", arr[j+1])
        arr[j+1] = currentVal;
    }
    return arr;
 }

console.log(insertionSort([8,22,39,4,1,55,0,7]))

/* console.log("\n\n\n")
console.log(bubbleSort([8,22,39,4,1,55,0,7]));
console.log("\n\n\n")
console.log(selectionSort([8,1,22,39,4,55,0,7])); */