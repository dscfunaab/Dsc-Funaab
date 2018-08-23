const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav');
const navLinkNodeList = document.querySelectorAll('.nav_item');
const navLink = Array.prototype.slice.call(navLinkNodeList);
const topDiv = document.querySelector('#top');
const middleDiv = document.querySelector('#middle');
const bottomDiv = document.querySelector('#bottom');

const animateNavButton = function () {
    if(screen.width < 850) {
        if(nav.offsetLeft != 0){
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
}

const MakeActive = function () {
    const siblingElement = Array.prototype.slice.call(this.parentElement.children);
    siblingElement.forEach( function(sibling) {
        sibling.classList.remove('active_link');
    });
    this.classList.add('active_link');
}

navButton.addEventListener('click', animateNavButton);

navLink.forEach(function(link) {
    link.addEventListener('click', animateNavButton);
    link.addEventListener('click', MakeActive);
});
