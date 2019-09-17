function countUniqueValues(arr) {
    const len = arr.length
    let i = 0
    let j = 1
    while(j < len) {
        if(arr[j] !== arr[i]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }
    return i + 1
}

function isSubsequence(str1, str2) {
    let i = 0
    for (let j = 0; j < str2.length; j++) {
        if(str2.charAt(j) === str1.charAt(i)) {
            if(i == str1.length - 1)
                return true
            i++
        } else {
            //no-op
        }
        
      }
  }

  function maxSubarraySum(arr, windowSize) {
      
  }

console.log(countUniqueValues([5,8,8,10,11,11,11]))