/**
 * The prime number in the hash is helpful in spreading out the keys more uniformly.
 * It's also helpful if the array that you're putting values into has a prime length.
 */
function hash(key, arrayLen) {
    let total = 0
    let myPrime = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let charCodeValue = char.charAtCode(i) - 96
        total = (total * myPrime + charCodeValue) % arrayLen
    }
}