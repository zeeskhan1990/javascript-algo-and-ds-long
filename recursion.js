function power(base, exponent){
    base = parseInt(base)
    exponent = parseInt(exponent)
    if(exponent === 0) {
        return 1
    }
    else {
        let newExponent = exponent-1
        return base*power(base,newExponent)
    }
}

function fib(number) {
    if(number===1 || number===2) {
        return 1
    } else {
        return fib(number-2) + fib(number-1)
    }
}

function reverse(str) {
    if(str.length < 1) {
        return str
    } else {
        return reverse(str.slice(1, str.length)) + str.charAt(0)
    }
}

function someRecursive(arr, callback) {
    if(arr.length > 1) {
        let [current, ...more] = arr
        return callback(current) || someRecursive(more, callback)
    } else {
        return arr.length === 0 ? false : callback(arr[0])
    }    
}

function flatten(arr) {
    let flatArray = []
    function flatArr(arr) {
        let [current, ...more] = arr
        if(Array.isArray(current)) {
            flatArr(current)
        } else {
            flatArray.push(current)
        }
        if(more.length > 0) {
            flatArr(more)
        }
    }
    flatArr(arr)
    return flatArray    
}

function nestedEvenSum(obj) {
    let totalSum = 0
    function findSummable(obj) {
        Object.keys(obj).forEach((currentPairKey) => {
            const currentPairVal = obj[currentPairKey]
            if(typeof currentPairVal === "object") {  
                findSummable(currentPairVal)
            } else if(Number.isInteger(currentPairVal) && currentPairVal%2 === 0)
                totalSum = totalSum + currentPairVal
        })
    }
    findSummable(obj)
    return totalSum
}


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

  console.log(nestedEvenSum(obj2))

/* console.log(flatten([1, [2, [3, 4], [[5]]]]))

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) */

/* console.log(someRecursive([1,2,3,4], val=> val>3))

console.log(reverse("Rupert Grint"))


console.log(fib(6))


console.log(power(2,2)) */