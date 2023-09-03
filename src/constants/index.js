import {
  mbachaiwala,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  redux,
  mui,
  tailwind,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  kubernates,
  postgresql,
  jenkins,
  sgl,
  pruthvi3d,
  restapi
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
    title: "Front end Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "redux",
    icon: redux,
  },
  {
    name: "Mui",
    icon: mui,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Scanpoint Geomatics Limited",
    icon: sgl,
    iconBg: "#E6DEDD",
    date: "July 2021 - Present",
    points: [
      "I played a crucial role in the development and implementation of functional tools and features for a 3D platform. This platform was designed to handle and manipulate massive geospatial data, allowing users to create, process, view, and analyze such data with ease.",
      "One of my significant contributions was incorporating Geographic Information System (GIS) data and services into the platform. By leveraging Open Geospatial Consortium (OGC) services, I enabled geoprocessing capabilities, empowering users to perform spatial analysis and manipulation on the platform. This integration enhanced the platform's functionality and provided users with powerful tools to work with geospatial data effectively.",
      "Designed and developed a Restful API using Node.js, Fastify, and PostgreSQL, implementing SQL injection prevention measures to enhance security and improve application resilience. Optimized response time by 20ms through cluster module integration, resulting in improved performance, and successfully demonstrated the enhancements in a live demo.", 
      "Leveraged expertise in Geometric and spatial operations to optimize data visualization and facilitate precise spatial analysis for smart city initiatives."
    ],
  },
  
  {
    title: "Internship",
    company_name: "MBA Chai Wala",
    icon: mbachaiwala,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Oct 2020",
    points: [
      "During my tenure at MBA Chai Wala, I had the opportunity to engage in strategic collaborations with several event management companies. As part of my role, I actively communicated and built relationships with these companies, seeking opportunities for mutual collaboration and partnership.",
      "By establishing partnerships with event management companies, we aimed to enhance our brand credibility and expand our reach to a wider audience. Through these collaborations, we were able to offer our services and products to a larger customer base, thereby contributing to the overall growth and success of the company.",
      "Furthermore, my efforts in building partnerships and collaborations also contributed to enhancing the overall richness of experiences provided to our customers. By leveraging the expertise and resources of event management companies, we were able to create and deliver exceptional events that catered to the diverse interests and preferences of our target audience."
    ],
  }
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
    name: "Survey Solution",
    description:
      "I developed an interactive web application using that allowed multiple users to view and manage data on a map collected by a specific surveyor. The application enabled users to perform various tasks and access different forms of data visualizations, such as charts and grids, within a comprehensive dashboard.",
    tags: [
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: restapi,
    source_code_link: "https://intsrv.sgligis.com:8443/RestAPI/",
  },
  {
    name: "IGiS Pruthvi 3D",
    description:
      "IGiS Pruthvi 3D is a Software as a Service (SaaS) platform that empowers users to effectively perform geospatial operations on raster and vector data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: pruthvi3d,
    source_code_link: "https://developer.sgligis.com/sgl_3d/theme/index.html",
  }
];

export { services, technologies, experiences, testimonials, projects };
