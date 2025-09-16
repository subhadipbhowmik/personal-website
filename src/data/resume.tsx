import { Icons } from "@/components/icons";
import {
  Code,
  Contact,
  HomeIcon,
  Images,
  NotebookIcon,
  TvMinimalPlay,
} from "lucide-react";

export const DATA = {
  name: "Shubhadip Bhowmik",
  initials: "SB",
  url: "https://shubhadipbhowmik.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a hobbyist software developer and a tinkerer. I love building things and helping people.",
  summary:
    "I am a Web Developer at [NY Softech India Pvt. Ltd.](https://nysoftech.com/), where I focus on building responsive, scalable, and user-friendly web applications. I have experience in frontend development, UI design, and full-stack practices, with a strong foundation in modern web technologies. I have completed my B.C.A degree at Chandigarh University, which has strengthened my technical and problem-solving skills. Additionally, I write technical blogs, design UI/mockups, and actively contribute to open-source projects. You can explore some of the [projects](/my-projects) I have worked on and view my completed [certifications](/certifications). To learn more about my professional journey, visit [my story](/my-journey). I have also compiled interview preparation [notes](/notes) to aid aspiring developers. For a detailed overview of my qualifications and experience, you can access my [resume](https://drive.google.com/file/d/1LTd2ZjWjh8j39mhi_ObAtkxkRELdOxmD/preview). Additionally, feel free to check out my professional [profiles](/profiles).",
  avatarUrl: "/me.png",
  ogImage: "/shubhadip-og.png",
  skills: [
    "C",
    "C++",
    "JavaScript",
    "ReactJS",
    "PHP",
    "SQL",
    "Bootstrap",
    "TailwindCSS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "API",
    "Hosting",
  ],
  certification: "Certifications",
  certificationDesc:
    "I have completed various certifications. I always keep myself updated with new certifications.",
  memories: "Good Memories",
  memoriesDesc:
    "Preserving the past in memories, cherishing moments with loved ones, and holding them forever.",
  blog: "I Write Blogs",
  blogDesc:
    "Passionate about sharing ideas, I express myself through blogs in my free time.",
  proj: "Creating Projects",
  projDesc:
    "I learn by building diverse projects, exploring ideas and crafting bold solutions.",
  tutorials: "Sharing Tutorials",
  tutorialsDesc:
    "Sharing knowledge and skills through tutorials is my passion, and I enjoy creating them.",
  profile: "Let's Connect",
  profileDesc:
    "Join me on this journey where we share ideas, learn together, and inspire each other.",
  journey: "My Journey",
  journeyDesc: "Here is a little story of my life journey.",
  notes: "My Notes",
  notesDesc:
    "These are my interview prep notes covering Web Development, Computer Networking, DBMS, OS, and more.",
  projectText: "My Projects",
  projectTextDesc:
    "These are the projects I have worked on. Some of them are personal projects, some are open-source projects, and some are client projects.",
  radio: "Listening to Radio",
  radioDesc:
    "Listen to my favorite radio station. Top best radio station for programming and development.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/my-projects", icon: Code, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/tutorials", icon: TvMinimalPlay, label: "Tutorials" },
    { href: "/memories", icon: Images, label: "Memories" },
    // { href: "/profiles", icon: Contact, label: "Profiles" },
  ],
  contact: {
    email: "shubhadipbhowmikdev@gmail.com",
    tel: "+917550814404",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/subhadipbhowmik",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubhadip-bhowmik/",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/myselfshubhadip",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shubhadipbhowmik",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NY Softech India",
      href: "https://nysoftech.com/",
      badges: [],
      location: "Chandigarh, India - On-site",
      title: "Web Developer & Designer",
      logoUrl: "./work/nysoftech.jpeg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Specializing in designing and developing responsive, user-centric websites with a focus on functionality, intuitive navigation, and optimized performance. Ensuring seamless user experiences across all devices, I work closely with clients to understand their objectives and translate their vision into high-quality, efficient, and accessible web solutions. From conceptualization to deployment, every project is executed with precision, attention to detail, and a commitment to excellence.",
    },
    {
      company: "Hacktoberfest",
      href: "https://www.holopin.io/@subhadipbhowmik",
      badges: [],
      location: "Remote",
      title: "Project Maintainer",
      logoUrl: "./work/hactoberfest.jpg",
      start: "Oct 2024",
      end: "dec 2024",
      description:
        "As a maintainer for Hacktoberfest 2024, I promoted open-source collaboration by managing pull requests and providing feedback. I also developed BioBranch, a customizable platform that enables users to manage and showcase their social media handles and important links in one place",
    },
    {
      company: "Codingport",
      href: "https://codingport.in",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "./work/codingport.png",
      start: "June 2024",
      end: "Present",
      description:
        "Codingport provides programming articles related to Java, Data Structure, C/C++ and other popular programming languages with easy to follow tutorials and example programs. Programming tutorials with interview questions and preparation guide. NPTEL, LinkedIn Learning, Udemy Courses Assignment Answers.",
    },
    {
      company: "Next Drive India",
      href: "https://nextdriveindia.com/",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Software Engineer",
      logoUrl: "./work/nextdriveindia.png",
      start: "Nov 2023",
      end: "April 2024",
      description:
        "I am optimising the Web Pages of Next Drive India. Collaborate with the SEO team to optimize website content and ensure it is search engine-friendly. Conduct keyword research and assist in developing SEO strategies.",
    },
    {
      company: "GirlScript Summer of Code",
      href: "https://gssoc.girlscript.tech/project",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Open Source Developer",
      logoUrl: "./work/girlscript.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "I lead 30-Days-Of-CPP as a project admin, overseeing collaboration and contributing code and documentation. Engage with global contributors, organize events, and offer technical support to drive open-source innovation.",
    },
    {
      company: "freeCodeCamp",
      href: "https://nextdriveindia.com/",
      badges: [],
      location: "Mohali, Chandigarh",
      title: "Contributing Author",
      logoUrl: "./work/freecodecamp.png",
      start: "Aug 2024",
      end: "Current",
      description: "I write technical blog on different technical stacks.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "B.C.A",
      logoUrl: "./education/chandigarh-university.png",
      start: "2022",
      end: "2025",
      description:
        "I am currently pursuing a Bachelor of Computer Applications (B.C.A.) at Chandigarh University, which offers a comprehensive curriculum designed to bridge the gap between theoretical learning and practical application. The program emphasizes in-depth knowledge of programming languages, data structures, algorithms, database management, business analytics, and machine learning. Learning methods include case studies and projects that provide real-world application of concepts and practices.",
    },
    {
      school: "Changrachak Jagadish Smriti Vidyapith",
      href: "https://www.cjsvmoyna.org/",
      degree: "Higher Secondary Education",
      logoUrl: "./education/cjsv.png",
      start: "2020",
      end: "2022",
      description:
        "It was the first time I was studying far away from my home. A new experiencein hostel life and new friends to get good exposure. Overall a good memory.",
    },
    {
      school: "Moyna Vivekananda Vidyamandir",
      href: "https://schools.org.in/purba-medinipur/19190103302/moyna-vivekananda-vidyamandir.html",
      degree: "Secondary Education",
      logoUrl: "./education/mvv.png",
      start: "2014",
      end: "2020",
      description:
        "First of all I am very sorry, because I am unable to express that about my memories and moments in this school. I got lots of love and objurgation from my beloved sir and madams. Name of the school ends with Vidyamandir, Yes I can say one thing that all the teachers are iso-god of the school [Vidyamandir]",
    },
  ],
  projects: [
    {
      title: "OmniTools",
      href: "https://OmniTools.vercel.app/",
      dates: "Dec 2024 - Present",
      projectType: "Website",
      active: true,
      featured: true,
      description:
        "OmniTools: All-in-one toolkit for writing, SEO, profile fetching, and more. Boost your website’s performance with user-friendly tools, accessible anytime, anywhere.",
      technologies: ["HTML", "CSS", "JavaScript", "React.JS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://omnitools.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/omni-tools/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/optiseo.png",
      video: "",
    },
    {
      title: "Examhunt",
      href: "https://examhunt.netlify.app/",
      dates: "July 2023 - Present",
      projectType: "Android App",
      active: true,
      featured: true,
      description:
        "Examhunt simplifies Madhyamik preparation with high-quality suggestions, notes, guides, and tips from expert teachers, accessible on Android for convenient learning anytime, anywhere.",
      technologies: ["Kotlin", "XML", "Android Studio", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://examhunt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/Examhunt-App/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/examhunt.png",
      video: "",
    },
    {
      title: "CU Calculator",
      href: "https://cucalculator.netlify.app/",
      dates: "June 2023 - Present",
      projectType: "Website",
      active: true,
      featured: false,
      description:
        "A website to calculate SGPA and CGPA for Chandigarh University students with accurate, easy-to-use tools for quick results.",
      technologies: ["HTML5", "CSS3", "JS", "Github"],
      links: [
        {
          type: "Website",
          href: "https://cucalculator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/chandigarh-university-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cucal.png",
      video: "",
    },
    {
      title: "30-Days-Of-CPP",
      href: "https://subhadipbhowmik.github.io/30-Days-Of-CPP/",
      dates: "April 2023 - September 2023",
      projectType: "Website",
      active: true,
      featured: false,
      description:
        "A 30-day step-by-step challenge designed to help you master C++ programming. Learn core concepts, improve coding skills, and build confidence in just one month of focused practice.",
      technologies: ["HTML", "CSS", "JS", "React", "Markdown", "C++"],
      links: [
        {
          type: "Website",
          href: "https://subhadipbhowmik.github.io/30-Days-Of-CPP/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/30-Days-Of-CPP/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/30daysofcpp.png",
      video: "",
    },
    {
      title: "Codingport",
      href: "https://codingport.in",
      dates: "April 2023 - March 2024",
      active: true,
      featured: true,
      projectType: "Website",
      description:
        "A free platform to learn Java, C, C++, and JavaScript. Offers LeetCode solutions, campus interview prep, placement guidance, and internship notifications for aspiring programmers.",
      technologies: ["HTML", "CSS", "JS", "SEO"],
      links: [
        {
          type: "Website",
          href: "https://codingport.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/codingport-banner.png",
      video: "",
    },
    {
      title: "BioTree",
      href: "https://biobranch.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      projectType: "Website",
      active: true,
      featured: true,
      description:
        "A customizable platform to manage and showcase all your social media profiles and important links in one place, simplifying your online presence.",
      technologies: [
        "JavaScript",
        "REact",
        "Next.JS",
        "TailwindCSS",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://biobranch.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/bio-branch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/biotree.png",
      video: "",
    },
    {
      title: "CPP Easy Snippet",
      href: "https://marketplace.visualstudio.com/items?itemName=ShubhadipBhowmik.cpp-easy-snippet",
      dates: "Jan 2025 - Present",
      projectType: "VS Code Extension",
      active: true,
      featured: true,
      description:
        "Boost C++ productivity with the CPP Boilerplate Generator for VS Code. Simplify project setup with essential boilerplate snippets and templates, ensuring quick and efficient initialization.",
      technologies: ["C++", "Visual Studio Code", "JavaScript"],
      links: [
        {
          type: "Marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=shubhadipbhowmik.cpp-easy-snippet",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/subhadipbhowmik/CPP-Easy-Snippet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cpp-easy-snippet.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Project Expo '25 CU",
      dates: "November 19th - 22rd, 2023",
      location: "Chandigarh, India",
      description:
        "Learning Application for BCA Students which helps in providing Notes, Notification, Teachers details, CR info etc.",
      image: "https://i.ibb.co/31q6y7C/1y-Ygcd7o-400x400.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://codingport.in",
        },
        {
          title: "App",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/subhadipbhowmik/BCA-Mate",
        },
      ],
    },
    {
      title: "Bajaj Finance Ideathon",
      dates: "9th September, 2024",
      location: "Chandigarh, India",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image: "https://i.ibb.co/281x1mJ/images.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [],
    },
  ],
} as const;
