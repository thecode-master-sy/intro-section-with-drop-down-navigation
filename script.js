const hamburger = document.querySelector('.hamburger__icon');
const mobileNavigation = document.querySelector('.navigation__mobile-container');
const cancel = document.querySelector('.icon-cancel');
const dropdownContainer = Array.from(document.querySelectorAll('.dropdown__container'));

console.log(dropdownContainer)
console.log(mobileNavigation);

console.log(hamburger);


hamburger.addEventListener('click', ()=>{
	mobileNavigation.classList.add('active');
})


cancel.addEventListener('click', ()=>{
	mobileNavigation.classList.remove('active')
})

dropdownContainer.forEach(drop=>{
	drop.addEventListener('click', e=>{
		if(drop.classList.contains('active')){
			drop.classList.remove('active');
		}else {
			drop.classList.add('active')
		}
	})
})


