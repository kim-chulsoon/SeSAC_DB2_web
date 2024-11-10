let container = []

for(let i = 1; i<=100; i++){
    container[i-1]=i
}

let sum1 = 0
for(let i =0; i<container.length; i++){
    sum1 += container[i]
}

let sum2 = 0
for(let i of container){
    sum2 += i
}

let sum3 = 0
container.forEach(i =>{
    sum3 += i
})