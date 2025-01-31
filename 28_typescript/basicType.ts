let num: number = 1;
num = 2;
// num = "ss"; //  number형 변수에 string 타입을 할당하려 하면 err
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array
let numArr: number[] = [1, 2, 3, 4, 5];
let strARr: Array<string> = ["a", "b", "C"];

let arr1: (number | string)[] = [1, 2, "a", "b", "c", 345];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3, 4]];
let arr3: any[] = [1, 2, null, undefined, str1, "A", [], {}, true];

// object
let obj1: object = {
  name: "kim",
};

// 알아서 타입추론을 한다
let aa = 5;
let bb = "hello";
// aa = "ddd" << err
