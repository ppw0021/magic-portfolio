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
  location: "Pacific/Auckland",
  languages: [],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
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
  title: `DJRoss`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Tēnā koe</>,
  subline: (
    <>
      I'm Declan, a Final Year Software Engineering student at the Auckland
      University of Technology
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: "About",
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
        I am a Software Engineering student in my final year of study at
        Auckland University of Technology. I'm very passionate about software
        and electronics and frequently complete my own projects.
        <br />
        <br />I have developed solutions to problems I have encountered and
        publicly made them available on GitHub.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Farmers Trading Company",
        timeframe: "2021-Present",
        role: "Sales Consultant",
        achievements: [
          <>
            Consistently upheld a high standard of individualised customer
            service.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Auckland University of Technology",
        description: (
          <>
            Class of 2025 (Final Year)
            <br />
            Bachelor of Engineering (Honours)
            <br />
            Major: Software Engineering
            <br />
            Minor: Digital Services
            <br />
            <br />
            <strong>Relevant Coursework:</strong>
            <br />
            • Software Development Practice
            <br />
            • Object Oriented Programming
            <br />
            • Data Structures and Algorithms
            <br />
            • Contemporary Issues in Software Engineering
            <br />
            • Operating Systems
            <br />
            • Database System Design
            <br />
            • Software Architecture
            <br />
            • Highly Secure Systems
            <br />
            • Human Computer Interaction
            <br />
            <br />
            <strong>Leadership:</strong>
            <br />
            Executive Secretary – AUT Robotics Club (May 2025 – Present)
          </>
        ),
      },
      {
        name: "Howick College",
        description: (
          <>
            Graduated 2020
            <br />
            University Entrance – 2020
            <br />
            Academic Merit Award – Digital Technology Electronics (2019, 2018,
            2017)
            <br />
            ASB Brightsparks Competition – Finalist (2018)
            <br />
            Academic Award – Merit Endorsement Level 1 (2018)
            <br />
            Top in Class – Digital Technology Electronics (2016)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "",
        description: (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <div>• C</div>
            <div>• Mechatronics</div>
            <div>• Git/GitHub</div>

            <div>• GitHub Actions</div>
            <div>• JavaScript</div>
            <div>• C++</div>

            <div>• Electronics</div>
            <div>• Bash</div>
            <div>• Backend/Frontend</div>

            <div>• TypeScript</div>
            <div>• C#</div>
            <div>• 3D Printing/CAD</div>

            <div>• Networking</div>
            <div>• Server Hardware</div>
            <div>• Node/Next/Express</div>
            
            <div>• Java</div>
            <div>• Microcontrollers</div>
            <div>• SQL/Databases</div>

            <div>• Server Configuration</div>
            <div>• HTML/CSS</div>
            <div>• Python</div>

            <div>• Unity</div>
            <div>• Vercel</div>
            <div>• VSCode</div>

            <div>• Cloud Computing</div>
          </div>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery`,
  description: `A photo collection by ${person.name}`,
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
