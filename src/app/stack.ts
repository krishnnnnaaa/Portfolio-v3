import html from '..//assets/code/html.png'
import css from '../assets/code/css.png'
import javascript from '../assets/code/javascript.png'
import react from '../assets/code/react.png'
import nextjs from '../assets/code/nextjs.png'
import tailwind from '../assets/code/tailwind.png'
import bootstrap from '../assets/code/bootstrap.png'
import firebase from '../assets/code/firebase.png'
import typescript from '../assets/code/typescript.png'
import git from '../assets/code/git.png'
import redux from '../assets/code/redux.png'
import appwrite from '../assets/code/appwrite.png'
import { StaticImageData } from 'next/image'

export interface stackType{
    id: number;
    name: string,
    image: StaticImageData
}

export const stack = [
    {
        id: 1,
        name: "HTML",
        image: html
    },
    {
        id: 2,
        name: "CSS",
        image: css
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript
    },
    {
        id: 4,
        name: "TypeScript",
        image: typescript
    },
    {
        id: 5,
        name: "React",
        image: react
    },
    {
        id: 6,
        name: "Redux",
        image: redux
    },
    {
        id: 7,
        name: "NextJS",
        image: nextjs
    },
    {
        id: 8,
        name: "Git",
        image: git
    },
    {
        id: 9,
        name: "Tailwind",
        image: tailwind
    },
    {
        id: 10,
        name: "Bootstrap",
        image: bootstrap
    },
    {
        id: 11,
        name: "Firebase",
        image: firebase
    },
    {
        id: 12,
        name: "Appwrite",
        image: appwrite
    }
]