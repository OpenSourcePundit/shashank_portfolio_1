import { FaHtml5, FaNpm, FaCss3, FaReact, FaNode, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";


const greeting = {
    username: "Shashank Kumar",
    title: "Hi all, I'm Shashank",
    subTitle:  "A web developer, learning and applying the latest technologies and best practices in web development, such as ReactJS, NodeJS, Redux.js, and Back-End Web Development. Aim to become a leader in the tech industry who can create innovative and impactful solutions for society.",
    resumeLink:"https://drive.google.com/file/d/1N-oKhVh2nTsdyYahseUfvLCQEQkzKoHh/view?usp=sharing"
};

const socialMediaLinks = {
    github: "https://github.com/OpenSourcePundit",
    linkedin: "https://www.linkedin.com/in/shashank-kumar00098/",
    twitter: "https://twitter.com/shashank00098",
    gmail:"shashank00098@gmail.com",
    instagram:"https://www.instagram.com/shashank_00098/",
    facebook: "https://www.facebook.com/shnxx/",
    display:true,
}

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [],
  
    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
    softwareSkills: [
      {
        label: "html-5",
        icon: FaHtml5
      },
      { 
        label: "css3",
        icon: FaCss3
      },
      {
        label: "JavaScript",
        icon:SiJavascript
      },
      {
        label: "reactjs",
        icon: FaReact,
      },
      {
        label: "Node",
        icon:FaNode
      },
      {
        label: "Npm",
        icon:FaNpm
      },
      {
        label: "Mongo-database",
        icon:FaDatabase
      },
      {
        label: "Github",
        icon:FaGithub
      },
     
      
    ],
    display: true // Set false to hide this section, defaults to true
  };


  const eductionInfo = {
    display: true,
    college:[
      
      {
        collegeName:"ABES Engineering College, Ghaziabad",
        logo: "https://i.ibb.co/tHqw3wR/abes.jpg",
        subTitle:"Bachelor of Technology in Electrical Engineering",
        duration: "July-2013 - July-2017"
      }
    ]
  };

  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experiences: [
      {
        role: "Web Development Student",
        company: "neoG Camp",
        companylogo: "https://i.ibb.co/T0dk7nJ/neog.png",
        date: "Feb 2023 – Present",
        desc: "A part of web development (MERN stack) bootcamp",
        descBullets: [
          "Made major projects like e-commerce, social media using ReactJS.",
          "Learnt various technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJS, TypeScript and Redux."
        ]
      },
    ]
  }


 


  const myProjects = {
    title: "What i did",
    display: true, // Set false to hide this section, defaults to true
    projects: [
      {
        image: "https://i.ibb.co/QXVn8yp/osp-components.png",
        projectName: "OSP Components",
        projectDesc:
          "A small app containing different components with their documentation in React JS.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://osp-components.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/OpenSourcePundit/css_component_lib"
          }
        ]
      },
      {
        image: "https://i.ibb.co/bPJR5q7/social-circle.png",
        projectName: "Social-Circle",
        projectDesc:
          "A social media website where in, you can connect with your friends and family !",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://social-circle-osp.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/OpenSourcePundit/social-media"
          }
          //  you can add extra buttons here.
        ]
      },
      {
        image: " https://i.ibb.co/sH8v1Yq/bibliotec.png",
        projectName: "Bibliotec-Pun",
        projectDesc: "A e-commerce website for Books with great variety of Books in different genre!",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://bibliotec-pun.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/OpenSourcePundit/ecommerce-app"
          }
        ]
      },
      
    ]
  }


  const contactInfo = {
    title: "Contact Me ☎️",
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9411252469",
    email_address: "shashank00098@gmail.com"
  };


export {
    greeting,
    socialMediaLinks,
    skillsSection,
    eductionInfo,
    workExperiences,
    contactInfo,
    myProjects
}