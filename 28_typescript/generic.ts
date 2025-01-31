function printSome<T>(x: T, y: T): T {
  console.log(x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>("1", "2");

function printSome2<T, K>(x: T, y: K): T {
  console.log(x, y);
  return x;
}

printSome2(1, "hello");

function arrLength(arr: any[]): number {
  return arr.length;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
function getValue(val: any) {
  return val;
}

function getValue2<t>(val: t): t {
  return val;
}

console.log(arrLength2<string>(["a", "b"]));

interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-12"),
  option: "black",
};

console.log(iphone15);

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "Apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};
