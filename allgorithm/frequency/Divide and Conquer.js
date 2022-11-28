/**
 *  serach([1,2,3,4,5,6], 4) //3
 *  serach([1,2,3,4,5,6], 6) //5
 *  serach([1,2,3,4,5,6], 11) //-1
 *
 **/

function serach(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return num;
    } else {
      return -1;
    }
  }
}

// 이진 탐색 (Binary serach)

function serach(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  //먼저 중간 지점을 찾는다.
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    // 찾는 값이 클 경우와 작은 경우
    if (array[middle] < num) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
