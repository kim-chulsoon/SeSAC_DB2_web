console.log(document)
console.log(document.URL)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
console.log(document.title)

// 1. getElemnetById
console.log(document.getElementById('green'))
console.log(document.getElementById('red'))

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])
console.log(document.getElementsByClassName('others'))
console.log(document.getElementsByClassName('others')[0])

// 3. getElementsByTegName
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

// 4. getElementByName
console.dir(document.getElementsByName('id'))
console.dir(document.getElementsByName('id')[0])

// 5. querySelector('선택자') -> 자주쓰임
console.log('-----------')
console.log(document.querySelector(".pink"))
console.log(document.querySelector(".others"))
console.log(document.querySelector("#green"))
console.log(document.querySelector("#red"))
console.log(document.querySelector("input"))
console.log(document.querySelector("div"))
console.log(document.querySelector("[name='id']"))

// 6. quertSelectorAll
console.log(document.querySelectorAll('.pink'))
console.log(document.querySelectorAll('#red'))


// for of 문으로 pink 클래스 모두 출력해보기
let pinks = document.querySelectorAll('.pink')
console.log(pinks)

for(let tag of pinks){
    console.log(tag)
}

