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
    imgSrc: 'resources/Rectangle 21.svg',
    imgAlt: 'Wikipedia Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'Pytadsfasdfhon',
    tech3: 'JavaScript',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
{
  name: 'Twitter',
  description: 'Life in 140 characters',
  featuredImage: {
    imgSrc: 'resources/macbook.svg',
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
    imgSrc: 'resources/ABlaptop.svg',
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
    imgSrc: 'resources/yellowLaptop.svg',
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
    imgSrc: 'resources/grayLaptop.svg',
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
    imgSrc: 'resources/pinkScreen.svg',
    imgAlt: 'YouTube Logo',
  },
  technologies: {
    tech1: 'HTML/CSS',
    tech2: 'Go',
    tech3: 'C/C++',
  },
  liveVersion: 'https://fdezcaminero.github.io/figmaPortfolio2023/',
  linkToSource: 'https://github.com/fdezcaminero/figmaPortfolio2023',
},
];

function loadProjects() {
  let num = projects.length;
  
  for(let i = 1; i <= num; i++) {
    document.getElementById('ProjectName' + i).innerHTML = projects[i - 1].name;
    document.getElementById(i +'tech1').innerHTML = projects[i - 1].technologies.tech1;
    document.getElementById(i + 'tech2').innerHTML = projects[i - 1].technologies.tech2;
    document.getElementById(i + 'tech3').innerHTML = projects[i - 1].technologies.tech3;
    document.getElementById('projectImage' + i).src = projects[i - 1].featuredImage.imgSrc;
    document.getElementById('projectImage' + i).alt = projects[i - 1].featuredImage.imgAlt;
  }
}

function openModal(projectNumber) {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');
  const filterBlurScreen = document.getElementById('filterBlur');

  document.getElementById('mobileProject').innerHTML = projects[projectNumber].name;
  document.getElementById('desktopProject').innerHTML = projects[projectNumber].name;

  document.getElementById('bigPicMobile').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicMobile1').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicMobile2').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicMobile3').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicMobile4').src = projects[projectNumber].featuredImage.imgSrc;

  document.getElementById('bigPicDesktop').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicDesktop1').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicDesktop2').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicDesktop3').src = projects[projectNumber].featuredImage.imgSrc;
  document.getElementById('smallPicDesktop4').src = projects[projectNumber].featuredImage.imgSrc;

  if (window.screen.width < 768) {
    mobileModal.classList.toggle('dispNone');
    filterBlurScreen.classList.toggle('filterBlur');
  } else {
    deskModal.classList.toggle('dispNone');
    filterBlurScreen.classList.toggle('filterBlur');
  }
}

function closeDesktopModal() {
  const deskModal = document.getElementById('modalDesktopID');
  const filterBlurScreen = document.getElementById('filterBlur');

  deskModal.classList.toggle('dispNone');
  filterBlurScreen.classList.toggle('filterBlur');
}

function closeMobileModal() {
  const mobileModal = document.getElementById('modalMobileID');
  const filterBlurScreen = document.getElementById('filterBlur');

  mobileModal.classList.toggle('dispNone');
  filterBlurScreen.classList.toggle('filterBlur');
}

function seeLive() {
  window.open('https://fdezcaminero.github.io/figmaPortfolio2023/');
}

function seeSource() {
  window.open('https://github.com/fdezcaminero/figmaPortfolio2023');
}

window.addEventListener('load', loadProjects);
document.getElementById('projectButton1').addEventListener('click', () => openModal(0));
document.getElementById('projectButton2').addEventListener('click', () => openModal(1));
document.getElementById('projectButton3').addEventListener('click', () => openModal(2));
document.getElementById('projectButton4').addEventListener('click', () => openModal(3));
document.getElementById('projectButton5').addEventListener('click', () => openModal(4));
document.getElementById('projectButton6').addEventListener('click', () => openModal(5));
document.getElementById('coolMenu').addEventListener('click', coolMenu);
document.getElementById('coolMenu2').addEventListener('click', coolMenu);
document.getElementById('coolMenu3').addEventListener('click', coolMenu);
document.getElementById('coolMenu4').addEventListener('click', coolMenu);
document.getElementById('coolMenu5').addEventListener('click', coolMenu);
document.getElementById('coolMenu6').addEventListener('click', coolMenu);
document.getElementById('closeMobileModal').addEventListener('click', closeMobileModal);
document.getElementById('closeDesktopModal').addEventListener('click', closeDesktopModal);
document.getElementById('seeLive1').addEventListener('click', seeLive);
document.getElementById('seeLive2').addEventListener('click', seeLive);
document.getElementById('seeSource1').addEventListener('click', seeSource);
document.getElementById('seeSource2').addEventListener('click', seeSource);
