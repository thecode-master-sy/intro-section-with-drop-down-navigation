const hamburger = document.querySelector('.hamburger__icon');
const mobileNavigation = document.querySelector('.navigation__mobile-container');
const cancel = document.querySelector('.icon-cancel');
console.log(mobileNavigation);

console.log(hamburger);


hamburger.addEventListener('click', ()=>{
	mobileNavigation.classList.add('active');
})


cancel.addEventListener('click', ()=>{
	mobileNavigation.classList.remove('active')
})

