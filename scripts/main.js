function coolMenu() {
  const mobileDisplay = document.getElementById('mobile1');
  const mobileMenu = document.getElementById('mobile2');

  mobileDisplay.classList.toggle('dispNone');
  mobileMenu.classList.toggle('dispNone');
}

coolMenu();

function loadProjects() {
  const projects = {
    name: 'Project name goes here',
    description: "Project description",
    featuredImage: {
      imgSrc: "Project image",
      imgAlt: "Project image"
    },
    technologies: {
      tech1: "First tech",
      tech2: "Second tech",
      tech3: "Third tech"
    },
    liveVersion: "Link to live version",
    linkToSource: "Link to source"
  };
  
  const Wikipedia = Object.create(projects);
  
  Wikipedia.name = 'Wikipedia';
  Wikipedia.description = "The Free Encyclopedia";
  Wikipedia.featuredImage.imgSrc = "resources/Wikipedia.png";
  Wikipedia.featuredImage.imgAlt = "Wikipedia Logo";
  Wikipedia.technologies.tech1 = "HTML/CSS";
  Wikipedia.technologies.tech2 = "Python";
  Wikipedia.technologies.tech3 = "JavaScript";
  Wikipedia.liveVersion = "";
  Wikipedia.linkToSource = "";

  document.getElementById('ProjectName1').innerHTML = Wikipedia.name;
  document.getElementById('1tech1').innerHTML = Wikipedia.technologies.tech1;
  document.getElementById('1tech2').innerHTML = Wikipedia.technologies.tech2;
  document.getElementById('1tech3').innerHTML = Wikipedia.technologies.tech3;
  // document.getElementById('projectImage1').src = Wikipedia.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = Wikipedia.featuredImage.imgAlt;

  const Twitter = Object.create(projects);
  
  Twitter.name = 'Twitter';
  Twitter.description = "The Free Encyclopedia";
  Twitter.featuredImage.imgSrc = "resources/Wikipedia.png";
  Twitter.featuredImage.imgAlt = "Wikipedia Logo";
  Twitter.technologies.tech1 = "HTML/CSS";
  Twitter.technologies.tech2 = "Python";
  Twitter.technologies.tech3 = "BootStrap";
  Twitter.liveVersion = "";
  Twitter.linkToSource = "";

  document.getElementById('ProjectName2').innerHTML = Twitter.name;
  document.getElementById('2tech1').innerHTML = Twitter.technologies.tech1;
  document.getElementById('2tech2').innerHTML = Twitter.technologies.tech2;
  document.getElementById('2tech3').innerHTML = Twitter.technologies.tech3;
  // document.getElementById('projectImage1').src = Twitter.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = Twitter.featuredImage.imgAlt;

  const Instagram = Object.create(projects);
  
  Instagram.name = 'Instagram';
  Instagram.description = "The Free Encyclopedia";
  Instagram.featuredImage.imgSrc = "resources/Wikipedia.png";
  Instagram.featuredImage.imgAlt = "Wikipedia Logo";
  Instagram.technologies.tech1 = "HTML/CSS";
  Instagram.technologies.tech2 = "JavaScript";
  Instagram.technologies.tech3 = "BootStrap";
  Instagram.liveVersion = "";
  Instagram.linkToSource = "";

  document.getElementById('ProjectName3').innerHTML = Instagram.name;
  document.getElementById('3tech1').innerHTML = Instagram.technologies.tech1;
  document.getElementById('3tech2').innerHTML = Instagram.technologies.tech2;
  document.getElementById('3tech3').innerHTML = Instagram.technologies.tech3;
  // document.getElementById('projectImage1').src = Instagram.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = Instagram.featuredImage.imgAlt;

  const Uber = Object.create(projects);
  
  Uber.name = 'Uber';
  Uber.description = "The Free Encyclopedia";
  Uber.featuredImage.imgSrc = "resources/Wikipedia.png";
  Uber.featuredImage.imgAlt = "Wikipedia Logo";
  Uber.technologies.tech1 = "HTML/CSS";
  Uber.technologies.tech2 = "JavaScript";
  Uber.technologies.tech3 = "Perl";
  Uber.liveVersion = "";
  Uber.linkToSource = "";

  document.getElementById('ProjectName4').innerHTML = Uber.name;
  document.getElementById('4tech1').innerHTML = Uber.technologies.tech1;
  document.getElementById('4tech2').innerHTML = Uber.technologies.tech2;
  document.getElementById('4tech3').innerHTML = Uber.technologies.tech3;
  // document.getElementById('projectImage1').src = Uber.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = Uber.featuredImage.imgAlt;

  const Microverse = Object.create(projects);
  
  Microverse.name = 'Microverse';
  Microverse.description = "The Free Encyclopedia";
  Microverse.featuredImage.imgSrc = "resources/Wikipedia.png";
  Microverse.featuredImage.imgAlt = "Wikipedia Logo";
  Microverse.technologies.tech1 = "HTML/CSS";
  Microverse.technologies.tech2 = "JavaScript";
  Microverse.technologies.tech3 = "C/C++";
  Microverse.liveVersion = "";
  Microverse.linkToSource = "";

  document.getElementById('ProjectName5').innerHTML = Microverse.name;
  document.getElementById('5tech1').innerHTML = Microverse.technologies.tech1;
  document.getElementById('5tech2').innerHTML = Microverse.technologies.tech2;
  document.getElementById('5tech3').innerHTML = Microverse.technologies.tech3;
  // document.getElementById('projectImage1').src = Microverse.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = Microverse.featuredImage.imgAlt;

  const YouTube = Object.create(projects);
  
  YouTube.name = 'YouTube';
  YouTube.description = "The Free Encyclopedia";
  YouTube.featuredImage.imgSrc = "resources/Wikipedia.png";
  YouTube.featuredImage.imgAlt = "Wikipedia Logo";
  YouTube.technologies.tech1 = "HTML/CSS";
  YouTube.technologies.tech2 = "Go";
  YouTube.technologies.tech3 = "C/C++";
  YouTube.liveVersion = "";
  YouTube.linkToSource = "";

  document.getElementById('ProjectName6').innerHTML = YouTube.name;
  document.getElementById('6tech1').innerHTML = YouTube.technologies.tech1;
  document.getElementById('6tech2').innerHTML = YouTube.technologies.tech2;
  document.getElementById('6tech3').innerHTML = YouTube.technologies.tech3;
  // document.getElementById('projectImage1').src = YouTube.featuredImage.imgSrc;
  // document.getElementById('projectImage1').alt = YouTube.featuredImage.imgAlt;
};

loadProjects();

function changeId() {
  document.getElementById('ProjectName1').setAttribute("id", "ProjectName2");
  loadProjects();
}

// use id's and prev's and next's