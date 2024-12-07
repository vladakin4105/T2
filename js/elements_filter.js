document.getElementById('in').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card-holder');
  
    cards.forEach(card => {
      const text = card.querySelector('a').textContent.toLowerCase();
      if (text.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });