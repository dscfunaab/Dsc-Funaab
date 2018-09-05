const navButton = document.querySelector('.nav_button');
const nav = document.querySelector('.nav');
const navLinkNodeList = document.querySelectorAll('.nav_item');
const navLink = Array.prototype.slice.call(navLinkNodeList);
const topDiv = document.querySelector('#top');
const middleDiv = document.querySelector('#middle');
const bottomDiv = document.querySelector('#bottom');
const homeDiv = document.querySelector('#home');
const aboutDiv = document.querySelector('#about');
const contactUsDiv = document.querySelector('#contact_us');
const blogDiv = document.querySelector('#blog');
const coreTeamDiv = document.querySelector('#core_team');
const pageSection = [homeDiv, aboutDiv, contactUsDiv, blogDiv, coreTeamDiv];
const headerHeight = document.querySelector('.header').offsetHeight;

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


window.addEventListener('scroll', function() {
    // 20 makes the active class change at the rigth time
    const windowPosition = window.scrollY + headerHeight + 20;
    pageSection.forEach(function(section) {
        // the number 90 is to add the active class at the right time
        let sectionBorder = section.offsetTop + section.scrollHeight - 90;
        let hashPlusSectionId = '#' + section.id ;
        if(windowPosition >= section.offsetTop && windowPosition <= sectionBorder) {
            console.log(windowPosition,section.offsetTop, sectionBorder)
            navLink.forEach(function(link) {
                let linkAttribute = link.querySelector('a').getAttribute('href');
                if( hashPlusSectionId === linkAttribute) {
                    link.classList.add('active_link');
                } else {
                    link.classList.remove('active_link');
                }
            })
        }
    });
})