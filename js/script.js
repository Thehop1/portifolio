// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    navMenu.classList.remove('active');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 14, 26, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.background = 'rgba(26, 31, 46, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card').forEach(el => {
  observer.observe(el);
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Create mailto link
  const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Reset form
  this.reset();
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Typing effect for hero section
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('#hero h2');
  const heroDescription = document.querySelector('#hero p');
  
  if (heroTitle && heroDescription) {
    // Add cursor effect
    heroTitle.style.borderRight = '3px solid var(--primary-color)';
    heroTitle.style.paddingRight = '5px';
    
    setTimeout(() => {
      typeWriter(heroTitle, 'Electronic & Electrical Engineer', 80);
    }, 500);
    
    setTimeout(() => {
      heroTitle.style.borderRight = 'none';
      heroDescription.style.borderRight = '2px solid var(--accent-color)';
      heroDescription.style.paddingRight = '5px';
      typeWriter(heroDescription, 'Designing innovative circuits and embedded systems to solve real-world problems', 30);
    }, 3500);
    
    setTimeout(() => {
      heroDescription.style.borderRight = 'none';
    }, 8000);
  }
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('#hero::before');
  const speed = scrolled * 0.5;
  
  // Apply parallax to hero background elements
  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Add click ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add ripple effect to CTA button and form submit button
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-button, .submit-btn');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
  });
});

// Add CSS for ripple effect
const rippleCSS = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Skill cards hover sound effect (optional - commented out)
/*
function playHoverSound() {
  // Create audio context for hover sound
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = 800;
  oscillator.type = 'sine';
  gainNode.gain.value = 0.1;
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1);
}

// Add hover sound to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', playHoverSound);
});
*/
