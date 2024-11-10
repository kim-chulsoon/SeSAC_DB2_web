console.log('connected')

let done = document.querySelectorAll('.done')
let todo = document.querySelectorAll('.todo')

for(let i of done){
    i.classList.remove('done')
    i.classList.add('todo')
}

for(let i of todo){
    i.classList.remove('todo')
    i.classList.add('done')
}