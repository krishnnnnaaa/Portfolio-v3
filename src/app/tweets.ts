import { StaticImageData } from 'next/image'
import one from '../assets/tweets/2.png'
import two from '../assets/tweets/2.png'
import three from '../assets/tweets/3.png'
import four from '../assets/tweets/4.png'
import five from '../assets/tweets/5.png'
import six from '../assets/tweets/6.png'

export interface tweetsType{
    id: number,
    image: StaticImageData
}

export const tweets = [
    {
        id: 1,
        image: one,
    },
    {
        id: 2,
        image: two,
    },
    {
        id: 3,
        image: three,
    },
    {
        id: 4,
        image: four,
    },
    {
        id: 5,
        image: five,
    },
    {
        id: 6,
        image: six,
    }
]