
let x=document.querySelector('.container1');

x.addEventListener('click',(e)=>{
    document.querySelector('.container1').style.background = (document.querySelector('.container1').style.background=='rgb(0, 215, 72)'?'rgb(113,44,249)':'rgb(0, 215, 72)')
})

let y=document.querySelector('.container2');

y.addEventListener('click',(e)=>{
    document.querySelector('.container2').style.background = (document.querySelector('.container2').style.background=='rgb(255, 190, 10)'?'rgb(113,44,249)':'rgb(255, 190, 10)')
})


let z=document.querySelector('.container3');

z.addEventListener('click',(e)=>{
    document.querySelector('.container3').style.background = (document.querySelector('.container3').style.background=='rgb(0, 0, 0)'?'rgb(113,44,249)':'rgb(0,0,0)')
})

