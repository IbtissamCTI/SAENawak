document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const sliderItems = document.querySelectorAll('.slider__item');
    const navItems = document.querySelectorAll('.slider__nav-item');
    
    let currentIndex = 0;
    const totalItems = sliderItems.length;
  
    function updateSlider() {
      const offset = -currentIndex * (100 / totalItems);
      sliderWrapper.style.transform = `translateX(${offset}%)`;
      
      navItems.forEach((nav, index) => {
        nav.classList.toggle('active', index === currentIndex);
      });
    }
  
    navItems.forEach((nav, index) => {
      nav.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
  
    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateSlider();
    }
  
    setInterval(autoSlide, 5000);
  });
