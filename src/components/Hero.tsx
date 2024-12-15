"use client";
import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import Bio from "./Bio";
import Status from "./Status";
import status from "@/appwrite/status";
import { useStatus } from "@/features/appState";
import Spotify from "./Spotify";
import spotifyPlay from "@/appwrite/spotify";

interface StatusDocumentType {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  id: string;
  time: string;
  title: string;
  tool: string;
}
export interface SpotifyDocumentType {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  artists: string[],
  album: string,
  track: string,
  trackCover: string,
  trackDate: string,
  trackType: string,
  trackUrl: string
}

export default function Hero() {
  const { setId, setTime, setTitle, setTool, id, time, title, tool, trackInfo } = useStatus();
  const [statusState, setStatusState] = useState<StatusDocumentType>();
  useEffect(() => {
    status.getDoc().then((res) => setStatusState(res as StatusDocumentType));
    spotifyPlay.getSpotifyDoc().then((res)=> {
      trackInfo.setTrack(res?.track)
      trackInfo.setArtists(res?.artists)
          trackInfo.setTrackDate(res?.trackDate)
          trackInfo.setTrackImg(res?.trackCover)
          trackInfo.setTrackType(res?.trackType)
          trackInfo.setTrackUrl(res?.trackUrl)
          trackInfo.setAlbum(res?.album)
    })
    if(statusState){
      setId(statusState.id);
      setTime(statusState.time);
      setTitle(statusState.title);
      setTool(statusState.tool);
    }

  }, []);


  return (
    <div className="flex justify-between w-full md:w-[85%] md:flex-row flex-col pl-4 md:mx-auto items-start md:items-center md:mb-20 pt-8 md:mt-8">
      <div className="flex flex-col space-y-12">
        <Intro />
        <Status id={id} time={time} title={title} tool={tool} />
        <div className="w-[90%]">
      {
        trackInfo.toggleSpotifyPlay &&
        <Spotify album={trackInfo.album as string} artists={trackInfo.artists as string[]} date={trackInfo.trackDate as string} img={trackInfo.trackImg as string} track={trackInfo?.track as string} trackUrl={trackInfo.trackUrl as string} key={trackInfo?.track} trackType={trackInfo.trackType as string}/>
      }
    </div>
      </div>
      <div className="md:w-auto w-full">
        <Bio />
      </div>
    </div>
  );
}
