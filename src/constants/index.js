import project1 from "../assets/projects/project9_ecommerce.png";
import project2 from "../assets/projects/project6_todo.png";
import project3 from "../assets/projects/project7_weather.png";
import project4 from "../assets/projects/project8_calculator.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic student pursuing a B.Tech degree at United Institute of Technology, Naini, Prayagraj. My journey in education began at Chinmaya Vidyalaya, NTPC Unchahar, Raebareli, U.P., where I built a strong academic foundation.

With a keen interest in problem-solving, I have solved numerous challenges on platforms like LeetCode and GeeksforGeeks, continually honing my skills.

In addition, I have been immersed in the world of web development for over two years, gaining hands-on experience in building responsive, user-friendly applications. My expertise covers both front-end and back-end development, allowing me to craft seamless web experiences from concept to deployment.
`;


export const EXPERIENCES = [
  {
    year: "2022 ",
    role: "Python Training ",
    company: "In House .",
    description: `I have completed a comprehensive Python training program that equipped me with a solid foundation in programming concepts. I gained hands-on experience with basic Python syntax, data types, control structures, and functions. Additionally, I developed a strong understanding of Object-Oriented Programming (OOP) principles, including classes, objects, inheritance, and polymorphism. This training has enabled me to write modular and reusable code, enhancing my problem-solving skills and preparing me for more advanced programming challenges.`,
    technologies: ["Python", "Foundation", "Oops"],
  },
  {
    year: "2023",
    role: "Competetive Coding ",
    company: "In House ",
    description: `I have completed a competitive coding training program that honed my problem-solving skills and algorithmic thinking. Through rigorous practice, I tackled a variety of challenges involving data structures, algorithms, and optimization techniques. This experience not only improved my coding proficiency but also enhanced my ability to think critically under pressure and devise efficient solutions to complex problems. I participated in coding contests, which further solidified my understanding of competitive programming principles and strategies.`,
    technologies: ["c++"],
  },
  {
    year: "2024",
    role: "Full Stack Developer ",
    company: "Uptricks Services ",
    description: `I have completed an internship focused on full-stack development using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. During this internship, I gained hands-on experience with modern web technologies such as Next.js for server-side rendering and Tailwind CSS for responsive design. Additionally, I explored motion frameworks to enhance user interface interactions and animations.
Throughout the internship, I worked on various projects that involved building dynamic web applications, integrating RESTful APIs, and managing databases with both MongoDB and PostgreSQL. This experience has significantly improved my coding skills and deepened my understanding of software development practices in a collaborative environment.`,
    technologies: ["Node", "MongoDb", "Three.js", "Express","React","PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express.js"],
    githubLink:"https://github.com/Anubhav-shukla1729/Ecommerce-webApp"
  },
  {
    title: "Todo App",
    image: project2,
    description:
      "fully functional Todo app featuring a React frontend for an intuitive user interface and an Express backend with MongoDB for efficient data management. This application allows users to create, update, and delete tasks seamlessly",
    technologies: ["HTML", "CSS", "React", "Express","MongoDb"],
    githubLink: "https://github.com/Anubhav-shukla1729/todo-app"
  },
  {
    title: "weather App",
    image: project3,
    description:
      "Weather App using React that fetches real-time weather data through an API. The app features an intuitive interface where users can search for locations and view current weather conditions, forecasts, and additional details, ",
    technologies: ["HTML", "CSS", "React", "Axios","Tailwind CSS"],
    githubLink:"https://github.com/Anubhav-shukla1729/weather-app"
  },
  {
    title: "Simple Calculator",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    githubLink:"https://github.com/Anubhav-shukla1729/simple-scientific-calci"
  },
];

export const CONTACT = {
  address: "Prayagraj , Naini U.P India",
  phoneNo: "+91 8887507732",
  email: "anubhavshuklaoffi@gmail.com",
};
