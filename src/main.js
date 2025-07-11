import './style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'
import 'slick-carousel'

document.addEventListener('DOMContentLoaded', function() {
  // Initialize slick slider
  $('.hero-slider').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '25%',
    focusOnSelect: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '15%',
          arrows: false
        }
      }
    ]
  });

  const postCards = document.querySelectorAll('.post-card');
  
  postCards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Post clicked:', this.querySelector('.post-title').textContent);
    });
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Navigation clicked:', this.textContent);
    });
  });

  // Mobile menu functionality
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  hamburgerMenu.addEventListener('click', function() {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking on mobile menu links
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking on overlay
  mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
