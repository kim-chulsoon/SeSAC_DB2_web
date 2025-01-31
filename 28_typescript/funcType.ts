function tsPrint(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint(1, 2, 3);
tsPrint(1, 2);
// tsPrint(1, 2, 3, 4);

function tsPrint2(a: number, b: number, c = 5) {
  console.log("print2");
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2);

function concatStr(a: string, b: number): string {
  return a + b;
}

function circleArea(r: number): number {
  return r * r * Math.PI;
}

const squareArea = (a: number, b: number): number => {
  return a * b;
};

const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

console.log("원", circleArea(5));
console.log("사각형", squareArea(3, 4));
console.log(`삼각형 ${triangleArea("5", "6")}`);

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

function add(x: string, y: string): string;
function add(x: number, y: number): number;

function add(x: any, y: any) {
  return x + y;
}

console.log("add", add(1, 2));
console.log("add", add("1", "2"));
