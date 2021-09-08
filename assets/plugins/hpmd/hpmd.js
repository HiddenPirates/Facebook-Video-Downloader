var buttons = document.getElementsByClassName('ripple-effect');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

	var rect = this.getBoundingClientRect();
	circle.style.left = e.clientX - rect.left -d/2 + 'px';
	circle.style.top = e.clientY - rect.top - d/2 + 'px';

    const button = e.currentTarget;
    const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
	  ripple.remove();
	}

    circle.classList.add('ripple');
}

  // ----------------------------------------------------------//
 //                        Navbar Js                          //
// ----------------------------------------------------------//


let nav_menu_btn = document.querySelector('#nav-menu-btn');
let nav_slider = document.querySelector('.nav-slider');
let hp_nav_slider_close_btn = document.querySelector('.hp-nav-slider-close-btn');

nav_menu_btn.addEventListener('click', openSlideMenu);
hp_nav_slider_close_btn.addEventListener('click', closeSlideMenu);

function openSlideMenu(){
    nav_slider.style.width = "12.5rem";
}
function closeSlideMenu(){
    nav_slider.style.width = "0rem";
}
