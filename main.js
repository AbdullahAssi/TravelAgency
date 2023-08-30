import './styles/style.css';


const preloader = document.querySelector('[data-preaload]');

window.addEventListener('load', function() {
    preloader.classList.add('loaded');
    document.body.classList.add("loaded");
});



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 