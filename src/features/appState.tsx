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
  trackLyrics: [string];
  setTrackLyrics: React.Dispatch<React.SetStateAction<[string]>>;
  toggleLyrics: boolean;
  setToggleLyrics: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface LyricsLine {
  startTimeMs: string;
  words: string;
  syllables: string[];
  endTimeMs: string;
}

// interface Lyrics {
//   alternatives: any[]; // Replace `any` with a more specific type if known
//   capStatus: string;
//   isDenseTypeface: boolean;
//   isRtlLanguage: boolean;
//   isSnippet: boolean;
//   language: string;
//   lines: [LyricsLine];
//   provider: string;
//   providerDisplayName: string;
//   providerLyricsId: string;
//   showUpsell: boolean;
//   syncLyricsUri: string;
//   syncType: string;
// }

export const initialLyricsLine:LyricsLine = {
  startTimeMs: '',
  words: '',
  syllables: [],
  endTimeMs: '',
}

// const initialLyrics:Lyrics = {
//   alternatives: [] ,
//   capStatus: '',
//   isDenseTypeface: false,
//   isRtlLanguage: false,
//   isSnippet: false,
//   language: '',
//   lines: [initialLyricsLine],
//   provider: '',
//   providerDisplayName: '',
//   providerLyricsId: '',
//   showUpsell: false,
//   syncLyricsUri: '',
//   syncType: '',
// }


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
  const [toggleLyrics, setToggleLyrics] = useState<boolean>(false);
  const [trackLyrics, setTrackLyrics] = useState<[string]>(['']);
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
    setToggleSpotifyPlay,
    setTrackLyrics,
    trackLyrics,
    toggleLyrics,
    setToggleLyrics
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
