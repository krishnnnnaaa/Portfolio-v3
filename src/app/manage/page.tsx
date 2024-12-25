"use client";
import Mood from "@/components/Mood";
import Status from "@/components/Status";
import Time from "@/components/Time";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useEffect, useState } from "react";
import ToolSet from "@/components/ToolSet";
import { initialLyricsLine, LyricsLine, useStatus } from "@/features/appState";
import status from "@/appwrite/status";
import { AlertTriangle, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Spotify from "@/components/Spotify";
import spotifyPlay from "@/appwrite/spotify";
import { useToast } from "@/hooks/use-toast";
import WorkspaceTool from "@/components/WorkspaceTool";

export default function Manage() {
  const { toast } = useToast();
  const router = useRouter();
  const { id, time, title, tool, trackInfo, workTool } = useStatus();
  const [lyricsFile, setlyricsFile] = useState<[LyricsLine]>([
    initialLyricsLine,
  ]);
  const [inspectSpotify, setInspectSpotify] = useState(false);
  const [isSpotifyPlaying, setIsSpotifyPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<undefined | any>();
  const [isSubmmited, setisSubmmited] = useState(false);

  const handleStatusEvent = () => {
    // handle status submit button and save the new data to the appwrite db
    setisSubmmited(true);
    status.saveDocument({ id, time, title, tool, workTool });
    setisSubmmited(false);
  };

  // function to extract access_token from browser url and save it to the localstorage for future use
  const extractAccessToken = () => {
    // after removing, extact the new one from browser url and store it to the ls
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem(
        "spotify_br_id",
        JSON.stringify({
          id: accessToken,
          expiration_time: new Date().setHours(new Date().getHours() + 1),
        })
      );
      setInspectSpotify(true);
    } else {
      setInspectSpotify(false);
      return null;
    }

    return accessToken;
  };

  // set the SpotifyPlay data to the global context from the local state
  useEffect(() => {
    trackInfo.setAlbum(currentlyPlaying?.item.album.name);
    trackInfo.setArtists(currentlyPlaying?.item.album.artists);
    trackInfo.setTrack(currentlyPlaying?.item.name);
    trackInfo.setTrackDate(currentlyPlaying?.item.album.release_date);
    trackInfo.setTrackImg(currentlyPlaying?.item.album.images[0].url);
    trackInfo.setTrackType(currentlyPlaying?.currently_playing_type);
    trackInfo.setTrackUrl(currentlyPlaying?.item.external_urls.spotify);

    // save the newly fetched data into the appwrite db
    if (currentlyPlaying?.item.external_urls.spotify) {
      const artists = currentlyPlaying?.item.album.artists.map(
        (item: { name: string }) => item.name
      );

      // fetch lyrics from given response
      const lyrics = lyricsFile.map((item: { words: string }) => item.words);

      spotifyPlay.saveSpotifyDocument({
        track: currentlyPlaying?.item.name,
        artists: artists,
        trackDate: currentlyPlaying?.item.album.release_date,
        trackType: currentlyPlaying?.currently_playing_type,
        trackUrl: currentlyPlaying?.item.external_urls.spotify,
        album: currentlyPlaying?.item.album.name,
        trackCover: currentlyPlaying?.item.album.images[0].url,
        shouldSpotifyPlay: trackInfo.toggleSpotifyPlay,
        lyrics: JSON.stringify(lyrics),
      });
    }
  }, [currentlyPlaying, trackInfo.toggleSpotifyPlay, lyricsFile]);

  // extract token and fetch Currently-playing-music on every render
  useEffect(() => {
    const accessToken = extractAccessToken();
    if (accessToken != null) {
      fetchCurrentlyPlayingMusic(accessToken);
    } else {
      setCurrentlyPlaying(undefined);
      setIsSpotifyPlaying(false);
    }
  }, []);

  // function to fetch Currently-playing-music
  const fetchCurrentlyPlayingMusic = async (accessToken: string) => {
    try {
      const tokensh: any | undefined = await getCurrentlyPlayingSong(
        accessToken as string
      );

      if (tokensh != undefined) {
        setCurrentlyPlaying(tokensh);
        setIsSpotifyPlaying(true);
        toast({
          description: "Spotify Play has been updated!",
        });

        showLyrics(tokensh.item.id);
      } else {
        setIsSpotifyPlaying(false);
        trackInfo.setToggleSpotifyPlay(false);
      }
    } catch (error) {
      console.error("Error fetching token: ", error);
    }
  };

  // inner function of fetchCurrentlyPlayingMusic
  const getCurrentlyPlayingSong = async (token: string) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching currently playing song: ", error.message);
      }
      throw error;
    }
  };

  const showLyrics = async (trackId: string) => {
    const url = `https://spotify23.p.rapidapi.com/track_lyrics/?id=${trackId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setlyricsFile(result.lyrics.lines);
      console.log(result.lyrics.lines);
    } catch (error) {
      console.error(error);
    }
  };

  // get user auth for fetching the token
  const handleAuth = async () => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get("access_token");

    if (!token) {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${
        process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
      }&response_type=token&redirect_uri=${encodeURIComponent(
        process.env.NEXT_PUBLIC_SPOTIFY_REDIRECTED_URI as string
      )}&scope=${encodeURIComponent(
        process.env.NEXT_PUBLIC_SPOTIFY_SCOPE as string
      )}`;

      window.location.href = authUrl;
    } else {
      console.log("Access Token already  exists!");
    }
  };

  return (
    <div className="bg-[#010a15] pt-8 -mt-8 text-white min-h-screen items-center flex flex-col justify-center">
      <span className="text-4xl mb-8 text-orange-300 select-none hover:scale-110 transition-all">
        Manage Status
      </span>
      <div className="items-center flex w-full  md:w-[70%] flex-col px-8">
        <div className="flex justify-between space-y-8 md:space-x-0 md:flex-row flex-col w-full items-center md:items-end">
          <div>
            <span className="select-none">Preview</span>
            <Status id={id} time={time} title={title} tool={tool} key={id} workTool={workTool} />
          </div>
          {isSpotifyPlaying && inspectSpotify && currentlyPlaying != null ? (
            <div className="flex justify-center w-full md:w-auto">
              <Spotify
                album={trackInfo.album as string}
                artists={trackInfo.artists as string[]}
                date={trackInfo.trackDate as string}
                img={trackInfo.trackImg as string}
                track={trackInfo?.track as string}
                trackUrl={trackInfo.trackUrl as string}
                key={currentlyPlaying?.timestamp}
                trackType={trackInfo.trackType as string}
              />
            </div>
          ) : (
            ""
          )}
          {currentlyPlaying == undefined && !isSpotifyPlaying && (
            <div className="flex justify-center md:w-auto w-full">
              <Alert className="bg-green-500 border-green-500 w-full md:w-[400px] text-white">
                <AlertTriangle className="h-4 w-4" color="white" />
                <AlertTitle>Alert!</AlertTitle>
                <AlertDescription>No music is playing here.</AlertDescription>
              </Alert>
            </div>
          )}
        </div>
        <Separator
          className="w-full bg-gray-600 my-8"
          orientation="horizontal"
        />
        <div className="flex flex-col space-y-8">
          <Mood />
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 justify-between space-x-0">
            <Title />
            <ToolSet />
            <WorkspaceTool/>
            <Time />
          </div>
          <Button
            onClick={handleStatusEvent}
            disabled={isSubmmited}
            className="bg-fuchsia-600 hover:bg-fuchsia-800"
          >
            {isSubmmited ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Save changes"
            )}
          </Button>
          <Button
            onClick={handleAuth}
            className="my-4 bg-green-500 hover:bg-green-600"
          >
            Get Spotify Play
          </Button>
          <Button onClick={() => router.push("/")} className="my-4">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
