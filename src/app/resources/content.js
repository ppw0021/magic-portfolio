import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Declan Javier",
  lastName: "Ross",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Final Year Software Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "dec500star@gmail.com",
  location: "Auckland, New Zealand", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ppw0021",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/djrossnz",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  /*featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },*/
  subline: (
    <>
      I'm Declan, a Final Year Software Engineering student at the Auckland University of Technology
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Software Engineering student in my final year of study at Auckland University of Technology. I'm very passionate about software and electronics and frequently complete my own projects.
        <br />
        <br />
        I have developed solutions to problems I have encountered and publicly made them available on GitHub.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [
      {
        company: "Farmers Trading Company",
        timeframe: "2021-Present",
        role: "Sales Consultant",
        achievements: [
          <>Consistently upheld a high standard of individualised customer service.</>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Auckland University of Technology",
        description: (
          <>
            Class of 2025 (Final Year)<br />
            Bachelor of Engineering (Honours)<br />
            Major: Software Engineering<br />
            Minor: Digital Services<br />
            <br />
            <strong>Relevant Coursework:</strong><br />
            • Software Development Practice<br />
            • Object Oriented Programming<br />
            • Data Structures and Algorithms<br />
            • Contemporary Issues in Software Engineering<br />
            • Operating Systems<br />
            • Database System Design<br />
            • Software Architecture<br />
            • Highly Secure Systems<br />
            • Human Computer Interaction
          </>
        ),
      },
      {
        name: "Howick College",
        description: (
          <>
            Graduated 2020<br />
            2020 University Entrance<br />
            2019, 2018, 2017 Academic Merit Award – Digital Technology Electronics<br />
            2018 ASB Brightsparks Competition – Finalist<br />
            2018 Academic Award – Merit Endorsement Level 1
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "",
        description: (
          <>
            • Git and GitHub<br />
            • Python<br />
            • C / C++<br />
            • Java<br />
            • C#<br />
            • Unity<br />
            • Microcontrollers<br />
            • DevOps<br />
            • Encryption<br />
            • 3D Printing<br />
            • Electronics<br />
            • Z3<br />
            • CAD Design<br />
            • Mathematics<br />
            • Cloud Computing
          </>
        ),
        images: [],
        // optional: leave the array empty if you don't want to display images
      }
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
