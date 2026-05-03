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
    // url: "http://ashutoshMaurya.com/",
    url: "https://ashutosh-maurya-87.github.io/ashutosh-portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Ashutosh Maurya",
  logo_name: "AshutoshMaurya",
  nickname: "",
  subTitle:
    "I am a passionate Frontend Developer, who always thrives to work on end to end projects which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    'https://drive.google.com/file/d/1Vc7J2-SL7eBWTD7rUUBU1BEZtmecOd9O/view?usp=drive_link',
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

  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Dr. Ram Manohar Lohia Awadh University, Ayodhya Uttar Pradesh",
      subtitle: "Bachelor Of Computer Application (BCA)",
      logo_path: "drmlau_logo.png",
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
      logo_path: "MSS_logo.png",
      alt_name: "naaz inter college image",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I focused on the tough stuff like 'Math, Physics, and Chemistry', which taught me how to break down big problems and think critically.",
        "⚡ I spent a lot of time turning 'math and science ideas' into practical solutions, which sharpened my ability to think logically and understand data.",
        "⚡ This stream gave me the 'structured thinking' and strong 'number skills' to jump into engineering and tech careers."
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer (React Js)",
      subtitle: "Hacker Rank",
      issued: "Jan 2026",
      credential_id: "026f15ba4301",
      logo_path: "hackerrank_logo.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/026f15ba4301",
      alt_name: "Hacker_Rank",
      color_code: "#8C151599",
    },
    {
      title: "Software Engineer",
      subtitle: "HackerRank",
      issued: "Jan 2026",
      credential_id: "9E51964A783D",
      logo_path: "hackerrank_logo.svg",
      certificate_link: "https://www.hackerrank.com/certificates/iframe/9e51964a783d",
      alt_name: "HackerRank",
      color_code: "#16a34a33",
    },
    {
      title: "JavaScript",
      subtitle: "HackerRank",
      issued: "Nov 2025",
      credential_id: "B95E1F21A0ED",
      logo_path: "hackerrank_logo.svg",
      certificate_link: "https://www.hackerrank.com/certificates/iframe/b95e1f21a0ed",
      alt_name: "HackerRank",
      color_code: "#16a34a33",
    },
    {
      title: "Microsoft Copilot Studio",
      subtitle: "Simplilearn (Microsoft Copilot Studio)",
      issued: "Apr 2026",
      credential_id: "10076020",
      logo_path: "microsoft_logo.svg",
      certificate_link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODc1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAwNzYwMjBfMTAzMjMwNzBfMTc3NTcwNzYwMzkxNS5wbmciLCJ1c2VybmFtZSI6IkFzaHV0b3NoIE1hdXJ5YSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7866%2FMicrosoft-Copilot-Studio-%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1371162960583891246&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL8jKzTLNcPdIMkqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAo13jvz8AAAA%3D",
      alt_name: "Microsoft Copilot Studio",
      color_code: "#0ea5e933",
    },
    {
      title: "Ai for All: From Basic to Gen Ai Practice",
      subtitle: "Nvidia Academy",
      issued: "Jan 2025",
      logo_path: "nvidia_logo.svg",
      certificate_link:
        "",
      alt_name: "Nvidia_logo",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as Frontend and Junior web Developer, Designer and Software Developer. I have also worked with some well established companies mostly as Frontend Developer. I love organising events and that is why I am also involved with many opensource communities.",
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
          duration: "November 2022 - Present",
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
          duration: "November 2021 - January 2022",
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
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
