// بنحسب مجموع الأرقام في المصفوفة وتوسطها

let nums = [2, 4, 6, 8];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log(sum);

let average = sum / nums.length;
console.log(average);
