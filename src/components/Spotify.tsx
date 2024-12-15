"use client";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSpotify } from "react-icons/bs";
import { Switch } from "./ui/switch";
import { usePathname } from "next/navigation";
import spotifyPlay from "@/appwrite/spotify";
import { useStatus } from "@/features/appState";
import { useToast } from "@/hooks/use-toast";

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
  const pathname = usePathname() 
  const {trackInfo} = useStatus()
  const {toast} = useToast()
  const [shouldSpotifyPlay, setShouldSpotifyPlay] = useState(false)
  const truncateTrack = track?.split("").slice(0, 20).join("") + (track?.split("").length > 20 ? "..." : "");
  const truncateAlbum = album?.split("").slice(0, 15).join("") + (album?.split("").length > 15 ? "..." : "");

  useEffect(() => {
    spotifyPlay.getSpotifyDoc().then(res => setShouldSpotifyPlay(res?.shouldSpotifyPlay))
  }, [])
  const handleSpotifyPlay = ()=>{
    setShouldSpotifyPlay(!shouldSpotifyPlay)
    trackInfo.setToggleSpotifyPlay(!shouldSpotifyPlay)
    if(shouldSpotifyPlay){
      toast({
        description: "Spotify Play has been deactivated!",
      })
    }else{
      toast({
        description: "Spotify Play is active now!",
      })
    }
  }
    

  return (
    <div className="flex hover:scale-110 w-full md:w-[450px] transition-all select-none cursor-pointer justify-end flex-col border-2 border-green-500 bg-green-500 p-4 rounded-2xl">
      <div className="flex relative right-0 justify-between">
        <span>Currently Playing</span>
        {trackUrl && (
          <Link href={trackUrl} target="_blank">
            <span className="flex items-center">
              Spotify <BsSpotify className="mx-2" size={30} />
            </span>
          </Link>
        )}
      </div>
      {track ? (
        <div className="flex flex-col items-end">
          <div className="flex w-full items-center space-x-4">
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
            <div>
              <div>
                <span className="inline-block text-xl md:text-2xl">{truncateTrack}</span>
              </div>
              <div>
                <span className="bg-gray-800 p-1 rounded-md">{trackType}</span>
                <span className="inline-block mx-1">•</span> <span className="md:inline-block hidden">{date}</span>
                <span className="md:inline-block mx-1 hidden">•</span>{" "}
                <span>{truncateAlbum}</span>
              </div>
              <div className="text-sm">
                {artists[0]?.name ? artists?.map(
                  (artist:any | undefined) => (
                    <span className="mr-1" key={artist.id}>
                      {artist.name} 
                    </span>
                  )
                ) : artists?.map(
                  (artist:any | undefined) => (
                    <span className="mr-1" key={artist}>
                      {artist} 
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          {
            pathname == '/manage' && <Switch checked={shouldSpotifyPlay} 
            onCheckedChange={handleSpotifyPlay} />
          }
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
