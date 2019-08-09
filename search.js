function binarySearch(arr, val) {

    function bSearch(arr, start, end, val) {
        if(start === end && arr[end]!== val) {
            return -1
        } 
        const mid = Math.floor((start+end)/2)
        if(arr[mid] === val) {
            return mid
        }
        else if(arr[mid] > val) {
            end = mid - 1
        } else {
            start = mid + 1
        }
        return bSearch(arr, start, end, val)
    }
    return bSearch(arr,0, arr.length - 1, val)
}

function bSearch(arr, val) {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start+end)/2)

    while(arr[mid] !== val && start <= end) {
        if(arr[mid] < val)
            start = mid + 1
        else
            end = mid - 1
    }
    if(arr[mid] === val)
        return mid
    else 
        return -1
}

console.log(binarySearch([1,4,6,7,8,11,13,14,18,20,21], 21))