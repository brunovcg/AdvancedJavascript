function almostSorted(arr) {
  const sorted = JSON.stringify([...arr].sort());

  function isSorted(array) {
    return JSON.stringify(array) === sorted;
  }

  function swap(index1, index2) {
    let myArray = [...arr];
    let value1 = arr[index1];
    let value2 = arr[index2];
    myArray[index1] = value2;
    myArray[index2] = value1;
    return isSorted(myArray);
  }

  function reverse(index1, index2) {
    // console.log(index1, index2)
    let myArray = [...arr];
    let myArraySliced = myArray.slice(index1, index2 + 1).reverse();
    myArray.splice(index1, myArraySliced.length, ...myArraySliced);
    return isSorted(myArray);
  }

  if (isSorted(arr)) {
    console.log("yes");
    return;
  }

  let first;
  let last;
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    if (found) {
      break;
    }

    for (let y = i + 1; y < arr.length; y++) {
      if (arr[i] > arr[y]) {
        first = i;
        last = y;
        found = true;
        break;
      }
    }
  }

  if (swap(first, last)) {
    console.log("yes");
    console.log(`swap ${first + 1} ${last + 1}`);
    return;
  }

  let lastToRevert;
  let foundReverse = false;

  for (let i = first; i < arr.length; i++) {
    if (lastToRevert) {
      break;
    }
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[i] < arr[y]) {
        lastToRevert = y - 1;
        foundReverse = true;
        break;
      }
    }
  }

  if (reverse(first, lastToRevert)) {
    console.log("yes");
    console.log(`reverse ${arr[lastToRevert]} ${arr[first]}`);
    return;
  }

  console.log("no");
}

almostSorted([1, 5, 4, 3, 2, 6]);
