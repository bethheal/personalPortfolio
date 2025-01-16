document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded'); // Check if script is running
    document.getElementById('menu-toggle').addEventListener('click', function () {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
      console.log('Menu toggled');
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Close menu after click
  });
});

  const phrases = [
    "A Passionate Frontend Web Developer.",
    "Turning designs into functional, beautiful, and efficient websites."
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typeSpeed = 100; 
  const eraseSpeed = 50; 
  const delayBetweenPhrases = 2000; 
  
  const typedOutElement = document.getElementById("typed-out");
  
  function typeOut() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
      typedOutElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeOut, typeSpeed);
    } else {
      setTimeout(eraseOut, delayBetweenPhrases);
    }
  }
  
  function eraseOut() {
    if (currentCharIndex > 0) {
      typedOutElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(eraseOut, eraseSpeed);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeOut, typeSpeed);
    }
  }
  
  // Start the typing effect
  typeOut();
    