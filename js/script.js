/*---------------------------------------------*/
const btns = document.querySelectorAll('.modals__btn');
const modalOverlay = document.querySelector('.modal__overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal__visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal__visible');
		modalOverlay.classList.add('modal__overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal__overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});
/*--------------------------------------------------------*/
var swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 2500,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});
/*-------------------------------*/
// меню
const iconResp = document.querySelector('.responsive__icon');
const respBody = document.querySelector('.responsive__body');
if (iconResp) {
	iconResp.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconResp.classList.toggle('_active');
		respBody.classList.toggle('_active');
	});
}


