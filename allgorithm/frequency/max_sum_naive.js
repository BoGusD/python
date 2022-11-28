function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // 양수로만 작업을 하지 않는 한 0에서 시작하는 것은 전혀 도움이 되지 않기 때문에 -infinity로 설정
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    //기존 합 수보다 새로운 시도 합 수가 더 큰 경우
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
