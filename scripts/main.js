function coolMenu() {
  const mobileDisplay = document.getElementById('mobile1');
  const mobileMenu = document.getElementById('mobile2');

  mobileDisplay.classList.toggle('dispNone');
  mobileMenu.classList.toggle('dispNone');
}

coolMenu();

let projects = {
  name: "Project name goes here",
  description: "Project description",
  featuredImage: "Project image",
  technologies: {
    tech1: "First tech",
    tech2: "Second tech",
    tech3: "Third tech"
  },
  liveVersion: "Link to live version",
  linkToSource: "Link to source"
};

const Wikipedia = Object.create(projects);

Wikipedia.name = "Wikipedia";
Wikipedia.description = "The Free Encyclopedia";
Wikipedia.featuredImage = "resources/Wikipedia.png";
Wikipedia.technologies.tech1 = "HTML/CSS";
Wikipedia.technologies.tech2 = "Python";
Wikipedia.technologies.tech3 = "JavaScript";
Wikipedia.liveVersion = "";
Wikipedia.linkToSource = "";
