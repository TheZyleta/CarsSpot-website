const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        
        const container = button.previousElementSibling;
        const textContainer = container.querySelector('#text');
        const elli = container.querySelector('#ellipsis');
        
        elli.classList.toggle('hidden');
        elli.classList.toggle('block');
        textContainer.classList.toggle('hidden');
        textContainer.classList.toggle('block');
  
        if (button.textContent.includes('Rozwiń')) {
            button.innerHTML = 'Zwiń &#x1F861;'; 
        } else {
            button.innerHTML = 'Rozwiń &#x1F863;'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-image');
  
    const updateImageWidth = () => {
      return images[0].clientWidth; 
    };
  
    const isMediumScreen = () => {
      return window.matchMedia('(min-width: 768px)').matches;
    };
  
    let imageWidth = updateImageWidth();
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => {
          d.classList.remove('bg-blue');
          d.classList.add('bg-veryLightGray');
        });
  
        dot.classList.add('bg-blue');
        dot.classList.remove('bg-veryLightGray');
  
        const numImages = images.length; 
        let translateX = 0;
        const imageIndex = (index % numImages); 
        const extraOffset = isMediumScreen() ? 48 : 0;
  
        translateX = -imageIndex * imageWidth - imageIndex * extraOffset;
  
        gallery.style.transform = `translateX(${translateX}px)`;
      });
    });
  
    window.addEventListener('resize', () => {
      imageWidth = updateImageWidth();
    });
  });