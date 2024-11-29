export interface projectsType{
    repoName: string,
    repoDesc: string,
    tech: string,
    demo: string,
    gituhb?: string
}

export const proofs:projectsType[] = [
    {
        repoName: "TrimLinks",
        repoDesc: 'URL shortener designed to simplify your links.',
        tech: "NextJS, TypeScript, ShadCN, MongoDB, TailwindCSS",
        demo: 'https://trim-links.vercel.app/workspace',
        gituhb: 'https://github.com/krishnnnnaaa/TrimLinks'
    },
    {
        repoName: "Tweetstic",
        repoDesc: "Generate fake tweets effortlessly.",
        tech: "NextJS, TypeScript, TailwindCSS, ShadCN",
        demo: 'https://tweetstic.vercel.app/studio',
        gituhb: 'https://github.com/krishnnnnaaa/Tweetstic'
    },
    {
        repoName: "GifShip",
        repoDesc: "A Giphy clone that allows users to search, like, and store GIFs.",
        tech: "NextJS, TypeScript, Appwrite, TailwindCSS, ShadCN, Giphy API",
        demo: 'https://gif-ship.vercel.app/page',
        gituhb: 'https://github.com/krishnnnnaaa/GifShip'
    },
    {
        repoName: "Lofically",
        repoDesc: "Lofically lets you enjoy listening to bollywood lofi songs.",
        tech: "ReactJS, Redux, Firebase, TailwindCSS",
        demo: 'https://lofically.vercel.app/',
        gituhb: ''
    }
]