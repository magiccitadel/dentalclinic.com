   // intro background slider
    document.addEventListener("DOMContentLoaded", function() {
  const intro = document.getElementById("intro");
  const imglist = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
  let index = 0;

  function changeBackgroundImage() {
    intro.style.backgroundImage = `url('slider/${imglist[index]}')`;
    index = (index + 1) % imglist.length;
  }

  setInterval(changeBackgroundImage, 5000);
  changeBackgroundImage(); // Initial call to set the first image
    });
    // side bar
    document.addEventListener("DOMContentLoaded", ()=> {
    let sidetoogle = document.getElementById("sidebar-toogle")
    let sidebar = document.getElementById("sidebar");
    let shadow = document.getElementById("shadow");
let menulink = document.getElementById("side-lists")
 
  
    const openMenu = () => {
        sidebar.style.left = "0";
        shadow.style.display = "block";
    };
  
    const closeMenu = () => {
        sidebar.style.left = "-250px";
        shadow.style.display = "none";
    };
  
   sidetoogle.addEventListener("click", openMenu);
    shadow.addEventListener('click', closeMenu);
menulink.addEventListener('click', closeMenu);
    });
  
     // feedback add text plugin
     document.addEventListener("DOMContentLoaded", function () {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      document.querySelectorAll(".count").forEach(counter => {
        const endValue = parseInt(counter.getAttribute("data-end"));
        const startValue = parseInt(counter.getAttribute("data-start"));
    
        gsap.fromTo(counter, {
          textContent: startValue
        }, {
          textContent: endValue,
          duration: 2.5,
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          },
          ease: "power1.in",
          snap: { textContent: 1 },
          onUpdate: function () {
            counter.textContent = Math.floor(counter.textContent);
          },
          onComplete: function () {
            counter.textContent = counter.getAttribute("data-end");
          }
        });
      });

  });
    // gsap animation
    document.addEventListener("DOMContentLoaded", function () {

                gsap.registerPlugin(ScrollTrigger);

                gsap.registerPlugin(ScrollTrigger);
                // Animate the text section
                gsap.from(".about h3, .about p", {
                  scrollTrigger: {
                    trigger: ".about h3",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                  },
                  opacity: 0,
                  y: 30,
                  duration: 1.5,
                  ease: "power2.out",
                  stagger: 0.3
                });
              
                // Animate the image
                gsap.from(".about-img", {
                  scrollTrigger: {
                    trigger: ".about-img",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                  },
                  opacity: 0,
                  y: 30,
                  duration: 1.5,
                  ease: "power2.out"
                });

              // Select all service cards
              const serviceCards = document.querySelectorAll('.service-card');
            
              // Loop through each service card and apply the animation
              serviceCards.forEach((card, index) => {
                gsap.from(card, {
                  scrollTrigger: {
                    trigger: card,
                    start: "top 80%", // Animation starts when the top of the card reaches 80% of the viewport height
                    end: "top 50%", // Animation ends when the top of the card reaches 50% of the viewport height
                    toggleActions: "play none none none" // Play animation on scroll down, reverse on scroll up
                  },
                  opacity: 0, // Start with the card invisible
                  y: 50, // Start with the card 50px below its final position
                  duration: 1, // Animation duration in seconds
                  ease: "power3.out", // Easing function
                  delay: index * 0.2 // Delay each card slightly for a staggered effect
                });
              });
              
    });
  
    // best dental card
    document.addEventListener("DOMContentLoaded", function() {
            gsap.registerPlugin(ScrollTrigger);
          
            gsap.from(".best-dental-card", {
              scrollTrigger: {
                trigger: ".best-dental", 
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              },
              y: 50,
              opacity: 0,
              duration: 1,
              stagger: 0.3
            });
       
    });
       // best dental card if conditions
   if (window.innerWidth <= 768) {
    // Mobile-specific animation
    gsap.from(".best-dental-card", {
      scrollTrigger: {
        trigger: ".best-dental",
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });
  } else {
  // Desktop-specific animation
  gsap.from(".best-dental-card", {
      scrollTrigger: {
        trigger: ".best-dental",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3
  });
}
  
 
  
   
    // customer feedback 
    document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const sliderCards = document.querySelectorAll('.customer-feedback-card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let currentIndex = 0;
  const transitionDuration = 0.3; // Transition duration in seconds

  // Number of visible cards
  const visibleCards = () => {
    if (window.innerWidth >= 1024) return 3; // 3 cards on desktop
    if (window.innerWidth >= 768) return 2; // 2 cards on tablet
    return 1; // 1 card on mobile
  };

  // Apply transition for smooth sliding
  const applyTransition = () => {
    slider.style.transition = `transform ${transitionDuration}s ease`;
  };

  // Remove transition for dragging
  const removeTransition = () => {
    slider.style.transition = 'none';
  };

  // Move slider to correct position
  const moveSlider = (index) => {
    applyTransition();
    currentTranslate = -(index * 100) / visibleCards();
    slider.style.transform = `translateX(${currentTranslate}%)`;
    prevTranslate = currentTranslate;
  };

  // Start dragging
  const startDragging = (e) => {
    isDragging = true;
    startPos = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    removeTransition(); // Remove transition to make dragging instant
    slider.classList.add('grabbing');
  };

  // Stop dragging
  const stopDragging = () => {
    isDragging = false;
    slider.classList.remove('grabbing');

    const movedBy = prevTranslate - currentTranslate;
    if (movedBy < -50 && currentIndex > 0) {
      currentIndex--;
    } else if (movedBy > 50 && currentIndex < sliderCards.length - visibleCards()) {
      currentIndex++;
    }

    moveSlider(currentIndex);
  };

  // During drag
  const duringDragging = (e) => {
    if (isDragging) {
      const currentPosition = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      currentTranslate = prevTranslate + ((currentPosition - startPos) / window.innerWidth) * 100;
      slider.style.transform = `translateX(${currentTranslate}%)`;
    }
  };

  // Previous button
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlider(currentIndex);
    }
  });

  // Next button
  nextBtn.addEventListener('click', () => {
    if (currentIndex < sliderCards.length - visibleCards()) {
      currentIndex++;
      moveSlider(currentIndex);
    }
  });

  // Event listeners for drag functionality
  slider.addEventListener('mousedown', startDragging);
  slider.addEventListener('touchstart', startDragging);
  slider.addEventListener('mouseup', stopDragging);
  slider.addEventListener('touchend', stopDragging);
  slider.addEventListener('mouseleave', stopDragging);
  slider.addEventListener('mousemove', duringDragging);
  slider.addEventListener('touchmove', duringDragging);

  // Adjust slider on window resize
  window.addEventListener('resize', () => moveSlider(currentIndex));
    });
  
  
    // gallery image view
    document.addEventListener("DOMContentLoaded", function() {

            let view = document.querySelectorAll(".gallery-pic")
            let shadow = document.getElementById("tap-shadow")
            
            view.forEach((list)=>{
              list.addEventListener('click', ()=>{
                list.classList.add('active');
                    shadow.style.display = "block"
                })
                shadow.addEventListener('click', ()=>{
                  shadow.style.display = "none"
                list.classList.remove('active')
                 })
            })
    });
   
          

  
  