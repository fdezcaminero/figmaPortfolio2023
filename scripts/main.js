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
  const num = projects.length;
  for (let i = 1; i <= num; i += 1) {
    const BigName = `ProjectName${i}`;
    const BigTech1 = `${i}tech1`;
    const BigTech2 = `${i}tech2`;
    const BigTech3 = `${i}tech3`;
    const BigImg = `projectImage${i}`;

    document.getElementById(BigName).innerHTML = projects[i - 1].name;
    document.getElementById(BigTech1).innerHTML = projects[i - 1].technologies.tech1;
    document.getElementById(BigTech2).innerHTML = projects[i - 1].technologies.tech2;
    document.getElementById(BigTech3).innerHTML = projects[i - 1].technologies.tech3;
    document.getElementById(BigImg).src = projects[i - 1].featuredImage.imgSrc;
    document.getElementById(BigImg).alt = projects[i - 1].featuredImage.imgAlt;
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

function loadHTML() {
  const superHTML = `
  <section class="deskPosRelative">
  <h2 class="playfairFont projectsTag deskPosAbsolute">Projects</h2>
  
  <img class="deskStuff deskPosAbsolute positionDeco1" src="resources/image-geometry_2.svg"
    alt="Geometrical decoration">
  <img class="deskStuff deskPosAbsolute positionDeco2" src="resources/Group83.svg"
    alt="Squared decoration with many colors">
  <img class="deskStuff deskPosAbsolute positionDeco3" src="resources/image-geometry_5.svg"
    alt="Geometrical decoration, squares, and circles">
  <img class="deskStuff deskPosAbsolute positionDeco4" src="resources/redSquare.svg" alt="Red square">
  <img class="deskStuff deskPosAbsolute positionDeco5" src="resources/image-geometry_4.svg"
    alt="Yellow geometrical decoration">
  <img class="deskStuff deskPosAbsolute positionDeco6" src="resources/image_dots.png" alt="Dots">
  
  <div class="dgrid deskPosRelative">
    <section class="flex-column firstCardDesk">
      <img id="projectImage1" class="fullWidth bigImage" src="resources/Rectangle 21.svg" alt="Laptop, tangerine, and other objects">
      <div class="darkBlueBackground projectsPadding flex-column firstCardBlueBackground">
        <h2 class="projectnameStyle deskFont1" id="ProjectName1">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="1tech1">HTML/CSS</li>
          <li class="greenli" id="1tech2">Ruby on Rails</li>
          <li class="greenli" id="1tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton1" class="buttonDeco2 buttonDecoDesk">See this project
          <img src="resources/Union.png" alt="Cool (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Cool (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  
    <section class="flex-column">
      <img class="fullWidth macBookpic" src="resources/macbook.svg" alt="A macbook" id="projectImage2">
      <div class="darkBlueBackground projectsPadding flex-column deskBlueSquare">
        <h2 class="projectnameStyle" id="ProjectName2">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="2tech1">HTML/CSS</li>
          <li class="greenli" id="2tech2">Ruby on Rails</li>
          <li class="greenli" id="2tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton2" class="buttonDeco2">See this project
          <img src="resources/Union.png" alt="Cooler (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Cooler (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  
    <section class="flex-column">
      <img class="fullWidth ABLaptopPic" src="resources/ABlaptop.svg" alt="A laptop and a phone" id="projectImage3">
      <div class="darkBlueBackground projectsPadding flex-column deskBlueSquare">
        <h2 class="projectnameStyle" id="ProjectName3">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="3tech1">HTML/CSS</li>
          <li class="greenli" id="3tech2">Ruby on Rails</li>
          <li class="greenli" id="3tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton3" class="buttonDeco2">See this project
          <img src="resources/Union.png" alt="Even cooler (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Even cooler (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  
    <section class="flex-column">
      <img class="fullWidth yellowLaptop" src="resources/yellowLaptop.svg" alt="A laptop with a yellow design" id="projectImage4">
      <div class="darkBlueBackground projectsPadding flex-column deskBlueSquare">
        <h2 class="projectnameStyle" id="ProjectName4">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="4tech1">HTML/CSS</li>
          <li class="greenli" id="4tech2">Ruby on Rails</li>
          <li class="greenli" id="4tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton4" class="buttonDeco2">See this project
          <img src="resources/Union.png" alt="Yet even cooler (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Yet even cool (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  
    <section class="flex-column special-column grayLaptop">
      <img class="fullWidth" src="resources/grayLaptop.svg" alt="A laptop with a gray background" id="projectImage5">
      <div class="darkBlueBackground projectsPadding flex-column">
        <h2 class="projectnameStyle deskFont2" id="ProjectName5">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="5tech1">HTML/CSS</li>
          <li class="greenli" id="5tech2">Ruby on Rails</li>
          <li class="greenli" id="5tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton5" class="buttonDeco2 buttonDecoDesk">See this project
          <img src="resources/Union.png" alt="Another cool (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Another cool (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  
    <section class="flex-column">
      <img class="fullWidth pinkLaptop" src="resources/pinkScreen.svg" alt="A laptop with a pink screen" id="projectImage6">
      <div class="darkBlueBackground projectsPadding flex-column deskBlueSquare">
        <h2 class="projectnameStyle" id="ProjectName6">Project name goes here</h2>
  
        <ul class="greenul">
          <li class="greenli" id="6tech1">HTML/CSS</li>
          <li class="greenli" id="6tech2">Ruby on Rails</li>
          <li class="greenli" id="6tech3">JavaScript</li>
        </ul>
  
        <button id="projectButton6" class="buttonDeco2">See this project
          <img src="resources/Union.png" alt="Another cooler (White) Arrow Pointing Right">
          <img src="resources/Union2.svg" alt="Another cooler (Blue) Arrow Pointing Right">
        </button>
      </div>
    </section>
  </div>
  </section>
  `;

  document.querySelector('.myProjectsSection').innerHTML = superHTML;

  document.getElementById('projectButton1').addEventListener('click', () => openModal(0));
  document.getElementById('projectButton2').addEventListener('click', () => openModal(1));
  document.getElementById('projectButton3').addEventListener('click', () => openModal(2));
  document.getElementById('projectButton4').addEventListener('click', () => openModal(3));
  document.getElementById('projectButton5').addEventListener('click', () => openModal(4));
  document.getElementById('projectButton6').addEventListener('click', () => openModal(5));
  document.getElementById('closeMobileModal').addEventListener('click', closeMobileModal);
  document.getElementById('closeDesktopModal').addEventListener('click', closeDesktopModal);
  document.getElementById('seeLive1').addEventListener('click', seeLive);
  document.getElementById('seeLive2').addEventListener('click', seeLive);
  document.getElementById('seeSource1').addEventListener('click', seeSource);
  document.getElementById('seeSource2').addEventListener('click', seeSource);
}

window.addEventListener('load', loadHTML);
window.addEventListener('load', loadProjects);
const coolMenus = document.querySelectorAll('.coolMenu');
coolMenus.forEach((coolElement) => coolElement.addEventListener('click', coolMenu));

const formEmail = document.getElementById('email');
const emailMsg = document.getElementById('emailcase');
const submitButton = document.getElementById('coolformbutton');

formEmail.addEventListener('input', () => {
  if (formEmail.value !== formEmail.value.toLowerCase()) {
    emailMsg.classList.remove('dispNone');
    submitButton.disabled = true;
  } else {
    emailMsg.classList.add('dispNone');
    submitButton.disabled = false;
  }
});

const myCoolForm = document.getElementById('coolform');

myCoolForm.addEventListener('submit', (newForm) => {
  if (submitButton.disabled) {
    newForm.preventDefault();
  } else { return; }
});
