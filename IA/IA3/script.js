/* scroll to section */
let menuLink = document.getElementById('scrollid-menu');

menuLink.addEventListener('click', function(){
    document.getElementById('section1').scrollIntoView({behavior: 'smooth', start: 'block'})
});

let footerLink = document.getElementById('scrollid-menu2');

menuLink.addEventListener('click', function(){
    document.getElementById('section2').scrollIntoView({behavior: 'smooth', start: 'block'})
});

/* scroll to top */
let mysBtn = document.getElementById('scrollid');

window.addEventListener('scroll', function (){
    if(this.document.body.scrollTop > 20
        || this.document.documentElement.scrollTop > 20) {
            mysBtn.style.display = 'block';
        } else {
            mysBtn.style.display = 'none';
        }
});