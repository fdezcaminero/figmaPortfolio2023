function coolMenu() {
  const mobileDisplay = document.getElementById('mobile1');
  const mobileMenu = document.getElementById('mobile2');

  mobileDisplay.classList.toggle('dispNone');
  mobileMenu.classList.toggle('dispNone');
}

const projects = [{
  name: 'Wikipedia',
  description: 'The Free Encyclopedia',
  featuredImage: {
    imgSrc: 'resources/Rectangle 21.png',
    imgAlt: 'Wikipedia Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'Python',
    tech3: 'JavaScript',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'Twitter',
  description: 'Life in 140 characters',
  featuredImage: {
    imgSrc: 'resources/macbook.png',
    imgAlt: 'Twitter Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'Python',
    tech3: 'BootStrap',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'Instagram',
  description: 'Light, more light',
  featuredImage: {
    imgSrc: 'resources/ABlaptop.png',
    imgAlt: 'Instagram Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'JavaScript',
    tech3: 'BootStrap',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'Uber',
  description: 'Well upon our way',
  featuredImage: {
    imgSrc: 'resources/yellowLaptop.png',
    imgAlt: 'Uber Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'JavaScript',
    tech3: 'Perl',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'Microverse',
  description: 'Learn to code',
  featuredImage: {
    imgSrc: 'resources/grayLaptop.png',
    imgAlt: 'Microverse Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'JavaScript',
    tech3: 'C/C++',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'YouTube',
  description: 'You Tube',
  featuredImage: {
    imgSrc: 'resources/pinkScreen.png',
    imgAlt: 'YouTube Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'Go',
    tech3: 'C/C++',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
}
];

function loadProjects() {
  document.getElementById('ProjectName1').innerHTML = projects[0].name;
  document.getElementById('1tech1').innerHTML = projects[0].technologies.tech1;
  document.getElementById('1tech2').innerHTML = projects[0].technologies.tech2;
  document.getElementById('1tech3').innerHTML = projects[0].technologies.tech3;
  

  document.getElementById('ProjectName2').innerHTML = projects[1].name;
  document.getElementById('2tech1').innerHTML = projects[1].technologies.tech1;
  document.getElementById('2tech2').innerHTML = projects[1].technologies.tech2;
  document.getElementById('2tech3').innerHTML = projects[1].technologies.tech3;
}

function openModal() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

  document.getElementById('mobileProject').innerHTML = 'Wikipedia';
  document.getElementById('desktopProject').innerHTML = 'Wikipedia';

  document.getElementById('bigPicMobile').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicMobile1').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicMobile2').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicMobile3').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicMobile4').src = 'resources/Rectangle 21.png';

  document.getElementById('bigPicDesktop').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicDesktop1').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicDesktop2').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicDesktop3').src = 'resources/Rectangle 21.png';
  document.getElementById('smallPicDesktop4').src = 'resources/Rectangle 21.png';

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}

function openModal2() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

  document.getElementById('mobileProject').innerHTML = 'Twitter';
  document.getElementById('desktopProject').innerHTML = 'Twitter';

  document.getElementById('bigPicMobile').src = 'resources/macbook.png';
  document.getElementById('smallPicMobile1').src = 'resources/macbook.png';
  document.getElementById('smallPicMobile2').src = 'resources/macbook.png';
  document.getElementById('smallPicMobile3').src = 'resources/macbook.png';
  document.getElementById('smallPicMobile4').src = 'resources/macbook.png';

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}

function openModal3() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

  document.getElementById('mobileProject').innerHTML = 'Instagram';
  document.getElementById('desktopProject').innerHTML = 'Instagram';

  document.getElementById('bigPicMobile').src = 'resources/ABlaptop.png';
  document.getElementById('smallPicMobile1').src = 'resources/ABlaptop.png';
  document.getElementById('smallPicMobile2').src = 'resources/ABlaptop.png';
  document.getElementById('smallPicMobile3').src = 'resources/ABlaptop.png';
  document.getElementById('smallPicMobile4').src = 'resources/ABlaptop.png';

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}

function openModal4() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

  document.getElementById('mobileProject').innerHTML = 'Uber';
  document.getElementById('desktopProject').innerHTML = 'Uber';

  document.getElementById('bigPicMobile').src = 'resources/yellowLaptop.png';
  document.getElementById('smallPicMobile1').src = 'resources/yellowLaptop.png';
  document.getElementById('smallPicMobile2').src = 'resources/yellowLaptop.png';
  document.getElementById('smallPicMobile3').src = 'resources/yellowLaptop.png';
  document.getElementById('smallPicMobile4').src = 'resources/yellowLaptop.png';

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}

function openModal5() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

  document.getElementById('mobileProject').innerHTML = 'Microverse';
  document.getElementById('desktopProject').innerHTML = 'Microverse';

  document.getElementById('bigPicMobile').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicMobile1').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicMobile2').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicMobile3').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicMobile4').src = 'resources/grayLaptop.png';

  document.getElementById('bigPicDesktop').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicDesktop1').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicDesktop2').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicDesktop3').src = 'resources/grayLaptop.png';
  document.getElementById('smallPicDesktop4').src = 'resources/grayLaptop.png';

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}

function openModal6() {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');
  document.getElementById('mobileProject').innerHTML = 'YouTube';
  document.getElementById('desktopProject').innerHTML = 'YouTube';
  document.getElementById('bigPicMobile').src = 'resources/pinkScreen.png';
  document.getElementById('smallPicMobile1').src = 'resources/pinkScreen.png';
  document.getElementById('smallPicMobile2').src = 'resources/pinkScreen.png';
  document.getElementById('smallPicMobile3').src = 'resources/pinkScreen.png';
  document.getElementById('smallPicMobile4').src = 'resources/pinkScreen.png';
  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
  } else {
    deskModal.classList.toggle('dispNone');
  }
}
function closeDesktopModal() {
  const deskModal = document.getElementById('modalDesktopID');
  deskModal.classList.toggle('dispNone');
}
function closeMobileModal() {
  const mobileModal = document.getElementById('modalMobileID');
  mobileModal.classList.toggle('dispNone');
}
function seeLive() {
  window.open('https://fdezcaminero.github.io/figmaPortfolio2023/');
}
function seeSource() {
  window.open('https://github.com/fdezcaminero/figmaPortfolio2023');
}

coolMenu();
loadProjects();
openModal();
openModal2();
openModal3();
openModal4();
openModal5();
openModal6();
closeDesktopModal();
closeMobileModal();
seeLive();
seeSource();
