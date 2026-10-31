// بنحسب مجموع الأرقام الفرعية من 2 لـ n

let n = 10;
let sum = 0;

for (let i = 2; i <= n; i += 2) {
  sum = sum + i;
}

console.log(sum);
