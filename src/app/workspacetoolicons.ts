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
import vscode from '../assets/code/vscode.png'
import youtube from '../assets/code/youtube.webp'
import expressionless from '../assets/emotes/expressionless.webp'
import facesavoring from '../assets/emotes/facesavoring.webp'
import facewithoutmouth from '../assets/emotes/facewithoutmouth.webp'
import melting from '../assets/emotes/melting.webp'
import smilingfacewithtear from '../assets/emotes/smilingfacewithtear.webp'
import upsidedownface from '../assets/emotes/upsidedownface.webp'
import spotify from '../assets/code/spotify.webp'
import { StaticImageData } from 'next/image'

export interface workspaceStackType{
    id: number;
    name: string,
    image: StaticImageData
}

export const workspaceStack = [
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
    },
    {
        id: 13,
        name: "VSCode",
        image: vscode
    },
    {
        id: 14,
        name: "Youtube",
        image: youtube
    },
    {
        id: 15,
        name: "Spotify",
        image: spotify
    },
    {
        id: 16,
        name: "Face Savoring",
        image: facesavoring
    },
    {
        id: 17,
        name: "Face Without Mouth",
        image: facewithoutmouth
    },
    {
        id: 18,
        name: "Melting",
        image: melting
    },
    {
        id: 19,
        name: "Smiling Face With Tear",
        image: smilingfacewithtear
    },
    {
        id: 20,
        name: "Upside Down Face",
        image: upsidedownface
    },
    {
        id: 21,
        name: "Expressionless",
        image: expressionless
    }
]