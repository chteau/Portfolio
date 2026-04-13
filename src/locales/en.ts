export type Translations = {
    hero: {
        greeting: string;
        iam: string;
        terminalCommand: string;
        description: string;
        contributedVisits: string;
    };
    about: {
        title: string;
        summary: string;
        journeyHeading: string;
        skillsHeading: string;
        whatIDoHeading: string;
    };
    skills: {
        heading: string;
        luau: { name: string; description: string };
        webdev: { name: string; description: string };
    };
    projects: {
        sectionLabel: string;
        heading: string;
        subheading: string;
    };
    games: {
        sectionLabel: string;
        heading: string;
        subheading: string;
        playButton: string;
        notReleased: string;
    };
    contact: {
        sectionLabel: string;
        heading: string;
        body: string;
    };
    languageSwitcher: {
        label: string;
    };
};

export const en: Translations = {
    hero: {
        greeting: "Hello there!",
        iam: "I'm",
        terminalCommand: "admin@ch.teau:~$ run description",
        description: "French full-stack developer and security guard. I absolutely love learning new frameworks and techniques as well as bringing projects to life.",
        contributedVisits: "Contributed Visits",
    },
    about: {
        title: "About me",
        summary: "My interest in programming dates back to sixth grade. Since then, I have built a wide range of projects, both as a freelancer and purely for personal interest. In addition to my role in development, I am employed as a security guard at a nightclub. I possess hands-on experience in web development and Roblox game development.",
        journeyHeading: "My Journey",
        skillsHeading: "Skills & Expertise",
        whatIDoHeading: "What I Do",
    },
    skills: {
        heading: "Skill Tree",
        luau: {
            name: "Luau Scripting",
            description: "Server & client scripts, optimization, module architecture and UI scripting.",
        },
        webdev: {
            name: "Web Development",
            description: "Full-stack development with PHP, JavaScript, TypeScript, React and Next.js.",
        },
    },
    projects: {
        sectionLabel: "My Projects",
        heading: "Check out my latest work",
        subheading: "Explore some of the projects I've worked on!",
    },
    games: {
        sectionLabel: "Games",
        heading: "Games I have contributed on or made",
        subheading: "Here's a selection of some games I worked on or even made.",
        playButton: "Play on Roblox",
        notReleased: "This game isn't released yet!",
    },
    contact: {
        sectionLabel: "Contact",
        heading: "Let's work together!",
        body: "Wanna talk and perhaps work together? Shoot me a dm and I'll respond as fast as I can. The best way to contact me is through Discord.",
    },
    languageSwitcher: {
        label: "Switch language",
    },
};
