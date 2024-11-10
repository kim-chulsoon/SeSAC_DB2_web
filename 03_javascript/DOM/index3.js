/*
동작의 종류 : click, doubleClick, scroll, chang, submit, erc...
- addEventListener(동작의 종류, function(){})
- <태그 onchange="함수의 이름()" onclick="함수의 이름()"></태그>
on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

// btn1.addEventListener('동작의 이름', function(){동작})
btn1.addEventListener('click',function(){
    console.log('버튼1이 클릭되었습니다')
    alert('버튼1을 클릭하셨군요')
})

btn1.addEventListener("mouseover", function(){
    // this는 자기 자신을 가리킴
    // btn1.style.backgroundColor = 'aquamarine'
    this.style.backgroundColor = 'aquamarine'
})

// btn2를 눌렀을 때, div를 자식으로 붙히기
const contariner = document.getElementById('container')
btn2.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerText = "hi"
    div.style.backgroundColor = 'pink'

    contariner.append(div)
})

// btn3을 눌렀을 때, 만들어진 div의 배경색 변경
// 함수 호출 시, 괄호 필수적으로 생략해야 함, 괄호 작성 시 즉시 호출

btn3.addEventListener('click', changeColor)
function changeColor(){
    const divs = document.querySelectorAll('#container>div')
    // [div,div,div, ...]
    for(let div of divs){
        div.style.backgroundColor = 'skyblue'
    }

    // const divlast = document.querySelector
}

// btn4를 눌렀을 때, 배경색 노란색으로 변경, 글자색 검정색으로 변경
btn3.addEventListener('click', changeBtnColor)
btn4.addEventListener('click', changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor = 'yellow'
    this.style.color = '#000'
}

// btn5를 누르면 alert창 띄우기
// onclick
function sayHi(){
    alert('안녕하세요 버튼5입니다')
}

// =====================================================================

const btn = document.querySelector('button')
const input = document.querySelector('input')

// 1. [클릭 이벤트]
btn.addEventListener('click', function(event){
    // 클릭 이벤트에 관한 정보(event 객체)
    console.log(event)

    // 어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target)
})

// =====================================================================
// 2. [키보드 이벤트]
input.addEventListener('keydown',function(event){
    // console.log(event)
    
    // 방향키 아래, 위, 왼쪽, 오른쪽
    console.log(event.code)
    console.log(event.key)
    // console.log(event.keyCode)
    if(event.code==='ArrowLeft'){
        console.log('왼쪽 방향키 눌렀습니다.')
    }else if(event.code==='ArrowRight'){
        console.log('오른쪽 방향키 눌렸습니다.')
    }else if(event.code==='ArrowUp'){
        console.log('위쪽 방향키 눌렸습니다.')
    }else if(event.code==='ArrowDown'){
        console.log('아래쪽 방향키 눌렸습니다.')
}else{
    console.log('방향키가 아닌 키보드를 눌렀습니다')
}
})

// ==================================================================
// 3. [scroll 이벤트]
// console.log(window)

window.addEventListener('scroll', (event)=>{
    // console.log(event)
    // console.log(event.target)
    // console.log(scrollY)

    // scrollY가 467에서 div opacity가 1이 되도록
   if(scrollY > 467){
    document.querySelector('.pos').style.opacity="1"
   }
})

// ==================================================================
// 4. [submit] : 폼 이벤트

const todoForm = document.querySelector('#todo-form')
const todos = document.querySelector('.todos')

todoForm.addEventListener('submit',function(e){
    e.preventDefault()
    // 폼이 제출되는 것을 취소, 이벤트 전달을 막는 방법
    // 새로고침 막음

    console.log('submit')

    const todoInput = document.querySelector('input[name="todo"]')
    console.dir(todoInput) //요소가 가지고 있는 데이터를 출력
    // console.log(todoInput.value)

    const todo = todoInput.value.trim()

    // 공백으로 들어오는 문자는 추가되지 않도록
    if(todo !==""){
        // 선택된 ul태그의 자식으로 <li>할일</li> 붙히기
        const doing = document.createElement('li')
        doing.textContent = todo
        todos.append(doing)
    }else{
        alert('오늘의 할 일을 입력해주세요')
    }
   
    todoInput.value=""  
})

// ========================================================================
// 5. [change 이벤트]

const changeInput = document.querySelector('#change-input')
changeInput.addEventListener('change', function(){
    console.log('changed')
})

changeInput.addEventListener('input',function(){
    console.log('changing')
    // input 창의 value에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value
})