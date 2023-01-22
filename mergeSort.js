const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEle = leftArr[leftIndex];
    const rightEle = rightArr[rightIndex];

    if (leftEle < rightEle) {
      output.push(leftEle);
      leftIndex++;
    } else {
      output.push(rightEle);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

console.log(mergeSort([2, 0, 1, 4, 2, 5, 5, 8, 234, 123, 7, 8, 44, 22]));
