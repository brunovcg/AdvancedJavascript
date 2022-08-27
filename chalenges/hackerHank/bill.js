function bonAppetit(bill, k, b) {
  let result =  b - bill.filter((item, index)=> index !== k).reduce((a,c)=> a+ c,0)/2
  console.log(result > 0 ? result : "Bon Appetit")}