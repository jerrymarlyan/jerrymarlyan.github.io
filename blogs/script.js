// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll('.case-card');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.classList.add('show');
    }

  });

});