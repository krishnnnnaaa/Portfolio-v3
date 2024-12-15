'use client';

import React, { createContext, useContext, useState } from 'react';

interface TrackInfo {
  track: string | null;
  setTrack: React.Dispatch<React.SetStateAction<string | null>>;
  album: string | null;
  setAlbum: React.Dispatch<React.SetStateAction<string | null>>;
  artists: string[] | null;
  setArtists: React.Dispatch<React.SetStateAction<string[] | null>>;
  trackImg: string | null;
  setTrackImg: React.Dispatch<React.SetStateAction<string | null>>;
  trackDate: string | null;
  setTrackDate: React.Dispatch<React.SetStateAction<string | null>>;
  trackUrl: string | null;
  setTrackUrl: React.Dispatch<React.SetStateAction<string | null>>;
  trackType: string | null;
  setTrackType: React.Dispatch<React.SetStateAction<string | null>>;
  toggleSpotifyPlay: boolean;
  setToggleSpotifyPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StatusType {
  id: string;
  title: string;
  time: string;
  tool: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setTool: React.Dispatch<React.SetStateAction<string>>;
  trackInfo: TrackInfo;
}

const StatusContext = createContext<StatusType | undefined>(undefined);

export const StatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState('5');
  const [title, setTitle] = useState('Coding');
  const [time, setTime] = useState('06:40');
  const [tool, setTool] = useState('VS Code');

  // Track-related states
  const [track, setTrack] = useState<string | null>(null);
  const [album, setAlbum] = useState<string | null>(null);
  const [artists, setArtists] = useState<string[] | null>(null);
  const [trackImg, setTrackImg] = useState<string | null>(null);
  const [trackDate, setTrackDate] = useState<string | null>(null);
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackType, setTrackType] = useState<string | null>(null);
  const [toggleSpotifyPlay, setToggleSpotifyPlay] = useState<boolean>(true);
  const trackInfo: TrackInfo = {
    track,
    setTrack,
    album,
    setAlbum,
    artists,
    setArtists,
    trackImg,
    setTrackImg,
    trackDate,
    setTrackDate,
    trackUrl,
    setTrackUrl,
    trackType,
    setTrackType,
    toggleSpotifyPlay, 
    setToggleSpotifyPlay
  };

  return (
    <StatusContext.Provider
      value={{
        id,
        setId,
        title,
        setTitle,
        time,
        setTime,
        tool,
        setTool,
        trackInfo,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
};
