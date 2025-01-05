"use client";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsSpotify } from "react-icons/bs";
import { Switch } from "./ui/switch";
import { usePathname } from "next/navigation";
import spotifyPlay from "@/appwrite/spotify";
import { useStatus } from "@/features/appState";
import { TbMicrophone2 } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const Spotify = ({
  img,
  album,
  trackType,
  track,
  artists,
  date,
  trackUrl,
}: {
  img: string;
  trackType: string;
  album: string;
  track: string;
  artists: any | undefined;
  date: string;
  trackUrl: string;
}) => {
  const { toast } = useToast();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathname = usePathname();
  const { trackInfo } = useStatus();
  const [shouldSpotifyPlay, setShouldSpotifyPlay] = useState(true);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const truncateTrack =
    track?.split("").slice(0, 20).join("") +
    (track?.split("").length > 20 ? "..." : "");
  const truncateAlbum =
    album?.split("").slice(0, 15).join("") +
    (album?.split("").length > 15 ? "..." : "");
    let truncatedArtists = artists?.map((artist: string) => artist.length > 10 ? artist.slice(0, 10) + "..." : artist)
    truncatedArtists = truncatedArtists?.length > 2 ? truncatedArtists?.slice(0,2).concat("...") : truncatedArtists;
    
    useEffect(() => {
      spotifyPlay
      .getSpotifyDoc()
      // setStartTime(Date.now());
      
    }, []);
    useEffect(() => {
      if(intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setStartTime(Date.now());
      updateProgressBar()

        return () => {
          // Cleanup on component unmount or before the next effect runs
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
        
      }, [trackInfo.progress]);
      
      
      const updateProgressBar = ()=>{
    intervalRef.current = setInterval(() => {
      const ElapsedTime = Date.now() - startTime;
      const currentProgress = trackInfo.progress + ElapsedTime;
      if(currentProgress >= trackInfo.duration){
        clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
        intervalRef.current = null;
      }else{
        const progressPercentage = (currentProgress / trackInfo.duration) * 100;
        const progress = document.getElementById('progress-bar')
        if(progress){
          progress.style.width = `${progressPercentage}%`;
        }
      }
        
      }, 1000);
      }




  const handleSpotifyPlay = () => {
    setShouldSpotifyPlay(!shouldSpotifyPlay);
    trackInfo.setToggleSpotifyPlay(!shouldSpotifyPlay);
    
    if (shouldSpotifyPlay) {
      toast({
        description: "Spotify Play has been deactivated!",
      });
    } else {
      console.log(trackInfo.trackUrl);
      toast({
        description: "Spotify Play is active now!",
      });
    }
  };

  return (
    <div className="flex hover:scale-110 w-full md:w-[450px] transition-all select-none cursor-pointer justify-end flex-col border-2 border-green-500 bg-green-500 p-4 rounded-2xl shadow-[12px_10px_15px_-6px_rgba(0,_0,_0,_1)]">
      <div className="flex relative right-0 items-center justify-between">
        <span>Currently Playing</span>
        {trackUrl && (
          <Link href={trackUrl} target="_blank">
            <span className="flex items-center">
              Spotify <BsSpotify className="mx-2 md:text-2xl text-2xl" />
            </span>
          </Link>
        )}
      </div>
      {track ? (
        <div className="flex flex-col items-end">
          <div className="flex w-full items-center mt-2.5 space-x-4">
            <div className="container">
              {img && (
                <Image
                  src={img}
                  alt="track"
                  height={100}
                  className="rounded-full animate-spin-slow"
                  width={100}
                />
              )}
              <div className="spot"></div>
            </div>
            <div className="w-full flex flex-col">
              <div className="overflow-hidden relative whitespace-nowrap ">
              <Link href={trackUrl} target="_blank">
                <span className="inline-block hover:underline text-base md:text-xl">
                  {truncateTrack}
                </span>
          </Link>
              </div>
              <div className="md:text-base text-xs">
                <span className="md:inline-block hidden bg-gray-800 p-1 rounded-md">{trackType}</span>
                <span className="hidden md:inline-block mx-1">•</span>{" "}
                <span className="md:inline-block hidden">{date}</span>
                <span className="md:inline-block mx-1 hidden">•</span>{" "}
                <span className="inline-block md:hidden">Album: </span>{" "}
                <span>{truncateAlbum}</span>
              </div>
              <div className="text-xs md:text-sm flex w-full justify-between">
                <div>
              {/* if the list contains artists details with their names */}
                {truncatedArtists[0]?.name
                  ? truncatedArtists?.map((artist: any | undefined, index: string) => (
                    <span className="mr-1" key={index}>
                        {artist?.name}
                      </span>
                    ))
                    :
                    truncatedArtists?.map((artist: any | undefined) => (
                      // if the list contains artists names only
                      <span className="mr-1" key={artist}>
                        {artist}
                      </span>
                    ))}
                    </div>
                    {
                      pathname == "/" && trackInfo.trackLyrics.length != 1 &&
                      <TbMicrophone2
                      onClick={()=> trackInfo.setToggleLyrics(true)}
                      className="bg-[#093d3d] hover:scale-110 transition-all p-1.5 rounded-full"
                      size={30}
                      />  
                    }{
                      pathname == "/" && trackInfo.trackLyrics.length == 1 &&
                      <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                      <TbMicrophone2
                      className="bg-[#181818c2] text-[#6d6d6d] p-1.5 rounded-full"
                      size={30}
                      />
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-600 text-white p-2 rounded-lg border-none outline-none" >
                          <p>Lyrics are unavailable at this moment.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    }
              </div>
            </div>
          </div>
          {pathname == "/manage" && (
            <Switch
            checked={shouldSpotifyPlay}
            onCheckedChange={handleSpotifyPlay}
            />
          )}
          <div id="progress-bar" className="h-1 relative -bottom-[1.2rem] self-baseline flex  bg-gray-800"></div>
        </div>
      ) : (
        <span className="inline-block my-4">
          Fetching <Loader2Icon className="animate-spin inline" />
        </span>
      )}
    </div>
  );
};

export default Spotify;
