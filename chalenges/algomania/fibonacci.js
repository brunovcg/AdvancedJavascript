const Fibo = (n) => {
  let array = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array[n - 1];
};



const Fibo2=(n)=>{

  if(n<3){
    return 1
  }

  return Fibo2(n-1) + Fibo2(n-2)

}

console.log(Fibo2(35));
console.log(Fibo(35));
