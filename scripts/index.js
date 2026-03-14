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


const getStickyHeaderHeight = () => {
  const nav = document.querySelector('nav');

  if (!nav) {
    return 0;
  }

  return Math.ceil(nav.getBoundingClientRect().height);
};

const syncStickyHeaderOffset = () => {
  document.documentElement.style.scrollPaddingTop = `${getStickyHeaderHeight()}px`;
};

const scrollToSection = (targetId) => {
  const target = document.querySelector(targetId);

  if (!target) {
    return;
  }

  const stickyHeaderHeight = getStickyHeaderHeight();
  const top = target.getBoundingClientRect().top + window.scrollY - stickyHeaderHeight;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth',
  });
};

const setupSmoothScroll = () => {
  const navLinks = document.querySelectorAll('#nav a[href^="#"]');

  syncStickyHeaderOffset();

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

  window.addEventListener('resize', syncStickyHeaderOffset, { passive: true });
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
