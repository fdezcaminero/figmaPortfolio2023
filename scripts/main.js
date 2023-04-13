function coolMenu() {
  const mobileDisplay = document.getElementById('mobile1');
  const mobileMenu = document.getElementById('mobile2');

  mobileDisplay.classList.toggle('dispNone');
  mobileMenu.classList.toggle('dispNone');
}

function loadProjects() {
  const projects = {
    name: 'Project name goes here',
    description: 'Project description',
    featuredImage: {
      imgSrc: 'Project image',
      imgAlt: 'Project image',
    },
    technologies: {
      tech1: 'First tech',
      tech2: 'Second tech',
      tech3: 'Third tech',
    },
    liveVersion: 'Link to live version',
    linkToSource: 'Link to source',
  };

  const Wikipedia = Object.create(projects);

  Wikipedia.name = 'Wikipedia';
  Wikipedia.description = 'The Free Encyclopedia';
  Wikipedia.featuredImage.imgSrc = 'resources/Wikipedia.png';
  Wikipedia.featuredImage.imgAlt = 'Wikipedia Logo';
  Wikipedia.technologies.tech1 = 'HTML/CSS';
  Wikipedia.technologies.tech2 = 'Python';
  Wikipedia.technologies.tech3 = 'JavaScript';
  Wikipedia.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  Wikipedia.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName1').innerHTML = Wikipedia.name;
  document.getElementById('1tech1').innerHTML = Wikipedia.technologies.tech1;
  document.getElementById('1tech2').innerHTML = Wikipedia.technologies.tech2;
  document.getElementById('1tech3').innerHTML = Wikipedia.technologies.tech3;

  const Twitter = Object.create(projects);

  Twitter.name = 'Twitter';
  Twitter.description = 'Life in 140 characters';
  Twitter.featuredImage.imgSrc = 'resources/Twitter.png';
  Twitter.featuredImage.imgAlt = 'Twitter Logo';
  Twitter.technologies.tech1 = 'HTML/CSS';
  Twitter.technologies.tech2 = 'Python';
  Twitter.technologies.tech3 = 'BootStrap';
  Twitter.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  Twitter.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName2').innerHTML = Twitter.name;
  document.getElementById('2tech1').innerHTML = Twitter.technologies.tech1;
  document.getElementById('2tech2').innerHTML = Twitter.technologies.tech2;
  document.getElementById('2tech3').innerHTML = Twitter.technologies.tech3;

  const Instagram = Object.create(projects);

  Instagram.name = 'Instagram';
  Instagram.description = 'Light, more light';
  Instagram.featuredImage.imgSrc = 'resources/Instagram.png';
  Instagram.featuredImage.imgAlt = 'Instagram Logo';
  Instagram.technologies.tech1 = 'HTML/CSS';
  Instagram.technologies.tech2 = 'JavaScript';
  Instagram.technologies.tech3 = 'BootStrap';
  Instagram.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  Instagram.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName3').innerHTML = Instagram.name;
  document.getElementById('3tech1').innerHTML = Instagram.technologies.tech1;
  document.getElementById('3tech2').innerHTML = Instagram.technologies.tech2;
  document.getElementById('3tech3').innerHTML = Instagram.technologies.tech3;

  const Uber = Object.create(projects);

  Uber.name = 'Uber';
  Uber.description = 'Well upon our way';
  Uber.featuredImage.imgSrc = 'resources/Uber.png';
  Uber.featuredImage.imgAlt = 'Uber Logo';
  Uber.technologies.tech1 = 'HTML/CSS';
  Uber.technologies.tech2 = 'JavaScript';
  Uber.technologies.tech3 = 'Perl';
  Uber.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  Uber.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName4').innerHTML = Uber.name;
  document.getElementById('4tech1').innerHTML = Uber.technologies.tech1;
  document.getElementById('4tech2').innerHTML = Uber.technologies.tech2;
  document.getElementById('4tech3').innerHTML = Uber.technologies.tech3;

  const Microverse = Object.create(projects);

  Microverse.name = 'Microverse';
  Microverse.description = 'Learn to code';
  Microverse.featuredImage.imgSrc = 'resources/Microverse.png';
  Microverse.featuredImage.imgAlt = 'Microverse Logo';
  Microverse.technologies.tech1 = 'HTML/CSS';
  Microverse.technologies.tech2 = 'JavaScript';
  Microverse.technologies.tech3 = 'C/C++';
  Microverse.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  Microverse.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName5').innerHTML = Microverse.name;
  document.getElementById('5tech1').innerHTML = Microverse.technologies.tech1;
  document.getElementById('5tech2').innerHTML = Microverse.technologies.tech2;
  document.getElementById('5tech3').innerHTML = Microverse.technologies.tech3;

  const YouTube = Object.create(projects);

  YouTube.name = 'YouTube';
  YouTube.description = 'You Tube';
  YouTube.featuredImage.imgSrc = 'resources/Youtube.png';
  YouTube.featuredImage.imgAlt = 'YouTube Logo';
  YouTube.technologies.tech1 = 'HTML/CSS';
  YouTube.technologies.tech2 = 'Go';
  YouTube.technologies.tech3 = 'C/C++';
  YouTube.liveVersion = 'https://fdezcaminero.github.io/figmaPortfolio2023/';
  YouTube.linkToSource = 'https://github.com/fdezcaminero/figmaPortfolio2023';

  document.getElementById('ProjectName6').innerHTML = YouTube.name;
  document.getElementById('6tech1').innerHTML = YouTube.technologies.tech1;
  document.getElementById('6tech2').innerHTML = YouTube.technologies.tech2;
  document.getElementById('6tech3').innerHTML = YouTube.technologies.tech3;
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
