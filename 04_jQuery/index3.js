console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

// click() : 클릭했을 때
// jQury에서는 이벤트 이름으로 메서드가 존재함
// 요소.click(function(){}), 요소.hover(function(){}, function(){})

$('.p-msg').click(function(){
    $('.p-msg').css('color', 'red')
})

$('.num').click(function(){
    // $('num').css('color', 'blue')
    // $(this).css('color', 'green') // 자기 자신을 가리킴/
})

// $('.num').on('click', function(){
//     $(this).css('color', 'pink')

// in js
let nums = document.querySelectorAll('.num')

for(let i =0; i<nums.length; i++){
    nums[i].addEventListener('click',function(){
        this.style.color = 'blue'
    })
}

// hover() : 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(function(){
    $(this).addClass('hover')

    },
    function(){
        $(this).removeClass('hover')
    }
)

$(window).scroll(function(){
    console.log('scrolling')
})

// 

/* 
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
*/

$('.input-key').keydown(function(e){
    if(e.code==='ArrowLeft'){
        console.log('왼쪽 방향키 눌렀습니다.')
    }else if(e.code==='ArrowRight'){
        console.log('오른쪽 방향키 눌렸습니다.')
    }else if(e.code==='ArrowUp'){
        console.log('위쪽 방향키 눌렸습니다.')
    }else if(e.code==='ArrowDown'){
        console.log('아래쪽 방향키 눌렸습니다.')
    }else{
    console.log('방향키가 아닌 키보드를 눌렀습니다')
    }
})

$('#todo-form').submit(function(e){
    e.preventDefault()

    const iV = $('input=name["todo"]').val()

    $('.todo').append(`<li>${iV}</li>`)

    $('input=name["todo"]').val(' ')
})