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
    nextjs,
    redux,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    InfinityJewelleryERP,
    startupdefenders,
    MarketuneBusinessDevelopmentSolutions,
    tesla,
    shopify,
    carrent,
    InfinityJewelleryERPProject,
    EnglishStuProject,
    SafeRoadProject,
    SoukProject,
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
        title: "Front-end Developer",
        icon: web,
    },
    {
        title: "Back-end Developer",
        icon: backend,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
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
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];


const experiences = [
    {
        "title": "Front-end Developer",
        "company_name": "Infinity Jewellery ERP",
        "icon": InfinityJewelleryERP,
        "iconBg": "#9ca3af",
        "date": "July 2022 - Present (part-time)",
        "points": [
            "Leading the development of the Infinity ERP system, tailored to simplify operations for local jewelry retailers.",
            "Utilizing React.js and related technologies to create and maintain high-performance web applications.",
            "Collaborating seamlessly with cross-functional local teams, including designers and product managers, to ensure product excellence.",
            "Implementing responsive design principles and ensuring cross-browser compatibility for a seamless local user experience.",
            "Actively participating in local code reviews, providing constructive feedback to enhance team efficiency."
        ]
    },
    {
        "title": "Front-end Developer",
        "company_name": "Marketune, Business Development Solutions",
        "icon": MarketuneBusinessDevelopmentSolutions,
        "iconBg": "#e6dedd",
        "date": "Jan 2023 - Oct 2023 · 10 mos",
        "points": [
            "Contributing to the local impact of MARKETUNE LLC's innovative journey in the marketing world for five years.",
            "Leading local business growth by aligning marketing plans with strategic goals, overseeing implementation, and continuous monitoring.",
            "Utilizing cutting-edge tools and technologies at Marketune to deliver custom solutions in software design, development, and user experience.",
            "Thriving in a local environment that encourages innovation, making Marketune an ideal workplace for enhancing local user experiences in software and applications."
        ]
    },
    {
        "title": "Front-end Developer",
        "company_name": "StartUp Defenders",
        "icon": startupdefenders,
        "iconBg": "#e6dedd",
        "date": "May 2021 - Apr 2023 · 2 yrs",
        "points": [
            "Providing strategic solutions for local startups through comprehensive consultation services.",
            "Contributing significantly to diverse local projects, including fleet management systems, ccm systems, and car charging systems.",
            "Leveraging React.js, Next.js, Firebase, Redux, and redux toolkit for front-end development in the local context.",
            "Actively collaborating with cross-functional local teams to deliver top-notch web applications with a focus on the local user experience.",
            "Ensuring responsive design implementation and cross-browser compatibility for the local community.",
            "Playing a pivotal role in local code reviews, fostering a culture of constructive feedback and continuous improvement."
        ]
    }
]


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
        name: "Infinity Jewellery ERP",
        description: `Infinity is an ERP system that supports the Arabic language for managing gold and jewelry stores. It supports the application of the first phase of issuing the electronic invoice, in its two forms, the tax invoice and the simplified tax invoice. And you can follow up on the general sales of products and gold jewelry by piece and weight in addition to following up the sales of each seller separately, following up your stock of products, displaying stock value reports and inventory reports, and issuing profit and loss reports to know how well your business is performing each period of time.`,
        tags: [
            {
                name: "ReactJs",
                color: "blue-text-gradient",
            },
            {
                name: "ReduxJs",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: InfinityJewelleryERPProject,
        source_code_link: null,
        site_link: 'https://infinityjerp.com/en/',
    },
    {
        name: "EnglishStu",
        description:
            `Free online resources for learning English 🇬🇧🇺🇸 or teaching it. From easy guides to grammar to fun games and quizzes for learning English.`,
        tags: [
            {
                name: "ReactJs",
                color: "blue-text-gradient",
            },
            {
                name: "NextJs",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCss",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
        ],
        image: EnglishStuProject,
        site_link: null,
        source_code_link: "https://github.com/abdo-elmorsi/EnglishStu",
    },
    {
        name: "Safe-Road",
        description:
            `It is a leading supplier of road safety solutions in Saudi. The Group offers a broad range of innovative and high-quality road safety solutions.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "NextJs",
                color: "green-text-gradient",
            },
            {
                name: "React Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: SafeRoadProject,
        site_link: "https://www.saferoad.com.sa/",
        source_code_link: null,
    },
    {
        name: "Souk",
        description:
            `It is a multi-seller e-commerce website that offers customers a wide range of products and services.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "NextJs",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: SoukProject,
        site_link: null,
        source_code_link: 'https://github.com/abdo-elmorsi/souk',
    },

];

export { services, technologies, experiences, testimonials, projects };
