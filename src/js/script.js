// Navbar Fixed
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;

   if(window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
   }else {
      header.classList.remove('navbar-fixed');
   }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
});


// Programming Logo
const programming = document.querySelector('#programming');
const textprog = document.querySelector('#textprog');
const progmodal = document.querySelector('#progmodal');

programming.addEventListener('mouseover', function () {
   progmodal.classList.toggle('hidden');
   textprog.classList.toggle('hidden'); 
},true);

programming.addEventListener('mouseout', function () {
   progmodal.classList.toggle('hidden');
   textprog.classList.toggle('hidden'); 
},true);

// Design Logo
const graphic = document.querySelector('#graphic');
const textdesg = document.querySelector('#textdesg');
const desgmodal = document.querySelector('#desgmodal');

graphic.addEventListener('mouseover', function () {
   textdesg.classList.toggle('hidden');
   desgmodal.classList.toggle('hidden'); 
},true);

graphic.addEventListener('mouseout', function () {
   textdesg.classList.toggle('hidden');
   desgmodal.classList.toggle('hidden'); 
},true);

// Qualtiy Logo
const qualta = document.querySelector('#qualta');
const textqual = document.querySelector('#textqual');
const desgqual = document.querySelector('#desgqual');

qualta.addEventListener('mouseover', function () {
   textqual.classList.toggle('hidden');
   desgqual.classList.toggle('hidden'); 
},true);

qualta.addEventListener('mouseout', function () {
   textqual.classList.toggle('hidden');
   desgqual.classList.toggle('hidden'); 
},true);