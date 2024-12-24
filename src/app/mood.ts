import { StaticImageData } from "next/image";
import sleep from '../assets/activity/sleep.avif'
// import cat from '../assets/activity/cat.avif'
import coding from '../assets/activity/coding.avif'
import mask from '../assets/activity/mask.avif'
import music from '../assets/activity/music.avif'
// import study from '../assets/activity/study.jpg'
import game from '../assets/activity/game.jpg'
import rest from '../assets/activity/rest.avif'
import panda from '../assets/activity/panda.avif'
import chill2 from '../assets/activity/chill2.avif'
import coding2 from '../assets/activity/coding2.avif'
import crying from '../assets/activity/crying.avif'
import sleepy from '../assets/activity/sleepy.jpg'
import boy from '../assets/activity/boy.avif'
import angry from '../assets/activity/angry.avif'
import art from '../assets/activity/art.avif'
import cool from '../assets/activity/cool.avif'
import laptop from '../assets/activity/laptop.avif'
import music2 from '../assets/activity/music2.avif'
import ready from '../assets/activity/ready.avif'
import sleep3 from '../assets/activity/sleep3.avif'
import sleep4 from '../assets/activity/sleep4.avif'
import sleep5 from '../assets/activity/sleep5.avif'
import tired2 from '../assets/activity/tired2.jpg'
import angry2 from '../assets/activity/angry2.avif'
import tired from '../assets/activity/tired.avif'
import work from '../assets/activity/work.avif'

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
    {
        id: '7',
        image: sleepy
    },
    {
        id: '8',
        image: panda
    },
    {
        id: '9',
        image: coding2
    },
    {
        id: '10',
        image: boy
    },
    {
        id: '11',
        image: crying
    },
    {
        id: '12',
        image: chill2
    },
    {
        id: '13',
        image: angry
    },
    {
        id: '14',
        image: art
    },
    {
        id: '15',
        image: coding2
    },
    {
        id: '16',
        image: laptop
    },
    {
        id: '17',
        image: music2
    },
    {
        id: '18',
        image: ready
    },
    {
        id: '19',
        image: sleep3
    },
    {
        id: '20',
        image: tired
    },
    {
        id: '21',
        image: work
    },
    {
        id: '22',
        image: tired2
    },
    {
        id: '23',
        image: sleep4
    },
    {
        id: '24',
        image: sleep5
    },
    {
        id: '25',
        image: angry2
    },
]