function goMart() {
  console.log("마트에 갑니다");
}

function pickDrink() {
  // 3초간 고민하는 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "coke";
    price = "2300";
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;

goMart();
pickDrink(); //맨 마지막에 실행(시간이 걸리는 작업)
pay();
