const projectContainer = document.querySelector(".project-container");

const PROJECTS = [
  {
    name: "Snowflake UI",
    liveLink: "https://snowflakeui.netlify.app/",
    githubUrl: "https://github.com/znjs/snowflake-ui",
    date: "Mar 2022",
    imageUrl:
      "https://res.cloudinary.com/znjs/image/upload/v1667933004/Preview%20Shots/Screenshot_2022-11-09_at_12.11.29_AM_xvu8jj.png",
    description:
      "Snowflake is a highly customizable utility based component library so every developer can make a unique web page as unique as a Snowflake Snowflake UI is inspired by Veritasium",
  },
  {
    name: "SnowStore",
    liveLink: "https://snowstore-react.netlify.app/",
    githubUrl: "https://github.com/znjs/snowstore-react",
    date: "Mar 2022",
    imageUrl:
      "https://res.cloudinary.com/znjs/image/upload/v1667933005/Preview%20Shots/Screenshot_2022-11-09_at_12.12.57_AM_dbwfsq.png",
    description:
      "Snowstore is an E-commerce platform for all your winter and christmas need, you can find everything from clothing to christmas decoration and christmas trees.",
  },
  {
    name: "Snowflix",
    liveLink: "https://snowflix-react.netlify.app/",
    githubUrl: "https://github.com/znjs/snowflix",
    date: "Mar 2022",
    imageUrl:
      "https://res.cloudinary.com/znjs/image/upload/v1667933005/Preview%20Shots/Screenshot_2022-11-09_at_12.11.48_AM_ozninb.png",
    description: "Video Library made with christmas theme",
  },
  {
    name: "The Social",
    liveLink: "https://the-social.netlify.app/",
    githubUrl: "https://github.com/znjs/thesocial",
    date: "Mar 2022",
    imageUrl:
      "https://res.cloudinary.com/znjs/image/upload/v1667933005/Preview%20Shots/Screenshot_2022-11-09_at_12.13.02_AM_sek46k.png",
    description: "Social media App made to connect with friends and family",
  },
  {
    name: "Zeal Productivity",
    liveLink: "https://zealproductivity.netlify.app/",
    githubUrl: "https://github.com/znjs/zeal-productivity",
    date: "Mar 2022",
    imageUrl:
      "https://res.cloudinary.com/znjs/image/upload/v1667933005/Preview%20Shots/Screenshot_2022-11-09_at_12.12.24_AM_smcjyy.png",
    description:
      "Start your day with high productivity and a planned manner using zeal productivity extension. Plan ahead using Zeal extension.",
  },
];

PROJECTS.forEach((project) => addProjects(project));

function addProjects(project) {
  const section = document.createElement("section");
  const divContainer = document.createElement("div");
  divContainer.classList.add("container-center");
  const heading = document.createElement("h3");
  heading.innerText = project.name;
  const image = document.createElement("img");
  image.setAttribute("src", project.imageUrl);
  image.setAttribute("alt", project.preview);
  image.classList.add("res-img");
  const date = document.createElement("small");
  date.innerText = project.date;
  const disc = document.createElement("p");
  disc.innerText = project.description;
  const liveLink = document.createElement("a");
  liveLink.classList.add("link", "link-primary");
  liveLink.setAttribute("target", "_blank");
  liveLink.innerText = "Live Project";
  liveLink.setAttribute("href", project.liveLink);
  const codeLink = document.createElement("a");
  codeLink.classList.add("link", "link-secondary");
  codeLink.setAttribute("target", "_blank");
  codeLink.innerText = "Source code";
  codeLink.setAttribute("href", project.githubUrl);
  divContainer.appendChild(heading);
  divContainer.appendChild(image);
  divContainer.appendChild(disc);
  divContainer.appendChild(liveLink);
  divContainer.appendChild(codeLink);
  section.appendChild(divContainer);
  console.log(section);
  projectContainer.appendChild(section);
}
