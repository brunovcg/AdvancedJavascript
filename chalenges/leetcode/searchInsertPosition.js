var searchInsert = function(nums, target) {
    
  let tempindex = 0
  
  for (let i = 0 ; i < nums.length ; i++){
      
      if (nums[i] > target) {return tempindex}
      
      if (nums[i] === target) {return i}
      
      if (nums[i] < target) {tempindex = i+1}
  }
  return tempindex
  
};



var searchInsert2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
          return i;
      }
  }
  return nums.length;
};