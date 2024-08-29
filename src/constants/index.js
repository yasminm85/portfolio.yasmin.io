import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    intb,
    threejs,
    asdp,
    pbt,
    certificate,
    movie
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "UI/UX",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Management - Human Resources & HRIS",
      company_name: "PT ASDP Indonesia Ferry (Persero)",
      icon: asdp,
      iconBg: "#383E56",
      date: "February 2023 - July 2023",
      points: [
        "Approved absence corrections and completed approval of 30 records to 500 records in a day using HCIS website.",
        "Included in the HCMS application development meeting with the HRIS team and the ranks of managers and directors.",
        "Worked directly with the hris team to fill in the position code for the Human Capital Management System application database which can complete 40 thousand data using Excel.",
        "Compiled and validated employee data from all office branches from mentors using Excel to assist in database preparation.",
        "Checking the data position code number which can help the team to identify data calculation errors.",
        "Added new users from new employee data to the HCIS website and attendance website and can complete up to 104 data."
      ],
    },
    {
      title: "Web Developer",
      company_name: "PT Pan Brother Tbk",
      icon: pbt,
      iconBg: "#E6DEDD",
      date: "August 2023 - December 2023",
      points: [
        "Tested APIs using Postman to ensure functionality and developed login pages using APIs.",
        "Analyzed the old application flow and created flowcharts to facilitate the migration process",
        "Migrated the Warehouse Management System application from PHP to Laravel for 22 sub-systems",
        "Developed and migrated the supplier application from PHP to Laravel for the company's headquarters in Tangerang",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Certificate Information System",
      description:
        "Web-based platform that allows users to create event and manage event.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: certificate,
      source_code_link: "https://github.com/yasminm85/e-sertifikat.git",
    },
    {
      name: "Tuberculosis Information System",
      description:
        "Mobile based user interface about tuberculosis detected.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: intb,
      source_code_link: "https://www.figma.com/proto/2VkAIVAZMl3xLZF4BqMpYq/INTB?node-id=0-1&t=KeD0z6Pc5tE4Wo1Y-1",
    },
    {
      name: "Movie Information",
      description:
        "Mobile based movie information that provide information about movie, time release and rating.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://gitlab.com/yasminmutiara/moviee",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };