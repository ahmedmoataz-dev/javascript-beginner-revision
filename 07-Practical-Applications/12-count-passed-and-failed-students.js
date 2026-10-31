// نعدل ونحسب عدد الطلاب الناجحين والراسبين

let marks = [80, 45, 90, 30];

let passed = 0;
let failed = 0;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 50) {
    passed = passed + 1;
  } else {
    failed = failed + 1;
  }
}

console.log(passed);
console.log(failed);
