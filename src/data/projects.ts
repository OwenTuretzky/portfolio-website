export interface Project {
    slug: string;
    title: string;
    title_ja: string;
    description: string;
    description_ja: string;
    image: string;
    repoUrl: string;
    liveUrl?: string;
    tags: string[];
    tags_ja: string[];
    featured?: boolean; //this determines if it can show on the homepage
}

export const projects: Project[] = [
    {
        slug: "neural-network-from-srcatch",
        title: "OwenNet",
        title_ja: "オーウィンネット",
        description: "A from-scratch neural network to classify handwritten digits",
        description_ja: "自分の手書き文字認識ニューラルネットワーク",
        image: "owennet.png",
        repoUrl: "https://github.com/OwenTuretzky/OwenNet",
        tags: ["Python"],
        tags_ja: ["パイソン"],
        featured: true,
    },

    {
        slug: "my-website",
        title: "My Website",
        title_ja: "私のサイト",
        description: "My personal portfolio website for photography and computer science",
        description_ja: "自分のコンピューターと写真のポートフォリオサイト",
        image: "website.png",
        repoUrl: "https://github.com/OwenTuretzky/portfolio-website",
        liveUrl: "https://owen.turetzky.org",
        tags: ["HTML", "CSS", "Javascript", "Astro"],
        tags_ja: ["HTML", "CSS", "Javascript", "Astro"],
        featured: false,
    },
]