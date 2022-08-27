var sortedSquares2 = function (nums) {
  return nums.map((item) => item ** 2).sort((a, b) => a - b);
};





var sortedSquares = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {

     let index = result.findIndex(item=> item > nums[i]**2)

     if (index === -1){
       result.push(nums[i]**2)
     }
     else {
       result.splice(index,0, nums[i]**2)
     }
  }


  return result
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
