import { StaticImageData } from "next/image";
import chill from '../assets/activity/chill.avif'
import cat from '../assets/activity/cat.avif'
import coding from '../assets/activity/coding.avif'
import mask from '../assets/activity/mask.avif'
import music from '../assets/activity/music.avif'
import study from '../assets/activity/study.jpg'

export interface moodType{
    id: string,
    image: StaticImageData,
}

export const mood:moodType[] = [
    {
        id: '1',
        image: chill
    },
    {
        id: '2',
        image: cat
    },
    {
        id: '3',
        image: coding
    },
    {
        id: '4',
        image: study
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