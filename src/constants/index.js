import {
    got1,
    fiitjee,
    nvn,
    vit,
    royale,
    anime1,
    mobile,
    backend,
    creator,
    phishing,
    event,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    bluelock,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Salesforce Developer",
      icon: mobile,
    },
    {
      title: "AI & ML Developer",
      icon: backend,
    },
    {
      title: "Security Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "B.Tech Computer Science and Engineering",
      icon: vit,
      iconBg: "#FFFFFF",
      date: "September 2020 - Present",
      points: [
        "Vellore Institute of Technology, Chennai, Tamil Nadu",
        "CGPA: 8.7"
      ],
    },
    {
      title: "Intermediate",
      icon: fiitjee,
      iconBg: "#FFFFFF",
      date: "May 2018 - April 2020",
      points: [
        "FIITJEE, Vijayawada, Andhra Pradesh",
        "Percentage: 94%"
        ],
    },
    {
      title: "School",
      icon: nvn,
      iconBg: "#FFFFFF",
      date: "March 2018",
      points: [
        "Nalanda Vidya Niketan, Vijayawada, Andhra Pradesh",
        "Percentage: 79%"
        ],
    },
  ];
  
  
  const projects = [
    {
      name: "Phishing URL Detector",
      description:
        "Web plugin with a 2 - level architecture to identify and stop phishing attempts.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Manifest",
          color: "green-text-gradient",
        },
        {
          name: "Stemming",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tokenization",
          color: "green-text-gradient",
        },
      ],
      image: phishing,
      source_code_link: "https://github.com/krishnaprasad12/Phishing-URL-Detector",
    },
    {
      name: "Event Management System",
      description:
        "A comprehensive solution designed to simplify and streamline event administration within the Salesforce platform.",
      tags: [
        {
          name: "Salesforce Development",
          color: "blue-text-gradient",
        },
        {
          name: "Salesforce Adminstration",
          color: "green-text-gradient",
        },
      ],
      image: event,
      source_code_link: "https://github.com/krishnaprasad12/Event-Management-System",
    },
    {
      name: "Bluelock",
      description:
        "Bluelock is a 3-way door lock system that provides multiple methods for accessing a door.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino IDE",
          color: "green-text-gradient",
        },
        {
          name: "Kodular",
          color: "pink-text-gradient",
        },
      ],
      image: bluelock,
      source_code_link: "https://github.com/krishnaprasad12/Bluelock",
    },
    // {
    //   name: "Trends on Anime",
    //   description:
    //     "Anime trends aims to present anime-related information in a way that is both aesthetically pleasing and simple to comprehend.",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Matplotlib",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: anime1,
    //   source_code_link: "https://github.com/krishnaprasad12/Trends-on-Anime",
    // },
    // {
    //   name: "Network Analysis of-Game of Thrones Characters",
    //   description:
    //     "Social network analysis concepts to analyze the relationships and interactions among characters in the 'A Song of Ice and Fire' book series.",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Matplotlib",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "NetworkX",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: got1,
    //   source_code_link: "https://github.com/krishnaprasad12/Network-Analysis-of-Game-of-Thrones-Characters",
    // },
    // {
    //   name: "Food Royale",
    //   description:
    //     "Food Royale is an online e-commerce application designed to facilitate food delivery for restaurant vendors.",
    //   tags: [
    //     {
    //       name: "HTML",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "JavaScript",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "PHP",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: royale,
    //   source_code_link: "https://github.com/krishnaprasad12/Food-Royale",
    // },
  ];
  
  export { services, technologies, experiences, projects };