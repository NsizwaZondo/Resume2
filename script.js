    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      const isOpen = menu.classList.contains('show');

      if (isOpen) {
        menu.classList.remove('show');

      } else {
        menu.classList.add('show');
      }
    }

    document.getElementById('close-menu').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('show');
    });

    const scrollContainer = document.getElementById('projects-row');

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -620, behavior: 'smooth' }); 
    }

    function scrollRight() {
      scrollContainer.scrollBy({ left: 620, behavior: 'smooth' });
    }