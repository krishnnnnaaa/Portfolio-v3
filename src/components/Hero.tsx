"use client";
import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import Bio from "./Bio";
import Status from "./Status";
import status from "@/appwrite/status";
import { useStatus } from "@/features/appState";
import Spotify from "./Spotify";
import spotifyPlay from "@/appwrite/spotify";
import LyricPopover from "./LyricPopover";

export interface SpotifyDocumentType {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  artists: string[];
  album: string;
  track: string;
  trackCover: string;
  trackDate: string;
  trackType: string;
  trackUrl: string;
  lyrics: string;
  shouldSpotifyPlay: boolean;
}

export default function Hero() {
  const {
    setId,
    setTime,
    setTitle,
    setTool,
    id,
    time,
    title,
    tool,
    trackInfo,
    setWorkTool,
    workTool,
  } = useStatus();

  useEffect(() => {
    // Fetch initial data for status and Spotify document
    status
      .getDoc()
      .then((res) => {
        setId(res?.id);
        setTime(res?.time);
        setTitle(res?.title);
        setTool(res?.tool);
        setWorkTool(res?.workTool);
      })
      .catch((error) => console.error("Error fetching status:", error));

    spotifyPlay
      .getSpotifyDoc()
      .then((res) => {
        if (res) {
          trackInfo.setTrack(res.track);
          trackInfo.setArtists(res.artists);
          trackInfo.setTrackDate(res.trackDate);
          trackInfo.setTrackImg(res.trackCover);
          trackInfo.setTrackType(res.trackType);
          trackInfo.setTrackUrl(res.trackUrl);
          trackInfo.setAlbum(res.album);
          trackInfo.setToggleSpotifyPlay(res.shouldSpotifyPlay);
          trackInfo.setTrackLyrics(JSON.parse(res.lyrics));
        }
      })
      .catch((error) => console.error("Error fetching Spotify document:", error));

    // Subscribe to real-time spotify updates
    const unsubscribeSpotify  = spotifyPlay.getRealtimeSpotifyDoc((response) => {
      const updatedSpotifyData = response.payload as SpotifyDocumentType;

      // Update the track info state with real-time data
      if (updatedSpotifyData) {
        trackInfo.setTrack(updatedSpotifyData.track);
        trackInfo.setArtists(updatedSpotifyData.artists);
        trackInfo.setTrackDate(updatedSpotifyData.trackDate);
        trackInfo.setTrackImg(updatedSpotifyData.trackCover);
        trackInfo.setTrackType(updatedSpotifyData.trackType);
        trackInfo.setTrackUrl(updatedSpotifyData.trackUrl);
        trackInfo.setAlbum(updatedSpotifyData.album);
        trackInfo.setToggleSpotifyPlay(updatedSpotifyData.shouldSpotifyPlay);
        trackInfo.setTrackLyrics(JSON.parse(updatedSpotifyData.lyrics));
      }
    });

    const unsubscribeStatus = status.getRealtimeStatusDoc((response) => {
      const updatedStatusData = response.payload;

      if (updatedStatusData) {
        setId(updatedStatusData.id);
        setTime(updatedStatusData.time);
        setTitle(updatedStatusData.title);
        setTool(updatedStatusData.tool);
        setWorkTool(updatedStatusData.workTool);
      }
    })



    // Cleanup on component unmount
    return () => {
      if (unsubscribeSpotify) unsubscribeSpotify();
      if(unsubscribeStatus) unsubscribeStatus();
    };




  }, [setId, setTime, setTitle, setTool, setWorkTool, trackInfo]);

  return (
    <div className="flex justify-between w-full md:w-[85%] md:flex-row flex-col pl-4 md:mx-auto items-start md:items-center md:mb-20 pt-8 md:mt-8">
      <div className="flex flex-col space-y-12">
        <Intro />
        <Status id={id} time={time} title={title} tool={tool} workTool={workTool} />
        <div className="w-[95%] md:w-[90%]">
          {trackInfo.toggleSpotifyPlay && (
            <Spotify
              album={trackInfo.album as string}
              artists={trackInfo.artists as string[]}
              date={trackInfo.trackDate as string}
              img={trackInfo.trackImg as string}
              track={trackInfo.track as string}
              trackUrl={trackInfo.trackUrl as string}
              key={trackInfo.track}
              trackType={trackInfo.trackType as string}
            />
          )}
          {trackInfo.toggleLyrics && <LyricPopover lyrics={trackInfo.trackLyrics} />}
        </div>
      </div>
      <div className="md:w-auto w-full">
        <Bio />
      </div>
    </div>
  );
}
