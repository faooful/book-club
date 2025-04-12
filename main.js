// === GSAP Animations ===
const tl = gsap.timeline({
    defaults: {
      duration: 2,
      yoyo: true,
      ease: 'power2.inOut'
    }
  })
  .fromTo('.left, .right', {
    svgOrigin: '640 500',
    skewY: (i) => [-30, 15][i],
    scaleX: (i) => [0.6, 0.85][i],
    x: 200
  }, {
    skewY: (i) => [-15, 30][i],
    scaleX: (i) => [0.85, 0.6][i],
    x: -200
  })
  .play(0.5);
  
  const tl2 = gsap.timeline();
  
  document.querySelectorAll('text').forEach((t, i) => {
    tl2.add(
      gsap.fromTo(t, {
        xPercent: -100,
        x: 700
      }, {
        duration: 1,
        xPercent: 0,
        x: 575,
        ease: 'sine.inOut'
      }),
      (i % 3) * 0.2
    );
  });
  
  window.onpointermove = (e) => {
    tl.pause();
    tl2.pause();
    gsap.to([tl, tl2], {
      duration: 2,
      ease: 'power4',
      progress: e.x / innerWidth
    });
  };
  
  // === Book 3D Logic ===
  const gra = function(min, max) {
    return Math.random() * (max - min) + min;
  };
  
  const gri = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const books = [
    { 
      title: "The 7 1/2 Deaths of Evelyn Hardcastle",
      author: "Stuart Turton",
      coverUrl: "https://m.media-amazon.com/images/I/41X5x++M6kL._SY445_SX342_.jpg"
    },
    { 
      title: "White Teeth",
      author: "Zadie Smith",
      coverUrl: "https://m.media-amazon.com/images/I/51Zr1BI2GWL._SY445_SX342_.jpg"
    },
    {
      title: "Dark Matter",
      author: "Blake Crouch",
      coverUrl: "https://m.media-amazon.com/images/I/51fDx4iZb8L._SY445_SX342_.jpg"
    },
    {
      title: "This is Going to Hurt",
      author: "Adam Kay",
      coverUrl: "https://m.media-amazon.com/images/I/41myGXwju9L._SY445_SX342_.jpg"
    },
    {
      title: "The Plot",
      author: "Jean Hanff Korelitz",
      coverUrl: "https://m.media-amazon.com/images/I/413BX0UWqEL._SY445_SX342_.jpg"
    },
    {
      title: "Shoe Dog",
      author: "Phil Knight",
      coverUrl: "https://m.media-amazon.com/images/I/41tHhIdXFeL._SY445_SX342_.jpg"
    },
    {
      title: "Exhalation",
      author: "Ted Chiang",
      coverUrl: "https://m.media-amazon.com/images/I/71RUx22ZVuL._SY522_.jpg"
    },
    {
      title: "The Paris Apartment",
      author: "Lucy Foley",
      coverUrl: "https://m.media-amazon.com/images/I/51+1WHxa3-L._SY445_SX342_.jpg"
    },
    {
      title: "Mercury Pictures Presents",
      author: "Anthony Marra",
      coverUrl: "https://m.media-amazon.com/images/I/81LTBj0GrFL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Mad Honey",
      author: "Jodi Picoult and Jennifer Finney Boylan",
      coverUrl: "https://m.media-amazon.com/images/I/81ArVR7PF1L._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
      title: "Sea of Tranquility",
      author: "Emily St. John Mandel",
      coverUrl: "https://m.media-amazon.com/images/I/91vqWjwdHDL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Parable of the Sower",
      author: "Octavia E. Butler",
      coverUrl: "https://m.media-amazon.com/images/I/71ZLgz1U1lL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Blitzed",
      author: "Norman Ohler",
      coverUrl: "https://m.media-amazon.com/images/I/71draqy6pGL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Hellhound on his Trail",
      author: "Hampton Sides",
      coverUrl: "https://m.media-amazon.com/images/I/811bx2-otgL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Black Cake",
      author: "Charmaine Wilkerson",
      coverUrl: "https://m.media-amazon.com/images/I/81s971I-ggL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Demon Copperhead",
      author: "Barbara Kingsolver",
      coverUrl: "https://m.media-amazon.com/images/I/91vbJgMZIeL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "The Wager",
      author: "David Grann",
      coverUrl: "https://m.media-amazon.com/images/I/91lUa7PChXL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "The Heaven and Earth Grocery Store",
      author: "James McBride",
      coverUrl: "https://m.media-amazon.com/images/I/81FS3wyevDL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Before the Coffee Gets Cold",
      author: "Toshikazu Kawaguchi",
      coverUrl: "https://m.media-amazon.com/images/I/81XuBDUvMaL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "The God of the Woods",
      author: "Liz Moore",
      coverUrl: "https://m.media-amazon.com/images/I/81gHfeKi+9L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Death of the Author",
      author: "Nnedi Okorafor",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1734381178i/214329001.jpg"
    }
  ];
  
  const calculatePerspective = function(numBooks) {
    const baseValue = Math.min(window.innerHeight, window.innerWidth);
    const perspectiveValue = baseValue * 2;
    return `${perspectiveValue}px`;
  };
  
  const calculatePadding = function(numBooks) {
    const bottomPadding = Math.max(40, numBooks * 6);
    const topPadding = Math.max(20, numBooks * 2);
    return {
      top: `${topPadding}vh`,
      bottom: `${bottomPadding}vh`
    };
  };
  
  const init = function(){
    let container = document.querySelector('.books');
    
    // Add cover preview element to body
    const preview = document.createElement('div');
    preview.className = 'cover-preview';
    document.body.appendChild(preview);
    
    container.style.perspective = calculatePerspective(books.length);
    
    [...books].reverse().forEach((book) => {
      container.insertAdjacentHTML('beforeend',
      `<li class="book" data-cover="${book.coverUrl}">
        <div class="book-spine">
          <h2 class="book-title">
            <span>${book.author}</span>
            ${book.title}
          </h2>
        </div>
        <div class="book-cover"></div>
        <div class="book-cover-back"></div>
        <div class="book-block"></div>
      </li>`);
    });
  };
  
  const setupBooks = function(){
    let bookElements = document.querySelectorAll('.book');
    const preview = document.querySelector('.cover-preview');
    const zIndexStep = Math.ceil(100 / bookElements.length);
    
    // Calculate scale based on viewport size
    const viewportScale = Math.min(window.innerWidth, window.innerHeight) / 1000;
    const baseScale = Math.min(1, Math.max(0.5, viewportScale));
    
    // Handle mouse movement for preview positioning
    document.addEventListener('mousemove', (e) => {
      if (preview.style.opacity !== '0') {
        // Position preview to the right of the cursor
        let x = e.clientX + 20; // 20px offset from cursor
        let y = e.clientY;
        
        // Keep preview within viewport
        const previewRect = preview.getBoundingClientRect();
        if (x + previewRect.width > window.innerWidth) {
          x = e.clientX - previewRect.width - 20; // Show on left side if near right edge
        }
        if (y + previewRect.height > window.innerHeight) {
          y = window.innerHeight - previewRect.height;
        }
        if (y < 0) {
          y = 0;
        }
        
        preview.style.left = `${x}px`;
        preview.style.top = `${y}px`;
      }
    });
    
    for (let i = 0; i < bookElements.length; i++){
      const book = bookElements[i];
      const rotateZ = gra(60, 75);
      const translateX = gra(-3, 3);
      const translateY = gra(-3, 3);
      const scale = baseScale * Math.max(0.8, 1 - (bookElements.length * 0.01));

      const transform = `
        rotateY(0) 
        rotateX(-95deg) 
        rotateZ(${rotateZ}deg) 
        translateX(${translateX}vh) 
        translateY(${translateY}vh)
        scale(${scale})
      `;

      book.style.transform = transform;
      book.style.zIndex = ((bookElements.length - i) * zIndexStep);

      // Update hover handlers
      book.addEventListener('mouseenter', function(e){
        const coverUrl = this.dataset.cover;
        if (coverUrl) {
          // Preload image
          const img = new Image();
          img.onload = () => {
            preview.style.backgroundImage = `url(${coverUrl})`;
            preview.style.opacity = '1';
          };
          img.onerror = () => {
            // Fallback for failed image loads
            preview.style.backgroundImage = 'none';
            preview.style.backgroundColor = '#000';
            preview.style.opacity = '1';
            preview.innerHTML = `
              <div style="color: white; padding: 20px; text-align: center;">
                <strong>${book.querySelector('.book-title').textContent}</strong>
                <br>
                <small>${book.querySelector('.book-title span').textContent}</small>
              </div>
            `;
          };
          img.src = coverUrl;
          
          // Initial position
          const x = e.clientX + 20;
          const y = e.clientY;
          preview.style.left = `${x}px`;
          preview.style.top = `${y}px`;
        }
      });

      book.addEventListener('mouseleave', function(){
        preview.style.opacity = '0';
        preview.style.backgroundImage = 'none';
        preview.innerHTML = ''; // Clear any fallback content
      });
    }
  };
  
  // Update everything when window resizes
  window.addEventListener('resize', () => {
    const container = document.querySelector('.books');
    container.style.perspective = calculatePerspective(books.length);
    setupBooks(); // Recalculate scales and positions
  });
  
  init();
  setupBooks();
  