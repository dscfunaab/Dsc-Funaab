const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav');
const navLinkNodeList = document.querySelectorAll('.nav_item');
const navLink = Array.prototype.slice.call(navLinkNodeList);
const topDiv = document.querySelector('#top');
const middleDiv = document.querySelector('#middle');
const bottomDiv = document.querySelector('#bottom');
// console.log(nav.offsetLeft);

const animateNavButton = function () {
    if(nav.offsetLeft != 0 ){
        nav.style.marginLeft = 0;
        topDiv.classList.add('top');
        bottomDiv.classList.add('bottom');
        middleDiv.classList.add('middle');
    } else {
        nav.style.marginLeft = '100%';
        topDiv.classList.remove('top');
        bottomDiv.classList.remove('bottom');
        middleDiv.classList.remove('middle');

    }
}

navButton.addEventListener('click', animateNavButton);

navLink.forEach(function(link) {
    link.addEventListener('click', animateNavButton);
});
