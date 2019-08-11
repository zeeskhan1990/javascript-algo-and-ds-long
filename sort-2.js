//O(n+m)
function merge(arr1, arr2) {
    let mergedArray = []
    let i = 0,j = 0
    while(true) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
        if(i === arr1.length) {
            mergedArray = [...mergedArray, ...arr2.slice(j)]
            break
        } else if(j === arr2.length) {
            mergedArray = [...mergedArray, ...arr1.slice(i)]
            break
        }
    }
    
    return mergedArray
}

//console.log(merge([1,4,5,6,7,19,32,35,87],[0,3,8,17,18,67,78,86]))

function mergeSort(arr) {
    if(arr.length <=1)
        return arr
    let mid = Math.floor(arr.length/2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    return merge(mergeSort(arr1), mergeSort(arr2))
}

//console.log(mergeSort([1,0,4,32,44,6,425,7,19,12,3,22,35,11,16,87]))

//The decomposition is O(log n) & for each phase there are 'n' comparisons being made in the merge phase in total 


function pivot(arr) {
    let pivot = 0
    for(let i=1; i<arr.length;i++) {
        //If the value of i is less than the current pivot value, then just bring it to the left of the current pivot
        if(arr[i]<arr[pivot]) {
            //Delete the greater value and store it in a variable
            const leftElement = arr.splice(i,1)[0]
            //Add it to the position where the pivot is currently
            arr.splice(pivot,0, leftElement)
            //Move ahead the pivot pointer
            pivot++
        }            
    }
    return pivot
}

console.log(pivot([13,15,8,20,2,28]))
console.log(pivot([1,2,3,4,5]))
console.log(pivot([5,4,3,2,1]))

/**
 * Better implementation with lesser space complexity because no new arrays are being created
 */

/* function quickSort(arr) {
    if(arr.length <=1)
        return arr
    let currentPivot = pivot(arr)
    let currentPivotValue = arr[currentPivot]
    //In traditional quicksort you pass the left & right index as arguments instead of new arrays thus reducing space complexity
    let left = arr.slice(0, currentPivot)
    let right = arr.slice(currentPivot+1)
    let sortedArray = [...quickSort(left), currentPivotValue, ...quickSort(right)]
    return sortedArray
}

console.log(quickSort([1,0,4,32,44,6,425,7,19,12,3,22,35,11,16,87,14,762,142]))

function pivot(arr, start=0, end=arr.length-1) {
    let pivot = start
    for(let i=pivot+1; i<=end;i++) {
        //If the value of i is less than the current pivot value, then just bring it to the left of the current pivot
        if(arr[i]<arr[pivot]) {
            //Delete the greater value and store it in a variable
            const leftElement = arr.splice(i,1)[0]
            //Add it to the position where the pivot is currently
            arr.splice(pivot,0, leftElement)
            //Move ahead the pivot pointer
            pivot++
        }            
    }
    return pivot
}

console.log(pivot([13,15,8,20,2,28]))
console.log(pivot([1,2,3,4,5]))
console.log(pivot([5,4,3,2,1]))

function quickSort(arr, left=0, right=arr.length-1) {
    if(left<right) {
        let currentPivot = pivot(arr, left, right)
        quickSort(arr, left, currentPivot-1)
        quickSort(arr, currentPivot+1, right)
    }
    return arr
}

console.log(quickSort([1,0,4,32,44,6,425,7,19,12,3,22,35,11,16,87,14,762,142])) */

function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10
}

function digitCount(num) {
    if(num===0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
    let maxDigits = 0
    for (let n of arr) {
        const noOfDigits = digitCount(n)
        if(noOfDigits>maxDigits) maxDigits=noOfDigits
    }
    return maxDigits
}
/**
 * Time complexity - O(nk), there are k number of passes, in each pass each element of array is pushed into bucket, so nk.
 * So for large numbers k can be significant, and hence may be slow
 * Also, considering how machines store all unique numbers in memory, k has to be at least logn for it to store those in the mem.
 */
function radixSort(arr) {
    const maxDigits = mostDigits(arr)
    for(let k=0; k < maxDigits; k++) {
        let buckets = Array.from({length:10}, () => [])
        for(let element of arr) {
            const currentDigit = getDigit(element,k)
            buckets[currentDigit].push(element)
        }
        /* tempArr = []
        for(let bucket of buckets) {
            tempArr = tempArr.concat(bucket)
        }
        arr = tempArr */
        arr = [].concat(...buckets)
        console.log(`Array in ${k} pass:`, arr)
    }
    return arr
}


/* console.log(getDigit(87326,4))
console.log(getDigit(8,2))
console.log(getDigit(222,1))

console.log(mostDigits([1,332,3434,2423424234,23,44])) */

console.log(radixSort([4,16,0,32,1,35,11,87,14,762,142]))