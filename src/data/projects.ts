export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    repoUrl: string;
    liveUrl?: string;
    tags: string[];
    featured?: boolean; //this determines if it can show on the homepage
}

export const projects: Project[] = [
    {
        slug: "neural-network-from-srcatch",
        title: "OwenNet",
        description: "A from-scratch neural network to classify handwritten digits",
        image: "owennet.png",
        repoUrl: "https://github.com/OwenTuretzky/OwenNet",
        tags: ["Python"],
        featured: true,
    },

    {
        slug: "my-website",
        title: "My Website",
        description: "My personal portfolio website for photography and computer science",
        image: "website.png",
        repoUrl: "https://github.com/OwenTuretzky/portfolio-website",
        liveUrl: "https://owen.turetzky.org",
        tags: ["HTML", "CSS", "Javascript", "Astro"],
        featured: false,
    },
]