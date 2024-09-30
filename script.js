//QUestionNO: 1
//Reverse arrays using JS methods

let array = [1, 2, 3, 4, 5]; //mutates original array
array.reverse();
console.log(array);

let array1 = [1, 2, 3, 4, 5];
let reversedArray = [...array1].reverse(); // original array unchanged
console.log(reversedArray); // Outputs: [5, 4, 3, 2, 1]
console.log(array); // Outputs: [1, 2, 3, 4, 5]

//OR
let array2 = [1, 2, 3, 4, 5];
let reversedArray1 = array2.slice().reverse();
console.log(reversedArray1); // Outputs: [5, 4, 3, 2, 1]
console.log(array); // Outputs: [1, 2, 3, 4, 5]

//QUestionNO: 2
//Reverse array using for loop
let array11 = [1, 2, 3, 4, 5];
let reversedArray11 = [];

for (let i = array11.length - 1; i >= 0; i--) {
  reversedArray11.push(array[i]);
}

console.log(reversedArray11); // Outputs: [5, 4, 3, 2, 1]

//QUestionNO: 3
//find min and max using loop
let array13 = [3, 5, 1, 9, 2, 8];
let max = array13[0]; // Assume the first element is the max
let min = array13[0]; // Assume the first element is the min

for (let i = 1; i < array13.length; i++) {
  if (array13[i] > max) {
    max = array13[i]; // Update max if a larger value is found
  }
  if (array13[i] < min) {
    min = array13[i]; // Update min if a smaller value is found
  }
}

console.log("Max element:", max); // Outputs: Max element: 9
console.log("Min element:", min); // Outputs: Min element: 1

//QUestionNO: 4
//Find  min and max values of Kth value in array
function findKthMaxMin(arr, k) {
  // Sort the array in ascending order
  let sortedArray = arr.slice().sort((a, b) => a - b); // Using slice to avoid mutating original array

  // Find the k-th min and max elements
  let kthMin = sortedArray[k - 1];
  let kthMax = sortedArray[sortedArray.length - k];

  return {
    kthMin: kthMin,
    kthMax: kthMax,
  };
}

let array14 = [7, 10, 4, 3, 20, 15];
let k = 3;

let result = findKthMaxMin(array14, k);
console.log(`K-th Min element: ${result.kthMin}`); // Outputs: K-th Min element: 7
console.log(`K-th Max element: ${result.kthMax}`); // Outputs: K-th Max element: 10

//QUestionNO: 5
//array consist of 0s,1s,2s sort without using sorting algorithm
function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      // Move mid pointer
      mid++;
    } else if (arr[mid] === 2) {
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

let arrR = [0, 1, 2, 1, 0, 2, 1, 0, 2];
console.log(sort012(arrR)); // Outputs: [0, 0, 0, 1, 1, 1, 2, 2, 2]

//QUestionNO: 6
//Move all negative numbers to one side of array
function moveNegativesToFront(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // If the left pointer finds a positive number and the right pointer finds a negative number, swap
    if (arr[left] > 0 && arr[right] < 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    // If left pointer is at a negative number, move it forward
    else if (arr[left] < 0) {
      left++;
    }
    // If right pointer is at a positive number, move it backward
    else if (arr[right] > 0) {
      right--;
    }
  }

  return arr;
}

let arr = [1, -1, 3, 2, -7, -5, 11, 6];
console.log(moveNegativesToFront(arr));
// Outputs: [-5, -7, -1, 2, 3, 6, 11, 1] (the order of positives and negatives might vary)
