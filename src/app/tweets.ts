import { StaticImageData } from 'next/image'
import two from '../assets/tweets/2.png'
import three from '../assets/tweets/3.png'
import four from '../assets/tweets/4.png'
import five from '../assets/tweets/5.png'
import six from '../assets/tweets/6.png'
import seven from '../assets/tweets/7.png'

export interface tweetsType{
    id: number,
    image: StaticImageData,
    link: string
}

export const tweets = [
    {
        id: 1,
        image: three,
        link: 'https://x.com/Krishn_aGupta/status/1447935999934349317'
    },
    {
        id: 2,
        image: two,
        link: 'https://x.com/Krishn_aGupta/status/1512067725023010817'
    },
    {
        id: 3,
        image: seven,
        link: 'https://x.com/Krishn_aGupta/status/1485625145330847747'
    },
    {
        id: 4,
        image: four,
        link: 'https://x.com/Krishn_aGupta/status/1482379167941693442'
    },
    {
        id: 5,
        image: five,
        link: 'https://x.com/Krishn_aGupta/status/1517871617711345664'
    },
    {
        id: 6,
        image: six,
        link: 'https://x.com/Krishn_aGupta/status/1548676603382988803'
    }
]