
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
var player1 =[]
var player2 =[]
var postions = [1,2,3,4,5,6,7,8,9]
var win =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]

]
function verficarCasas(p,valor){

    if(array == ''){
        p.innerText = 'X'
        array.push('x')
        player1.push(valor)
      
    }else{

        for(let i = 0; i<array.length;i++){
            if(array[array.length -1] == 'x'){
                p.innerText = 'O'
                array.push('o')
                
            
                    player2.push(valor)
                
                
                return
               
           }else   if(array[array.length -1] == 'o'){
               p.innerText = 'X'
               array.push('x')
               player1.push(valor)
              return
           }
   
        }
    }


  return array
}


p1.addEventListener('click',e =>{
    let addPositon = postions.length-8

    verficarCasas(p1 , addPositon)
    winnerPlayer()
    
    
})

p2.addEventListener('click',e =>{
    let addPositon = postions.length-7
verficarCasas(p2 , addPositon)
winnerPlayer()
})

p3.addEventListener('click',e =>{
    let addPositon = postions.length-6
    verficarCasas(p3, addPositon)
    winnerPlayer()
    

     
    
   
})

p4.addEventListener('click',e =>{
    let addPositon = postions.length-5
verficarCasas(p4, addPositon)
winnerPlayer()

})
p5.addEventListener('click',e =>{
    let addPositon = postions.length-4
verficarCasas(p5, addPositon)
winnerPlayer()

})
p6.addEventListener('click',e =>{
    let addPositon = postions.length-3
    verficarCasas(p6, addPositon)
    winnerPlayer()

})

p7.addEventListener('click',e =>{
    let addPositon = postions.length-2
verficarCasas(p7, addPositon)
winnerPlayer()

})
p8.addEventListener('click',e =>{
    let addPositon = postions.length-1
verficarCasas(p8, addPositon)
winnerPlayer()


})

p9.addEventListener('click',e =>{
    let addPositon = postions.length
    verficarCasas(p9,addPositon)
    winnerPlayer()
  
    })



function winnerPlayer(){
    win.forEach((cont)=>{
        player1.sort()
        player2.sort()
        if(cont== player1.toString()){
            console.log(cont)
          
           }else if(cont == player2.toString()) {
            console.log(cont)
           }
    
    })

    console.log(player1)
    console.log(player2)
}