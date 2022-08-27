// var containsDuplicate = function (nums) {
//   let a = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in a) {
//       return true;
//     }
//     if (!a[nums[i]]) {
//       a[nums[i]] = nums[i];
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  let a = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!a.get(nums[i]) && a.get(nums[i]) !== 0) {
      a.set(nums[i], nums[i]);
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));
