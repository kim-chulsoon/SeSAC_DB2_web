// input value 설정 및 가져오기
function getValue(){
    let value = $('input').val()
    console.log(value)
}
function setValue(){
    $('input').val('다른 글자로 설정')
}

// css
function changeCssJs(){
    let span = document.querySelector('span')
    span.style = 'font-size : 20px; color : red;'
}
function changeCssJQ(){
    $('span').css('font-size', '40px')
    $('span').css('color', 'blue')
}

// attr
function changeAttrJs(){
    let a = document.querySelector('a')
    a.setAttribute('href', 'https://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href','https://www.daum.net')
}

// text
function changeTextJs(){
    let p = document.querySelector('.p-text')
    p.innerText = 'js로 바꾼 내용입니다'
}
function changeTextJQ(){
    $('.p-text').text('jQury로 바꾼 내용입니다')
}

// html
function changeHtmlJs(){
    let p = document.querySelector('.p-html')
    p.innerHTML = '<em>javascript</em>'
}
function changeHtmlJQ(){
    $('.p-html').html('<h2>jQury<h2>')
}

// append
function appendJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '마지막 자식으로 추가된 li (js)'

    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li (jQury)</li>')
}

// prepend
function prependJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '첫번째 자식으로 추가된 li (js)'
    
    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>첫번째 자식으로 추가된 li (jQury)</li>')
}

// after
function afterJs(){
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = '이전 형제로 추가된 li (js)'

    green.after(li)
}
function afterJQ(){
    $('.green').after('<li>이전 형제로 추가된 li (jQury)</li>')
}


// before
function beforeJs(){
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = '다음 형제로 추가된 li (js)'

    green.before(li)
}
function beforeJQ(){
    $('.green').before('<li>ul 앞에 추가된 li (jQury)</li>')
}

// remove
function removeJs(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removeJQ(){
    $('.li2').remove()
}

// empty
function emptyJs(){
    let nums = document.querySelector('ul.nums')
    nums.innerHTML = ' '
}
function emptyJQ(){
    $('ul.nums').empty()
}

// 요소 탐색
function findParent(){
    console.log($('.child2').parent())
}

function findParents(){
    console.log($('.child2').parents())

}

function findNext(){
    console.log($('.child2').next())

}

function findPrev(){
    console.log($('.child2').prev())

}

function findChildren(){
    

}

// 클래스 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}

function removeClass(){
    // $('#hi').removeClass('color-blue')
    $('#hi').removeClass()

}

function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}

function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}