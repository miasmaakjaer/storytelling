"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');

    // Set the initial active icon
    sidebarIcons[0].classList.add('active');

    // Smooth scrolling
    document.querySelectorAll('[data-page]').forEach((element) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.dataset.page;
        const targetSection = document.querySelector(targetPage);

        scroll({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      });
    });

    // Active class management
    window.addEventListener('scroll', function () {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentSection = section.id;

        if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
          sidebarIcons.forEach((icon) => {
            icon.classList.remove('active');
            if (icon.dataset.page === `#${currentSection}`) {
              icon.classList.add('active');
            }
          });
        }
      });
    });
  });