// let array1 = [1, 2, 3, 4, 5, 10, 15];
// let array2 = [4, 5, 10, 20, 21, 22, 23];

// const funcao = (arr1, arr2) => {
//   let result = [];

//   let posicaoArr2 = 0;

//   for (let x = 0; x < arr1.length; x++) {
//     for (let y = posicaoArr2; y < arr2.length; y++) {
//       if (arr1[x] <= arr2[y]) {
//         result.push(arr1[x]);
//         break;
//       } else {
//         result.push(arr2[y]);
//         posicaoArr2++;
//       }
//     }
//   }
//   for (let number of arr2) {
//     if (!result.includes(number)) {
//       result.push(number);
//     }
//   }

//   return result;
// };

// console.log(funcao(array1, array2));

const tree = {
  value: 10,
  right: {
    value: 5,
    right: {
      value: 4,
      right: {
        value: 1,
        right: undefined,
        left: undefined,
      },
      left: undefined,
    },
    left: undefined,
  },
  left: {
    value: 8,
    right: {
      value: 3,
      right: {
        value: 7,
        right: undefined,
        left: undefined,
      },
      left: {
        value: 2,
        right: undefined,
        left: undefined,
      },
    },
    left: {
      value: 11,
      right: undefined,
      left: undefined,
    },
  },
};

const findInTree = (tree, searchedNum) => {
  let index = [];
  let current = [];

  function findNumber(branch) {


    if (branch.right) {
      if (branch.right.value === searchedNum) {
        current.push("right");
        return (index = current);
      }

      current.push("right");
      findNumber(branch.right, searchedNum);
    } else {
     return current = [];
    }


    if (branch.left) {
      if (branch.left.value === searchedNum) {
        current.push("left");
        return (index = current);
      }

      current.push("left");

      findNumber(branch.left, searchedNum);
    } else {
      return current = [];
    }
  }

  findNumber(tree, searchedNum);

  return index;
};

let search1 = findInTree(tree, 11);

console.log(search1);
