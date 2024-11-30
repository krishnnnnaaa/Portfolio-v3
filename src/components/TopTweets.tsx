'use client'
import { tweets, tweetsType } from '@/app/tweets'
import React, { useEffect, useState } from 'react'
import TweetImg from './TweetImg'

export default function TopTweets(){
    const [tweetData, setTweetData] = useState<tweetsType[]>([])

    useEffect(() => {
        setTweetData(tweets)
    }, [])
  return (
    <div id='tweets' className='flex justify-center items-center my-8'>
        <div className='w-full'>
            <h1 className='text-center text-4xl text-orange-300 w-fit mx-auto my-8 select-none hover:scale-110 transition-all'>Top Tweets by me :p</h1>
            <div className='flex justify-center flex-wrap'>
                {
                    tweetData && tweetData.map(tweet => <TweetImg link={tweet.link} tweet={tweet.image} key={tweet.id}/>)
                }
            </div>
        </div>
    </div>
  )
}
