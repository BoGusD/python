function solution(x) {
  let sum = 0;
  let str = String(x);
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  console.log(sum);
  return x % sum == 0 ? true : false;
}

console.log(solution(10)); //true
console.log(solution(13)); //false
