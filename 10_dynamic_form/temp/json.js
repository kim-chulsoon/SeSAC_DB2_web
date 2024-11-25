// json
// javascript object notation
/*
{
    "name" : "kim",
    "married" : "false",
    "family" : {"father" : "ddd", "mother" : "mmm"},
} 
*/

const car = `{
    "model":"아이오닉6",
    "company":"현대",
    "price":50000000,
    "year":2023,
    "isElectric":true,
    "option":["side mirror", "smart sensor"]
}`;
console.log(typeof car);
// JSON.parse() > JSOM -> object
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obh);
console.log(obj.model);
console.log(obj.option);

// JSON.stringify() -> object ->JSON

const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model);
