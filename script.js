
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navList = document.querySelector('.main-nav ul');

  burger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, 
          behavior: 'smooth'
        });

      
        navList.classList.remove('open');
      }
    });
  });

  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });
});
