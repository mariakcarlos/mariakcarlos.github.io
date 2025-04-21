let mysBtn = document.getElementById('scrollid');

window.addEventListener('scroll', function (){
    if(this.document.body.scrollTop > 20
        || this.document.documentElement.scrollTop > 20) {
            mysBtn.style.display = 'block';
        } else {
            mysBtn.style.display = 'none';
        }
});