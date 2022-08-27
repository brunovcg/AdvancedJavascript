function almostSorted(arr) {

  const sorted = JSON.stringify([...arr].sort())

  function isSorted(array) {
    return JSON.stringify(array) === sorted;
  }

  if (isSorted(arr)) {
    console.log("yes");
    return;
  }

  function swapIt(index1, index2) {
    let myArray = [...arr];
    let value1 = arr[index1];
    let value2 = arr[index2];
    myArray[index1] = value2;
    myArray[index2] = value1;
    return isSorted(myArray);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let y = i + 1; y < arr.length; y++) {
      if (swapIt(i, y)) {
        console.log("yes");
        console.log(`swap ${i + 1} ${y + 1}`);
        return;
      }

      let myArray = [...arr];
      let myArraySliced = myArray.slice(i, y + 1).reverse();
      myArray.splice(i, myArraySliced.length, ...myArraySliced);

      if (isSorted(myArray)) {
        console.log("yes");
        console.log(
          `reverse ${myArraySliced[0]} ${
            myArraySliced[myArraySliced.length - 1]
          }`
        );
        return;
      }
    }
  }

  console.log("no");
}