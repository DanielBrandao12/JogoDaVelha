
const p1 = document.getElementById('position1')
const p2 = document.getElementById('position2')

var array = ['x']

p1.addEventListener('click',e =>{

    for(let i = 0; i<array.length;i++){
        if(array[i] == 'x'){
            p1.innerText = 'O'
            array.push('o')
            return
       }else{
           p1.innerText = 'X'
           array.push('x')
           return
       }

    }

  

})

p2.addEventListener('click',e =>{

    for(let i = 0; i<array.length;i++){
        if(array[i] == 'x'){
            p2.innerText = 'O'
       }else{
           p2.innerText = 'X'
       }

    }

  

})