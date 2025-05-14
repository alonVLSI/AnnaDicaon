document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                offset: 120
            });
			        });

	  window.onload = function() {
    var s = document.createElement('script');
    s.setAttribute('data-account', 'VZA8XqqwST');
    s.setAttribute('data-position', '5'); // בוחר מיקום
    s.src = 'https://cdn.userway.org/widget.js';
    document.body.appendChild(s);
  }
            // Add appear class to elements with animation classes when they're in viewport
const animatedElements = document.querySelectorAll('.slide-up, .slide-right, .slide-left, .fade-in, .zoom-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // לא לצפות יותר, האנימציה הסתיימה
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(el => {
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  // Appear on scroll (manual animations)
  const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide-up, .slide-right, .slide-left, .fade-in, .zoom-in').forEach(el => {
    appearObserver.observe(el);
  });

  // IntersectionObserver for animate-fade-up (once)
  const fadeUpObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          fadeUpObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-fade-up").forEach(el => {
    fadeUpObserver.observe(el);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 80,
          behavior: 'smooth'
        });
      }

      // Close mobile nav if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Testimonials slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.getElementById('dots');
  let index = 0;


  // Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // Tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }

  // Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (accordionHeaders.length) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');

        document.querySelectorAll('.accordion-item').forEach(item => {
          if (item !== accordionItem) item.classList.remove('active');
        });
      });
    });
  }

  // Purchase options
  const radioOptions = document.querySelectorAll('.radio-option');
  const productNameEl = document.getElementById('product-name');
  const productPriceEl = document.getElementById('product-price');
  const totalPriceEl = document.getElementById('total-price');
  const deliveryRowEl = document.querySelector('.delivery-row');

  if (radioOptions.length && productNameEl && productPriceEl && totalPriceEl) {
    radioOptions.forEach(option => {
      option.addEventListener('click', () => {
        radioOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        const price = option.getAttribute('data-price');
        const optionText = option.querySelector('label').textContent.split('₪')[0].trim();

        productNameEl.textContent = optionText;
        productPriceEl.textContent = `₪${price}`;
        totalPriceEl.textContent = `₪${price}`;

        if (deliveryRowEl) {
          deliveryRowEl.style.display = (optionText === 'איסוף עצמי') ? 'none' : 'flex';
        }
      });
    });
  }

  const purchaseBtn = document.querySelector('.btn-purchase');
  if (purchaseBtn) {
    purchaseBtn.addEventListener('click', function () {
      alert('מערכת הרכישה תהיה פעילה בקרוב. תודה על ההתעניינות!');
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero");
    if (header && hero) {
      const headerHeight = header.offsetHeight;
      hero.style.marginTop = (headerHeight + 30) + "px";
    }
  });
document.getElementById("Chapter8").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Chapter8.pdf";
  link.setAttribute("download", "Chapter8.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // יצירת הודעה עם אנימציה
  const message = document.createElement("div");
  message.className = "download-toast";
  message.textContent = "📥 ההורדה החלה...";

  document.body.appendChild(message);

  setTimeout(() => {
    message.classList.add("fade-out");
  }, 2000);

  setTimeout(() => {
    document.body.removeChild(message);
  }, 3000);
});
  document.querySelectorAll('.radio-option').forEach(option => {
    option.addEventListener('click', () => {
      // הסר 'active' מכל האפשרויות והוסף רק לנוכחית
      document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      // בדוק אם הטקסט כולל "משלוח עד הבית"
      const labelText = option.innerText || "";
      const shippingField = document.getElementById('shipping-address');

      if (labelText.includes("משלוח עד הבית")) {
        shippingField.style.display = 'block';
      } else {
        shippingField.style.display = 'none';
      }
    });
  });
