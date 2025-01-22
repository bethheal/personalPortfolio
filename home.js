
  // Existing scripts for hamburger, loader, typing effect, and progress board
  document.getElementById('hamburger-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });

  function showLoader() {
    document.getElementById("loader-container").style.display = "flex";
  }

  function hideLoader() {
    document.getElementById("loader-container").style.display = "none";
  }

  function fetchData() {
    showLoader(); 
    setTimeout(() => {
      hideLoader();
    }, 3000);
  }

  document.addEventListener("DOMContentLoaded", fetchData);

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
  typeOut();

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
    const rect = container.getBoundingClientRect();
    if (!isScrolledTo && rect.top < window.innerHeight && rect.bottom >= 0) {
      isScrolledTo = true;
      skills.forEach(skill => {
        const progressBar = document.getElementById(skill.id);
        let value = 0;
        const interval = setInterval(() => {
          if (value >= skill.value) {
            clearInterval(interval);
          } else {
            value++;
            progressBar.value = value;
          }
        }, 20);
      });
    }
  });

  // Form validation script
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const subject = document.querySelector("input[name='subject']");
    const message = document.querySelector("textarea[name='message']");
    let isValid = true;

    function showError(input, message) {
      const parent = input.parentElement;
      parent.classList.add("error");
      let error = parent.querySelector(".error-message");
      if (!error) {
        error = document.createElement("span");
        error.className = "error-message text-red-500 text-sm";
        parent.appendChild(error);
      }
      error.textContent = message;
      isValid = false;
    }

    function clearError(input) {
      const parent = input.parentElement;
      parent.classList.remove("error");
      const error = parent.querySelector(".error-message");
      if (error) {
        parent.removeChild(error);
      }
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.value.trim() || !nameRegex.test(name.value)) {
      showError(name, "Please enter a valid name (letters and spaces only).");
    } else {
      clearError(name);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      showError(email, "Please enter a valid email address.");
    } else {
      clearError(email);
    }

    if (!subject.value.trim()) {
      showError(subject, "Subject is required.");
    } else {
      clearError(subject);
    }

    if (!message.value.trim()) {
      showError(message, "Message cannot be empty.");
    } else {
      clearError(message);
    }

    if (isValid) {
      alert(`Thank you, ${name.value.trim()}! Your message has been sent.`);
      document.querySelector(".contact-form").reset();
    }
  });