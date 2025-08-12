const positions = {
  spare: 0,
  oil: 0
};

const visibleCards = 3;

function slide(id, direction) {
  const slider = document.getElementById(id);
  const cards = slider.querySelectorAll('.product-card');
  const totalCards = cards.length;
  const maxScroll = totalCards - visibleCards;

  positions[id] += direction;

  if (positions[id] < 0) positions[id] = 0;
  if (positions[id] > maxScroll) positions[id] = 0; // loop back to start

  const offset = positions[id] * (cards[0].offsetWidth + 10);
  slider.style.transform = `translateX(-${offset}px)`;
}

// ⏱️ Auto-slide both sliders every 4 seconds
setInterval(() => {
  slide('spare', 1);
  slide('oil', 1);
}, 4000);
