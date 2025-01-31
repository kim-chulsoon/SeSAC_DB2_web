// tuple : 배열의 개수와 데이터 타입 순서를 정하는 타입
let drink: [string, string];
drink = ["colr", "콜라"];

let drink2: [string, string, number] = ["cola", "콜라", 1];

console.log(drink2[0]);
drink2[0] = "사이다";
console.log(drink2);

// readonly 옵션 : 타입과 순서를 고정, 수정 불가
let drink3: readonly [string, string] = ["cola", "콜라"];
// let drink3[0]="cider" << err

// enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  strawberry,
  kiwi = "kiwi",
}

console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);

// 사용자 정의 타입

// 1. interfacce
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "kim",
  isPassed: true,
};

console.log(student1);

type Score = "A+" | "A" | "B" | "C" | "D" | "E" | "F";

interface 야구부 extends Student {
  // Student에서 상속받아온 정보
  // name: string;
  // isPassed: boolean;
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; //없어도 되는 값 ? 처리
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "otani",
  isPassed: true,
  weight: 95,
  height: 193,
  position: "pitcher",
  1: "A",
  2: "C",
};

console.log(otani);
console.log(otani["1"]);
otani["1"] = "A+";
console.log(otani["1"]);
otani.position = "투수";
console.log(otani);
// otani.backNumber = 11; // readonly 수정 불가

interface Clac {
  (a: number, b: number): number;
}

const sum: Clac = (num1: number, num2: number) => {
  return num1 + num2;
};

interface Toy {
  name: string;
  start(): void; // 리턴타입이 없는 함수
}

interface Car {
  name: string;
  color: string;
  price: number;
}
// 교차 타입 & > toy와 car의 정보를 모두 만족
let toyCar: Toy & Car = {
  name: "타요",
  color: "blue",
  price: 50000,
  start() {
    console.log(this.name, "의 가격은", this.price, "입니다");
  },
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "daniel",
  gender: "f",
  age: 21,
};

enum GenderEnum {
  FEMALE = "Female",
  MALE = "Male",
}
type Gender = GenderEnum.FEMALE | GenderEnum.MALE;
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let albert: Person2 = {
  name: "albrt",
  like: ["car"],
  gender: GenderEnum.MALE,
};

console.log(albert.gender);
console.log(daniel.age);
