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
import crying2 from '../assets/activity/crying2.avif'
import crying3 from '../assets/activity/crying3.avif'
import crying4 from '../assets/activity/crying4.avif'
import happy from '../assets/activity/happy.avif'
import sadcat from '../assets/activity/sadcat.avif'
import happy2 from '../assets/activity/happy2.avif'
import happy3 from '../assets/activity/happy3.avif'
import happy4 from '../assets/activity/happy4.avif'
import happy5 from '../assets/activity/happy5.avif'
import bear from '../assets/activity/bear.avif'
import chill3 from '../assets/activity/chill3.avif'
import laptop2 from '../assets/activity/laptop2.avif'
import mask2 from '../assets/activity/mask2.avif'
import skull from '../assets/emotes/skull.webp'
import cryinggiphy from '../assets/activity/cryinggiphy.webp';
import sadgiphy from '../assets/activity/sadgiphy.webp';
import sadgiphy2 from '../assets/activity/sadgiphy2.webp';
import mice from '../assets/activity/mice.webp';
import conflictgiphy from '../assets/activity/conflictgiphy.webp';
import excitinggiphy from '../assets/activity/excitinggiphy.webp';
import fastgiphy from '../assets/activity/fastgiphy.webp';
import happygiphy from '../assets/activity/happygiphy.webp';
import huffgiphy from '../assets/activity/huffgiphy.webp';
import readygiphy from '../assets/activity/readygiphy.webp';
import surprisedgiphy from '../assets/activity/surprisedgiphy.webp';
import sleepygiphy from '../assets/activity/sleepygiphy.webp';
import yaygiphy from '../assets/activity/yaygiphy.webp';
import yoogiphy from '../assets/activity/yoogiphy.webp';
import head from '../assets/activity/head.webp'
import nervous from '../assets/activity/nervous.webp'
import depressed from '../assets/activity/dudu-depressed.gif'
import dudusad from '../assets/activity/dudu-sad.gif'
import duduwearing from '../assets/activity/dudu-wearing-glasses-standing.gif'
import dudu1 from '../assets/activity/dudu1.gif'
import sleepydudu from '../assets/activity/sleepydudu.gif'
import waitingforyou from '../assets/activity/waiting-for-you.gif'
import sseeyall from '../assets/activity/sseeyall.gif'
import bbg from '../assets/activity/cute-bbg.gif'
import siii from '../assets/activity/siii.gif'
import animegirl from '../assets/activity/anime-girl.gif'
import focused from '../assets/activity/focused.gif'
import panic from '../assets/activity/panic.gif'
import workgif from '../assets/activity/workgif.gif'
import aether from '../assets/activity/aether.jpg'
import aether2 from '../assets/activity/aether2.jpg'
import aether3 from '../assets/activity/aether3.jpg'
import aether4 from '../assets/activity/aether4.jpg'

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
    {
        id: '26',
        image: crying2
    },
    {
        id: '27',
        image: crying3
    },
    {
        id: '28',
        image: crying4
    },
    {
        id: '29',
        image: happy
    },
    {
        id: '30',
        image: sadcat
    },
    {
        id: '31',
        image: happy2
    },
    {
        id: '32',
        image: happy3
    },
    {
        id: '33',
        image: happy4
    },
    {
        id: '34',
        image: happy5
    },
    {
        id: '35',
        image: bear
    },
    {
        id: '36',
        image: chill3
    },
    {
        id: '37',
        image: laptop2
    },
    {
        id: '38',
        image: mask2
    },
    {
        id: '39',
        image: skull
    },
    {
        id: '40',
        image: cryinggiphy
    },
    {
        id: '41',
        image: sadgiphy
    },
    {
        id: '42',
        image: sadgiphy2
    },
    {
        id: '43',
        image: mice
    },
    {
        id: '44',
        image: conflictgiphy
    },
    {
        id: '45',
        image: excitinggiphy
    },
    {
        id: '46',
        image: fastgiphy
    },
    {
        id: '47',
        image: happygiphy
    },
    {
        id: '48',
        image: huffgiphy
    },
    {
        id: '49',
        image: readygiphy
    },
    {
        id: '50',
        image: sleepygiphy
    },
    {
        id: '51',
        image: surprisedgiphy
    },
    {
        id: '52',
        image: yaygiphy
    },
    {
        id: '53',
        image: yoogiphy
    },
    {
        id: '54',
        image: head
    },
    {
        id: '55',
        image: nervous
    },
    { id: '56', image: depressed },
    { id: '57', image: dudusad },
    { id: '58', image: duduwearing },
    { id: '59', image: dudu1 },
    { id: '60', image: sleepydudu },
    { id: '61', image: waitingforyou },
    { id: '62', image: sseeyall },
    { id: '63', image: bbg },
    { id: '64', image: siii },
    { id: '65', image: animegirl },
    { id: '66', image: focused },
    { id: '67', image: panic },
    { id: '68', image: workgif },
    {id: '69', image: aether},
    {id: '70', image: aether2},
    {id: '71', image: aether3},
    {id: '72', image: aether4},
    
]