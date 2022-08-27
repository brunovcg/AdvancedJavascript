// Deep search

function solution(tree1, tree2) {

  console.log(tree2)

  if (tree1 === null || tree2 ===null) {
    if (tree1 != tree2) {
      return false;
    }
    return true;
  }


  if (tree1?.value === tree2?.value) {
    return (
      solution(tree1?.left, tree2?.left) && solution(tree1?.right, tree2?.right)
    );
  }

  return false;
}


// Breath search