export interface Project {
    title: string;
    description: string;
    stack: string[];
    github: string;
    live: string;
    thumbnail: string;
    color: "red" | "blue" | "green" | "purple";
}

export const projects: Project[] = [
    {
        title: "Document Scanner and Organizer",
        description: "AI-powered web application to scan, upload, and organize documents with automatic text extraction, smart categorization, and full-text search using vision-enabled LLMs.",
        stack: [
            "React 19",
            "Vite",
            "Tailwind CSS",
            "FastAPI",
            "Python",
            "SQLite",
            "Firebase Authentication",
            "LangChain",
            "Google Gemini Vision"
        ],
        github: "https://github.com/CodeByAtharva/Docscanner-and-organizer",
        live: "https://docscanner-and-organizer-1.onrender.com/",
        thumbnail: "../img/DocuMind.jpg",
        color: "purple"
    },
    {
        title: "TEDxPVGCOET Website",
        description: "Built responsive UI with real-time content integration for TEDx event, featuring dynamic content management and seamless user experience.",
        stack: ["React", "JavaScript", "Tailwind CSS", "Express.js"],
        github: "https://github.com/tedxpvgcoet-tech/tedxpvgcoetFrontend",
        live: "https://www.tedxpvgcoet.in/",
        thumbnail: "../img/tedx.jpg",
        color: "red"
    },
    {
        title: "Blood Share",
        description: "Ethereum-based decentralized blood donor system using Solidity smart contracts, enabling secure and transparent blood donation tracking.",
        stack: ["Solidity", "Ethereum", "React.js", "MongoDB"],
        github: "https://github.com/CodeByAtharva/Blood-Share",
        live: "https://bloodshare.vercel.app/",
        thumbnail: "../img/blood.jpg",
        color: "blue"
    },
    {
        title: "Smart Deck",
        description: "A platform that converts any book or text into automatically generated quizzes using AI, helping students study efficiently with instant question sets.",
        stack: ["HTML", "CSS", "JavaScript", "Gemini Api"],
        github: "https://github.com/CodeByAtharva/I7J8K_Prompt2Prototype",
        live: "https://i7-j8-k-prompt2-prototype.vercel.app/",
        thumbnail: "../img/deck.jpg",
        color: "purple"
    },
    {
        title: "Spain Collection Clone",
        description: "A visually appealing luxury website clone inspired by Spain premium product collections, built with smooth animations using GSAP.",
        stack: ["HTML", "CSS", "JavaScript", "GSAP"],
        github: "https://github.com/CodeByAtharva/spain-collection",
        live: "https://codebyatharva.github.io/spain-collection/",
        thumbnail: "../img/spain.jpeg",
        color: "green"
    },
];
