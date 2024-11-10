// 1. 태그 내부 내용 변경
/*
 - innerText
 - textContent
 - innerHTML
*/ 

let div1 = document.getElementById('div1')
div1.innerText = '     여기는 <b>첫번째</b> 태그입니다.&hearts;    /'
console.log(div1.innerText)
// 2칸 이상의 공백문자 제거, 앞뒤로 공백문자 제거

div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent = '     여기는 <b>첫번째</b> 태그입니다.&hearts;      /'
console.log(div1.textContent)

/* 2. 속성에 접근 */
/*  
- 요소.속성명
- getAttribute() : 속성값 가져오기
- setAttribute() : 속성값 설정하기
*/

// pooh, naver 아이디
let naver = document.getElementById('naver')
console.log(naver)

// 네이버를 구글로 바꾸기
// naver.setAttribute("속성이름", '바꿔줄 속성값')
naver.setAttribute("href", "https://www.google.com")
console.log(naver.href)

document.querySelector('#pooh')
console.log(document.querySelector('#pooh'))
// setAttribute대신 사용하는 방법
document.querySelector('#pooh').alt = "푸사진"

/* CSS 변경 */
let h1 = document.querySelector("h1")
let list = document.querySelectorAll('li')

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){
    // el.style.color = '#fff'
    // el.style.backgroundColor = 'pink'
    // el.style.fontSize = '1.3rem'
    el.classList.add('friends')
}

h1.classList.add('add-h1') // 클래스 추가
h1.classList.remove('add-h1') // 클래스 제거
h1.classList.toggle('add-h1') // 클래스가 없으면 추가, 있으면 제거

// 클래스가 있는지 없는지 확인 >> true, false "반환"
console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList) // 선택된요소의 클래스 목록 확인

/* 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.getElementById('friends')
let tigger = document.querySelector('#tigger')

console.log('--자식 노드 접근--')
console.log(friends.children)
console.log(friends.children[0])

console.log('--부모 노드 접근--')
console.log(tigger.parentNode)

console.log('--형제 노드 접근--')
console.log('이전 형제', tigger.previousElementSibling) // 이전 형제
console.log('다음 형제', tigger.nextElementSibling) // 다음 형제

let container = document.querySelector('.container')

// 요소 생성
let p = document.createElement('p')
p.innerText = "새로 추가된 p"
p.style.fontWeight = '700'
p.style.background = 'red'

// 요소 추가

// append : 선택된 요소의 맨 뒤 자식 요소로 추가됨
container.append(p)

let p2 = document.createElement('p')
p2.innerText = 'p2'
p2.classList.add('p-2')

let p3 = document.createElement('p')
p3.innerText = 'p3'
p3.classList.add('p-3')

// container.append(p2)
// container.append(p3)
// container.appendChild(p3)

container.append(p2, p3, "안녕하세요") // append는 여러 개 넣을 수 있고, 문자열도 넣을 수 있음

// prepend : 선택된 요소의 맨 앞 자식요소로 추가됨
// li태그를 만들고, '캉가', friends 클래스 추가
let li1 = document.createElement('li')
li1.innerText = '캉가'
li1.classList.add('friends')

friends.prepend(li1)

// before : 요소의 앞에 추가
let h3 = document.createElement('h3')
h3.innerText = 'h3 tag'
h1.before(h3)

// after : 요소의 뒤에 추가
let h2 = document.createElement('h2')
h2.innerText = 'h2 tag'
h1.after(h2)

// 요소 삭제 : remove(), removechild()
let firstli = document.querySelector('li')
let ul = firstli.parentElement

// firstli.remove() -> 선택된 요소가 삭제
// 삭제할 요소.remove

ul.removeChild(firstli)
// 부모요소.remobeChild(삭제할 자식 요소)


let div = document.createElement('div')

let img = document.createElement('img')
img.setAttribute('src','./img/lion.png')
img.alt = '라이언'

let span = document.createElement('span')
span.innerText = '라이언'

container.append(div)
div.append(img, span)