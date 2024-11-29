'use client'
import { tweets, tweetsType } from '@/app/tweets'
import React, { useEffect, useState } from 'react'
import TweetImg from './TweetImg'

const TopTweets = () => {
    const [tweetData, setTweetData] = useState<tweetsType[]>([])

    useEffect(() => {
        setTweetData(tweets)
    }, [])
  return (
    <div className='flex justify-center items-center my-8'>
        <div>
            <h1 className='text-center text-4xl text-orange-300 my-8'>Top Tweets by me :p</h1>
            <div className='flex justify-center flex-wrap'>
                {
                    tweetData && tweetData.map(tweet => <TweetImg tweet={tweet.image} key={tweet.id}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default TopTweets