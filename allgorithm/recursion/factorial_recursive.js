function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// 종료 시점이 없어서 stackoverflow를 가져옴 return 함수를 통해서 종료 시점 설정 가능

function factorial(num) {
  if (num === 1) console.log(1);
  return num * factorial(num - 1);
}
