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
  threejs,
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
    title: "Competitive Coder",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    title: "Web Developer",
    company_name: "SWC IIT Guwahati",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining backend systems for the college's app to ensure seamless functionality and performance.",
      "Collaborating with cross-functional teams, including designers, senior developers, and committee members, to build robust web solutions.",
      "Participating in team discussions, providing innovative solutions, and contributing to a collaborative development environment.",
      "Ensuring scalability, security, and optimization of web applications.",
    ],
  },
  {
    title: "Web-Operations Executive",
    company_name: "Cepstrum IIT Guwahati",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining web portals and applications for the institute using modern web technologies.",
      "    Overseeing the management and optimization of the institute's website to ensure its smooth operation and reliability.",
      "Conducting regular code reviews and providing valuable feedback to enhance code quality and maintain project standards.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Core Team Member Dev-Ops",
    company_name: "Techniche IIT Guwahati",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Developing and implementing the frontend for web applications from scratch using Three.js and other modern technologies.",
      "Optimizing code and assets to achieve high performance and smooth rendering of complex 3D graphics.",
      "Collaborating with cross-functional teams, including designers, coordinators, and developers, to deliver visually stunning and functional user interfaces.",
      "Ensuring responsive and interactive design elements for an engaging user experience across all devices.",
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
    name: "Job Portal",
    description:
      "A dynamic web-based platform connecting recruiters and applicants, enabling seamless job posting, application tracking, and communication. Recruiters can post vacancies, search for candidates, and manage hiring processes, while applicants can search for opportunities, submit applications, and track their progress—all in one efficient and user-friendly system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "purple-text-gradient",
      },
      {
        name: "clerk",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/laladwesh/Job-Portal",
  },
  {
    name: "Project Management App",
    description:
      "A comprehensive task and project management platform where both users and admins can create, manage, and prioritize sprints. Users can organize tasks within sprints, set deadlines, and monitor progress, adjust priorities, and ensure efficient team collaboration. With customizable boards and advanced reporting, the platform empowers teams to streamline their project execution and achieve their goals efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "neonDB",
        color: "yellow-text-gradient",
      },
      {
        name: "clerk",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/laladwesh/jira-app",
  },
  {
    name: "Realtime Pizza App",
    description:
      "A feature-rich food delivery platform with dedicated portals for admins and customers. Customers can browse menus, customize orders, and track their pizza deliveries in real time. Admins manage orders, update menus, and oversee delivery logistics, ensuring a seamless experience. The personalized recommendations, and notifications, making it the ultimate solution for pizza lovers and restaurant managers alike!",
    tags: [
      
      {
        name: "ejs",
        color: "yellow-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/laladwesh/realtime-pizza",
  },
];

export { services, technologies, experiences, testimonials, projects };
