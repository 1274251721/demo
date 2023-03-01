function groupByAge(arr1, arr2) {
  const arr = Array.from(new Set([...arr1, ...arr2]));
  // 根据年龄进行分组
  const result = arr.reduce((acc, cur) => {
    const age = cur.age;
    if (acc[age]) {
      acc[age].push(cur);
    } else {
      acc[age] = [cur];
    }
    return acc;
  }, {});
  return result;
}
const arr1 = [
  { name: "Facebook", age: 24 },
  { name: "Github", age: 18 },
  { name: "OpenAI", age: 18 },
];
const arr2 = [
  { name: "Google", age: 24 },
  { name: "Copilot", age: 20 },
  { name: "John", age: 24 },
];

console.log(groupByAge(arr1, arr2));
