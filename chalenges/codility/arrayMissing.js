function solution(A) {
  const len = A.length;
  const hash = new Map();
  for (let i = 0; i < len; i++) {
      hash.set(A[i], A[i])
  }
  for (let i = 1; i < 1000002; i++) {
      if(!hash.get(i)) return i;
  }
  return 1;
}