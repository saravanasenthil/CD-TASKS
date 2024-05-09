
function findElement(arr, element) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the element we're searching for
        if (arr[i] === element) {
            // If found, return its index
            return i;
        }
    }
    
    return -1;
}


const myArray = [1, 2, 3, 4, 5];
const elementToFind = 5;
const index = findElement(myArray, elementToFind);
if (index !== -1) {
    console.log(`Element ${elementToFind} found at index ${index}`);
} else {
    console.log(`Element ${elementToFind} not found in the array`);
}
