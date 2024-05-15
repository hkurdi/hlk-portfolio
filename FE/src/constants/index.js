import { baladiIcon, cccIcon, realtyGalaxyIcon, bullsConnectIcon } from "../assets/logos";

import {
  python,
  java,
  express,
  javascript,
  git,
  github,
  html,
  mongodb,
  aws,
  css,
  nextjs,
  nodejs,
  react,
  redux,
  devops,
  scrum,
  tailwindcss,
  typescript,
  vite,
  sqlserver,
  figma,
  docker,
  kubernetes,
  tensorflow,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sqlserver,
    name: "MS SQL Server",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud Services",
  },
  {
    imageUrl: scrum,
    name: "Scrum",
    type: "Methodology",
  },
  {
    imageUrl: devops,
    name: "DevOps",
    type: "Methodology",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "UI/UX Design",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },

  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  },

  {
    imageUrl: tensorflow,
    name: "TensorFlow",
    type: "Machine Learning",
  },
];

export const experiences = [
  {
    title: "Founder & Full Stack Developer",
    company_name: "Baladi",
    icon: baladiIcon,
    iconBg: "#9ca3af",
    date: "Present",
    points: [
      "Spearheaded the development of Baladi, a MERN stack powered platform connecting international students globally.",
      "Executed proficient end-to-end application development, emphasizing user-centric design and agile methodologies.",
      "Integrated third-party APIs, such as GeoIPify to extend platform functionality and deliver enhanced services to users.",
      "Implemented real-time features using technologies like WebSocket for instant messaging, enhancing user interaction.",
    ],
  },
  {
    title: "Project Assistant",
    company_name:
      "Center of Leadership & Civic Engagement (University of South Florida, Tampa Campus)",
    icon: bullsConnectIcon,
    iconBg: "#9ca3af",
    date: "February 2023 - August 2023",
    points: [
      "Sustained the back-end operations of BullsConnect ensuring all workflows pertaining to student organizations are valid and properly inputted to the student organization database.",
      "Evaluated and examined over 20 student organization registration, re-registration, change of officer, and bank letter forms on a daily basis.",
      "Communicated effectively with an average of 18 students daily through BullsConnect to guide them through the processes needed to validate their student organizations.",
    ],
  },
  {
    title: "Frontend Developer & UI/UX Designer",
    company_name: "Realty Galaxy Remote",
    icon: realtyGalaxyIcon,
    iconBg: "#9ca3af",
    date: "September 2021 – November 2022",
    points: [
      "Engineered dynamic and interactive user interfaces using React.js, elevating the engagement level of Realty Galaxy's web applications.",
      "Applied expertise in JS, CSS, and HTML to implement pixel-perfect designs and ensure a consistent and polished look across various platforms.",
      "Collaborated closely with cross-functional teams to refine user journeys, ensuring a seamless and efficient navigation experience for website visitors.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Consolidated Contractors Company",
    icon: cccIcon,
    iconBg: "#9ca3af",
    date: "July 2020 – July 2021",
    points: [
      "Identified and resolved 50+ software bugs during the internship period, utilizing JS & React.js (front-end) and Python (back-end) for efficient debugging and code improvements.",
      "Collaborated with the database team to optimize SQL queries in MS SQL Server Management Studio, contributing to improved data retrieval times and user experience.",
      "Utilized GitHub for version control, ensuring seamless collaboration with the development team and tracking code changes for future enhancements.",
    ],
  },
];

// export const projects = [
//   {
//     iconUrl: pricewise,
//     theme: "btn-back-red",
//     name: "Amazon Price Tracker",
//     description:
//       "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
//     link: "https://github.com/adrianhajdin/pricewise",
//   },
//   {
//     iconUrl: threads,
//     theme: "btn-back-green",
//     name: "Full Stack Threads Clone",
//     description:
//       'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//     link: "https://github.com/adrianhajdin/threads",
//   },
//   {
//     iconUrl: car,
//     theme: "btn-back-blue",
//     name: "Car Finding App",
//     description:
//       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
//     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
//   },
//   {
//     iconUrl: snapgram,
//     theme: "btn-back-pink",
//     name: "Full Stack Instagram Clone",
//     description:
//       "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
//     link: "https://github.com/adrianhajdin/social_media_app",
//   },
//   {
//     iconUrl: estate,
//     theme: "btn-back-black",
//     name: "Real-Estate Application",
//     description:
//       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
//     link: "https://github.com/adrianhajdin/projects_realestate",
//   },
//   {
//     iconUrl: summiz,
//     theme: "btn-back-yellow",
//     name: "AI Summarizer Application",
//     description:
//       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
//     link: "https://github.com/adrianhajdin/project_ai_summarizer",
//   },
// ];
