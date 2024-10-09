

let overlay= document.getElementById('overlay-menu')
let btn = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btn.addEventListener('click', ()=>{
    menu.classList.add('abrir')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})