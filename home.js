document.getElementById('hamburger-btn').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle visibility of nav links for mobile
  mobileMenu.classList.toggle('hidden');
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


  // PROGRESS BOARD SCRIPT
  const skills = [
    { id: 'react', value: 87 },
    { id: 'html', value: 93 },
    { id: 'css', value: 86 },
    { id: 'javascript', value: 75 },
    { id: 'python', value: 40 },
    { id: 'typescript', value: 30 },
];

let isScrolledTo = false;

window.addEventListener('scroll', () => {
    const container = document.querySelector('.progress-container');
    if (!container) return; // Exit if container is not found

    const rect = container.getBoundingClientRect();

    if (!isScrolledTo && rect.top < window.innerHeight && rect.bottom >= 0) {
        isScrolledTo = true;

        skills.forEach(skill => {
            const progressBar = document.getElementById(skill.id);
            if (!progressBar) return; // Exit if progressBar is not found

            let value = 0;

            const interval = setInterval(() => {
                if (value >= skill.value) {
                    clearInterval(interval);
                } else {
                    value++;
                    progressBar.value = value;
                }
            }, 20); // Speed of the progress animation
        });
    }
});
