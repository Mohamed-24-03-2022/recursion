// iterator solution
const iteratorFibs = (num) => {
  let arr = [0, 1];
  for (let i = 0; i < num - 2; i++) {
    arr[i + 2] = arr[arr.length - 2] + arr[arr.length - 1];
  }
  return arr;
};
console.log(iteratorFibs(8));


// recursive solution:;
const init = [0, 1];
const fibs = (num) => {
  if (init.length === num) return;
  init[init.length] = init[init.length - 1] + init[init.length - 2];
  fibs(num);
  return init;
};
console.log(fibs(8));