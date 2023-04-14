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
  document.getElementById('projectImage1').src = projects[0].featuredImage.imgSrc;
  document.getElementById('projectImage1').alt = projects[0].featuredImage.imgAlt;

  document.getElementById('ProjectName2').innerHTML = projects[1].name;
  document.getElementById('2tech1').innerHTML = projects[1].technologies.tech1;
  document.getElementById('2tech2').innerHTML = projects[1].technologies.tech2;
  document.getElementById('2tech3').innerHTML = projects[1].technologies.tech3;
  document.getElementById('projectImage2').src = projects[1].featuredImage.imgSrc;
  document.getElementById('projectImage2').alt = projects[1].featuredImage.imgAlt;

  document.getElementById('ProjectName3').innerHTML = projects[2].name;
  document.getElementById('3tech1').innerHTML = projects[2].technologies.tech1;
  document.getElementById('3tech2').innerHTML = projects[2].technologies.tech2;
  document.getElementById('3tech3').innerHTML = projects[2].technologies.tech3;
  document.getElementById('projectImage3').src = projects[2].featuredImage.imgSrc;
  document.getElementById('projectImage3').alt = projects[2].featuredImage.imgAlt;

  document.getElementById('ProjectName4').innerHTML = projects[3].name;
  document.getElementById('4tech1').innerHTML = projects[3].technologies.tech1;
  document.getElementById('4tech2').innerHTML = projects[3].technologies.tech2;
  document.getElementById('4tech3').innerHTML = projects[3].technologies.tech3;
  document.getElementById('projectImage4').src = projects[3].featuredImage.imgSrc;
  document.getElementById('projectImage4').alt = projects[3].featuredImage.imgAlt;

  document.getElementById('ProjectName5').innerHTML = projects[4].name;
  document.getElementById('5tech1').innerHTML = projects[4].technologies.tech1;
  document.getElementById('5tech2').innerHTML = projects[4].technologies.tech2;
  document.getElementById('5tech3').innerHTML = projects[4].technologies.tech3;
  document.getElementById('projectImage5').src = projects[4].featuredImage.imgSrc;
  document.getElementById('projectImage5').alt = projects[4].featuredImage.imgAlt;

  document.getElementById('ProjectName6').innerHTML = projects[5].name;
  document.getElementById('6tech1').innerHTML = projects[5].technologies.tech1;
  document.getElementById('6tech2').innerHTML = projects[5].technologies.tech2;
  document.getElementById('6tech3').innerHTML = projects[5].technologies.tech3;
  document.getElementById('projectImage6').src = projects[5].featuredImage.imgSrc;
  document.getElementById('projectImage6').alt = projects[5].featuredImage.imgAlt;
}

function openModal(projectNumber) {
  const deskModal = document.getElementById('modalDesktopID');
  const mobileModal = document.getElementById('modalMobileID');

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
