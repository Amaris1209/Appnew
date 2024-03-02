// JavaScript for carousel initialization
const carouselContainer = document.getElementById('app');

function createCarousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel-container');

  for (let i = 0; i < 5; i++) {
    const postCard = document.createElement('div');
    postCard.classList.add('carousel-slide');
    postCard.innerHTML = `
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <!-- Content for PostCard -->
      </div>
    `;
    carousel.appendChild(postCard);
  }

  return carousel;
}

carouselContainer.appendChild(createCarousel());
