const onOpenInsta = () => {
  // window.location.hostname === "zayidu.github.io" &&
  window.open('https://instaclonezayidu.herokuapp.com/', '_blank').focus();
};

const onOpenzDevConnector = () => {
  window.open('https://powerful-brook-38361.herokuapp.com/', '_blank').focus();
};

const onOpenNBA = () => {
  window.open('https://nba-full-stack-59c4b.web.app/', '_blank').focus();
};

const onOpenBookaholic = () => {
  window.open('https://fierce-brook-03104.herokuapp.com/', '_blank').focus();
};


const scrollToSection = (targetId) => {
  const target = document.querySelector(targetId);
  const nav = document.querySelector('nav');

  if (!target) {
    return;
  }

  const navOffset = nav ? nav.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 12;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth',
  });
};

const setupSmoothScroll = () => {
  const navLinks = document.querySelectorAll('#nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      if (!targetId || targetId === '#') {
        return;
      }

      event.preventDefault();
      scrollToSection(targetId);
    });
  });
};

const setupBackToTopButton = () => {
  const overallExperience = document.getElementById('overallExperience');
  const backToTopButton = document.querySelector('[data-back-to-top]');

  if (!overallExperience || !backToTopButton) {
    return;
  }

  const updateButtonVisibility = () => {
    const threshold = overallExperience.offsetTop + overallExperience.offsetHeight * 0.5;
    const hasReachedThreshold = window.scrollY + 80 >= threshold;

    backToTopButton.classList.toggle('is-visible', hasReachedThreshold);
  };

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', updateButtonVisibility, { passive: true });
  window.addEventListener('resize', updateButtonVisibility);
  updateButtonVisibility();
};

setupSmoothScroll();
setupBackToTopButton();
