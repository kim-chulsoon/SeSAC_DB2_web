let olimpicNewGame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성계주" },
  true,
];

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

function sum1(a: number, b: number) {
  return console.log(a + b);
}
sum1(5, 11);

function sum2(...nums: number[]): number {
  let sum = 0;
  for (let nums of nums) {
    sum += nums;
  }
  return sum;
}

console.log(sum2(1, 2, 3));
