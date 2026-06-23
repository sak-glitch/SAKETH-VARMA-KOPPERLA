/**
 * SoftFlow Website — Main JavaScript
 * Handles: mobile menu toggle, subscription pricing, contact form
 */

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
      navLinks.classList.remove('open');
    }
  });
}

// Subscription toggle (product page)
const subToggle = document.getElementById('subToggle');
const subPrice = document.getElementById('subPrice');
const subSavings = document.getElementById('subSavings');

if (subToggle) {
  const options = subToggle.querySelectorAll('.subscription-option');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      // Update active state
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      // Update price
      const plan = opt.dataset.plan;
      if (plan === 'monthly') {
        subPrice.innerHTML = '₹199 <span>/ month</span>';
        subSavings.textContent = 'Free shipping included';
      } else if (plan === 'quarterly') {
        subPrice.innerHTML = '₹499 <span>/ quarter</span>';
        subSavings.textContent = 'Save ₹98 — free shipping included';
      }
    });
  });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple client-side validation
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all required fields.';
      formStatus.style.color = 'var(--color-error)';
      formStatus.style.display = 'block';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.style.color = 'var(--color-error)';
      formStatus.style.display = 'block';
      return;
    }

    // Simulate form submission (Stripe/backend not connected yet)
    formStatus.textContent = '✅ Message sent! We\'ll get back to you within 24 hours.';
    formStatus.style.color = 'var(--color-success)';
    formStatus.style.display = 'block';
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active nav link highlighting based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinksAll = document.querySelectorAll('.nav-links a');

  navLinksAll.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    } else if (currentPath !== '/' && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });
});

console.log('🫧 SoftFlow — Soft water, on demand.');