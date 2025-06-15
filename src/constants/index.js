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
  techboard,
  kriti,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  ecell,
  spirit,
  tesla,
  shopify,
  carrent,
  jobit,
  icacc2025,
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
    title: "Senior Web Developer",
    company_name: "SWC IIT Guwahati",
    icon: starbucks,
    iconBg: "#000",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining backend systems for the college's app to ensure seamless functionality and performance.",
      "Collaborating with cross-functional teams, including designers, senior developers, and committee members, to build robust web solutions.",
      "Participating in team discussions, providing innovative solutions, and contributing to a collaborative development environment.",
      "Ensuring scalability, security, and optimization of web applications.",
    ],
  },
  {
    title: "Web Operations Head",
    company_name: "Spirit IIT Guwahati",
    icon: spirit,
    iconBg: "#000",
    date: "April 2025 - Present",
    points: [
      "Overseeing development and deployment of Spirit IITG website, ensuring uptime and seamless user experience.",
      "Coordinating with design and other teams to implement real-time event schedules and interactive fixtures.",
      "Managing server infrastructure and CI/CD pipelines to guarantee efficient updates and secure data handling.",
      "Monitoring website analytics and performance metrics to optimize load times and enhance participant engagement.",
    ],
  },
    {
    title: "Web-Operations Head",
    company_name: "ICACC 2025",
    icon: spirit ,
    iconBg: "#fff",
    date: "September 2024 - May 2025",
   points: [
    "3rd International Conference on Agriculture Centric Computation (ICACC) 2025.",
    "Single-handedly managed end-to-end development and deployment of the conference’s website, building it from scratch and hosting it on the IITG server throughout the tenure.",
    "Conducted regular code reviews to enforce best practices and elevate code quality across the web team.",
    "Optimized website performance and implemented security measures to ensure reliability and data integrity.",
    ],
  },
  {
    title: "Web Operations Head",
    company_name: "Cepstrum IIT Guwahati",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
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
  // {
  //   title: "Co-Ordinator",
  //   company_name: "Coding Club IIT Guwahati",
  //   icon: meta,
  //   iconBg: "#383E56",
  //   date: "Dec 2024 - May 2025",
  //   points: [
  //     "Organizing and conducting coding workshops to educate and inspire students on various programming concepts and technologies.",
  //     "Collaborating with team members and mentors to plan events and create engaging learning experiences.",
  //     "Developing and maintaining resources for workshops, ensuring accessibility and practical applicability for participants.",
  //     "Providing mentorship and support to participants, fostering a collaborative and innovative environment.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Secured the 1st position in the Hacktoberfest at IIT Guwahati, outperforming all participants.",
    name: "Hacktoberfest",
    designation: "SWC",
    company: "IITG",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkuDTSquSz3iNxPdrMcZDtMN4eVnPH9Hj1g&s",
  },
    {
    testimonial:
      "Achieved third place in Inter-IIT Bootcamp Software-Dev PS, showcasing exceptional problem-solving skills.",
    name: "Inter-IIT Bootcamp",
    designation: "Technical Board",
    company: "IITG",
    image: techboard,
  },
   {
    testimonial:
      "Secured first place in Product Development, highlighting outstanding problem-solving abilities.",
    name: "Kriti",
    designation: "Technical Board",
    company: "IITG",
    image: kriti,
  },
  {
    testimonial:
      "Completed a comprehensive C++ course on Udemy, mastering OOP and advanced concepts.",
    name: "C++ Programming",
    designation: "Certification",
    company: "Udemy",
    image:
      "https://img.utdstc.com/icon/ff0/a5e/ff0a5ec61bc652cce9761f4e68089610662e76fcfea8c84fa813e10d3a9ed3d7:200",
  },
  {
    testimonial:
      "Certified under HackStack by SWC, IIT Guwahati, for completing React and Node.js modules.",
    name: "HackStack",
    designation: "SWC",
    company: "IITG",
    image: starbucks,
  },
  {
    testimonial:
      "Participated and Completed the EnCode 2025 - Code to Innovate Hackathon, Organized by E-Cell, IITG.",
    name: "EnCode 2025",
    designation: "E-Cell",
    company: "IITG",
    image: ecell,
  },

];

const projects = [
    {
    name: "ICACC 2025",
    description:
      "A dynamic web-based portal powering ICACC 2025, serving as the central hub for organizers, speakers, sponsors, and attendees. Organizers can manage calls for papers, registrations, session scheduling, and announcements, while speakers submit abstracts, update profiles, and upload presentation materials. Sponsors gain dedicated showcase pages, and attendees can explore the program, register for workshops, and network—all through a responsive, secure, and intuitive interface.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: icacc2025,
    source_code_link: "https://github.com/laladwesh/ICA25",
  },
  {
    name: "Job Portal",
    description:
      "A dynamic web-based platform connecting recruiters and applicants, enabling seamless job posting, application tracking, and communication. Recruiters can post vacancies, search for candidates, and manage hiring processes, while applicants can search for opportunities, submit applications, and track their progress—all in one efficient and user-friendly system.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "shadcnui",
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
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "shadcnui",
        color: "green-text-gradient",
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
