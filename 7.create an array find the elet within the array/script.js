
function findElement(arr, element) {
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === element) {
           
            return i;
        }
    }
    
    return -1;
}


const myArray = [1, 2, 3, 4, 55];
const elementToFind = 55;
const index = findElement(myArray, elementToFind);
if (index !== -1) {
    console.log(`Element ${elementToFind} found in index ${index}`);
} else {
    console.log(`Element ${elementToFind} not found in array`);
}
