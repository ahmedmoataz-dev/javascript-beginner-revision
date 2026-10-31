// بنحسب مجموع المصفوفة وتوسطها

let nums = [2, 4, 6];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log(sum);
console.log(sum / nums.length);
