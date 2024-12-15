import { StaticImageData } from "next/image";
import sleep from '../assets/activity/sleep.avif'
// import cat from '../assets/activity/cat.avif'
import coding from '../assets/activity/coding.avif'
import mask from '../assets/activity/mask.avif'
import music from '../assets/activity/music.avif'
// import study from '../assets/activity/study.jpg'
import game from '../assets/activity/game.jpg'
import rest from '../assets/activity/rest.avif'

export interface moodType{
    id: string,
    image: StaticImageData,
}

export const mood:moodType[] = [
    {
        id: '1',
        image: sleep
    },
    {
        id: '2',
        image: rest
    },
    {
        id: '3',
        image: coding
    },
    {
        id: '4',
        image: game
    },
    {
        id: '5',
        image: mask
    },
    {
        id: '6',
        image: music
    },
]