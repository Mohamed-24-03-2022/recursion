// iterator solution
const iteratorFibs = (num) => {
  let result = 0;
  let arr = [0, 1];

  for (let i = 0; i < num; i++) {
    result += arr[arr.length - 2];
    arr.push(result);
  }

  return arr.slice(2);
};
console.log(iteratorFibs(8));


// recursive solution:
let result = 0;
const init = [0, 1];
const fibs = (num) => {
  if (init.length - 2 === num) return;
  result += init[init.length - 2];
  init.push(result);
  fibs(num);
  return init.slice(2);
};
console.log(fibs(8));

