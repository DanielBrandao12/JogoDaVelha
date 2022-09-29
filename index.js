
const p1 = document.getElementById('position1')
const p2 = document.getElementById('position2')
const p3 = document.getElementById('position3')
const p4 = document.getElementById('position4')
const p5 = document.getElementById('position5')
const p6 = document.getElementById('position6')
const p7 = document.getElementById('position7')
const p8 = document.getElementById('position8')
const p9 = document.getElementById('position9')

var array = []

function verficarCasas(p){

    if(array == ''){
        p.innerText = 'X'
        array.push('x')
   
      
    }else{

        for(let i = 0; i<array.length;i++){
            if(array[array.length -1] == 'x'){
                p.innerText = 'O'
                array.push('o')
                return
               
           }else   if(array[array.length -1] == 'o'){
               p.innerText = 'X'
               array.push('x')
              return
           }
   
        }
    }

console.log(array)
  return array
}
p1.addEventListener('click',e =>{

    verficarCasas(p1)

})

p2.addEventListener('click',e =>{
verficarCasas(p2)

})

p3.addEventListener('click',e =>{

    verficarCasas(p3)

})

p4.addEventListener('click',e =>{
verficarCasas(p4)

})
p5.addEventListener('click',e =>{
verficarCasas(p5)

})
p6.addEventListener('click',e =>{

    verficarCasas(p6)

})

p7.addEventListener('click',e =>{
verficarCasas(p7)

})
p8.addEventListener('click',e =>{
verficarCasas(p8)

})

p9.addEventListener('click',e =>{
    verficarCasas(p9)
    
    })