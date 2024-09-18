/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh Maurya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Maurya Portfolio",
    type: "website",
    url: "http://ashutoshMaurya.com/",
  },
};

//Home Page
const greeting = {
  title: "Ashutosh Maurya",
  logo_name: "AshutoshMaurya",
  nickname: "",
  subTitle:
    "I am a passionate frontend developer, who always thrives to work on end to end projects which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1SihIx9BVtYXpwCJaDzvDa4LvavYmCLGn/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Ashutosh-Maurya-87",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ashutosh-Maurya-87",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh-maurya-react/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ashumaurya486@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Frontend Developer",
    //   fileName: "frontendDeveloperImg",
    //   skills: [
    //     "⚡ Developing highly scalable website pages for various design and websites",
    //     "⚡ Experience of working with Frontend Developer in React js",
    //     // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Javascript",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "React Js",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "Redux Toolkit",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Html",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         // backgroundColor: "transparent",
    //         color: "#E34F26",
    //       },
    //       // imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Frontend Development",
      fileName: "frontendImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing web applications using React Js, Javascript, Html5 and Css3.",
        "⚡ Creating application.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Material Ui",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "RreactStrap",
          fontAwesomeClassname: "simple-icons:reactstrap",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    
    // {
    //   title: "UI/UX Developer",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     // {
    //     //   skillName: "Inkscape",
    //     //   fontAwesomeClassname: "simple-icons:inkscape",
    //     //   style: {
    //     //     color: "#000000",
    //     //   },
    //     // },
    //   ],
    // },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Dr. Ram Manohar Lohia Awadh University, Ayodhya Uttar Pradesh",
      subtitle: "Bachelor Of Computer Application (BCA)",
      logo_path: "iiitk_logo.png",
      alt_name: "logo_graduation",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA etc.",
        "⚡ Apart from this, I have done courses on Core Java, Frontend Development, and learning Python Programming",
        "⚡ I was selected for the First Prize in BCA in my college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://rmlau.ac.in",
    },
    {
      title: "M.S.S Naaz Inter College",
      subtitle: "Non-Medical",
      logo_path: "iu_logo.png",
      alt_name: "naaz inter college image",
      duration: "2015 - 2017",
      descriptions: [
        // "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        // "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        // "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as Frontend and Junior web Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Frontend AI Developer. I love organising events and that is why I am also involved with many opensource communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer",
          company: "Contact Point 360",
          company_url: "https://contactpoint360.com/",
          logo_path: "cp-logo.png",
          duration: "November 202 - Present",
          location: "Gurugram, Haryana, India",
          description:
            "Improving functionality of the pages. Experience working on structure model of companyies website.",
          color: "#000000",
        },
        {
          title: "Frontend Developer",
          company: "DDeveloper'z",
          company_url: "https://www.ddeveloperz.com/",
          logo_path: "ddz-logo.png",
          duration: "January 2022 - September 2022",
          location: "Ludhiana, Punjab",
          description:
            "Here I worked as a frontend developer. I worked on many projects in this company.",
          color: "#0879bf",
        },
        {
          title: "Junior Web Developer",
          company: "Poly9",
          company_url: "https://www.polynine.com/",
          logo_path: "poly9-svg.svg",
          duration: "November 2021 - January 202",
          location: "Ahmedabad, Gujrat",
          description:
            "I worked here as a junior web developer.",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Internship",
          company: "Mettle Crow Solutions",
          company_url: "https://mettlecrowsolutions.co.in/",
          logo_path: "mettle-crow-logo.png",
          duration: "May 2021 - Oct 2021",
          location: "Mohali, Punjab",
          description:
            "Building new features with backend and frontend teams.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  // data: [
  //   {
  //     id: "neuro-symbolic-sudoku-solver",
  //     name: "Neuro-Symbolic Sudoku Solver",
  //     createdAt: "2023-07-02T00:00:00Z",
  //     description: "Paper published in KDD KiML 2023",
  //     url: "https://arxiv.org/abs/2307.00653",
  //   },
  //   {
  //     id: "mdp-diffusion",
  //     name: "MDP-Diffusion",
  //     createdAt: "2023-09-19T00:00:00Z",
  //     description: "Blog published in Paperspace",
  //     url: "https://blog.paperspace.com/mdp-diffusion/",
  //   },
  //   {
  //     id: "consistency-models",
  //     name: "Consistency Models",
  //     createdAt: "2023-10-12T00:00:00Z",
  //     description: "Blog published in Paperspace",
  //     url: "https://blog.paperspace.com/consistency-models/",
  //   },
  // ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on some social media. You can message me, I will reply within 1 days. I can help you with JS, React, Html, Css and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "122, Arthar Sanjayganj Bazar Ayodhya Uttar Pradesh",
    locality: "Ayodhya",
    country: "India",
    region: "Sohawal",
    postalCode: "224188",
    streetAddress: "01",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91-6387527257",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
