// نعدل ونحسب عدد عنصر حسب شرط

let nums = [1, 2, 3, 4, 5, 6];

let evenCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenCount = evenCount + 1;
  }
}

console.log(evenCount);
