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
import { TbMicrophone2 } from "react-icons/tb";
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
  const pathname = usePathname();
  const { trackInfo } = useStatus();
  const { toast } = useToast();
  const [shouldSpotifyPlay, setShouldSpotifyPlay] = useState(false);
  const truncateTrack =
    track?.split("").slice(0, 20).join("") +
    (track?.split("").length > 20 ? "..." : "");
  const truncateAlbum =
    album?.split("").slice(0, 15).join("") +
    (album?.split("").length > 15 ? "..." : "");
    let truncatedArtists = artists?.map((artist: string) => artist.length > 10 ? artist.slice(0, 10) + "..." : artist)
    truncatedArtists = truncatedArtists?.length > 2 ? truncatedArtists?.slice(0,2).concat("...") : truncatedArtists;
    const hasMultipleArtists = truncatedArtists?.length > 1;
    
    useEffect(() => {
      spotifyPlay
      .getSpotifyDoc()
      .then((res) => setShouldSpotifyPlay(res?.shouldSpotifyPlay));
  }, []);

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
    <div className="flex hover:scale-110 w-full md:w-[450px] transition-all select-none cursor-pointer justify-end flex-col border-2 border-green-500 bg-green-500 p-4 rounded-2xl">
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
                <span className="inline-block text-base md:text-xl">
                  {truncateTrack}
                </span>
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

              {/* if there is only one artist than render this */}
                {truncatedArtists[0]?.name
                  ? truncatedArtists?.map((artist: any | undefined) => (
                    <span className="mr-1" key={artist.id}>
                        {artist.name}
                      </span>
                    ))
                    :
                    truncatedArtists?.map((artist: any | undefined) => (
                      // if there are more than one artist than render this 
                      <span className="mr-1" key={artist}>
                        {artist}
                      </span>
                    ))}
                    </div>
                    {
                      pathname == "/" && trackInfo.trackLyrics.length != 1 ?
                      <TbMicrophone2
                      onClick={()=> trackInfo.setToggleLyrics(true)}
                      className="bg-[#093d3d] hover:scale-110 transition-all p-1.5 rounded-full"
                      size={30}
                      /> : <TbMicrophone2
                      className="bg-[#181818c2] text-[#6d6d6d] cursor-none p-1.5 rounded-full"
                      size={30}
                      />
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
