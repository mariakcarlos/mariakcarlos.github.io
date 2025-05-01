/* Scroll to Top */
let mysBtn = document.getElementById('scrollid');

window.addEventListener('scroll', function (){
    if(this.document.body.scrollTop > 20
        || this.document.documentElement.scrollTop > 20) {
            mysBtn.style.display = 'block';
        } else {
            mysBtn.style.display = 'none';
        }
});


/* Displays or hides content */
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.secondaryNav a');
  const sections = document.querySelectorAll('.seriesInfoContent');

  if (links.length === 0) {
    sections.forEach(section => {
      section.style.display = 'block';
    });
  } else {
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-id');

        sections.forEach(section => {
          section.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
      });
    });
  }
});


/* Transition between character divs */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.infoRow').forEach(row => {
    observer.observe(row);
});


/* Contact Form Validation */
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      successMsg.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    }
  });
});