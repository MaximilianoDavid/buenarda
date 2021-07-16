AOS.init();


var toggle = document.querySelector('.nav-toggle')
var menu = document.querySelector('.mobile_nav')

toggle.addEventListener("click", () => {menu.classList.toggle("menu_hide")})


/*Potrero*/
let logo_potrero = document.getElementById('potrero');         
logo_potrero.addEventListener('mouseover', 
function(){logo_potrero.setAttribute("src" , "images/potrero.png");})
logo_potrero.addEventListener('mouseout', 
function(){logo_potrero.setAttribute("src" , "images/potrerog.png")})
/*Potrero*/