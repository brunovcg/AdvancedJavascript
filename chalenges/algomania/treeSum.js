function solution1(numbers, target_sum) {
  let result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    let um = numbers[i];
    for (let y = i + 1; y < numbers.length - 1; y++) {
      let dois = numbers[y];
      for (let j = y + 1; j < numbers.length; y++) {
        let tres = numbers[j];

        if (um + dois + tres === target_sum) {
          result.push([um, dois, tres].sort());
        }
      }
    }
  }

  return result;
}

function solution(numbers, target_sum) {
  let result = [];
  let sorted = numbers.sort();

  for (let current in sorted) {
    let two = current + 1;
    let three = sorted.length - 1;

    while (two < three) {
      let sum = sorted[current];
      sum += sorted[two] + sorted[three];

      if (sum < target_sum) {
        two++;
      } else if (sum > target_sum) {
        three--;
      } else {
        result.push([sorted[current], sorted[two], sorted[three]]);
    
      }
    }
  }

  return result;
}
