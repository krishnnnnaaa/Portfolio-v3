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
  onLoop: boolean;
  setOnLoop: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StatusType {
  id: string;
  title: string;
  time: string;
  tool: string;
  workTool: string;
  note: string | null;
  toggleTool: boolean;
  toggleTime: boolean;
  togglePassword: boolean;
  setWorkTool: React.Dispatch<React.SetStateAction<string>>;
  setNote: React.Dispatch<React.SetStateAction<string | null>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setTool: React.Dispatch<React.SetStateAction<string>>;
  setToggleTool: React.Dispatch<React.SetStateAction<boolean>>;
  setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIcon: boolean;
  setToggleIcon: React.Dispatch<React.SetStateAction<boolean>>;
  shouldNoteAppear: boolean;
  setShouldNoteAppear: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleTime: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [workTool, setWorkTool] = useState('NextJS');
  const [toggleTool, setToggleTool] = useState(true)
  const [toggleIcon, setToggleIcon] = useState(true)
  const [toggleTime, setToggleTime] = useState(true)
  const [togglePassword, setTogglePassword] = useState(false)
  const [note, setNote] = useState<string | null>('')
  const [shouldNoteAppear, setShouldNoteAppear] = useState(false)
  
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
  const [onLoop, setOnLoop] = useState<boolean>(true)

  
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
    setToggleLyrics,
    onLoop,
    setOnLoop
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
        workTool, 
        setWorkTool,
        toggleTool,
        setToggleTool,
        toggleIcon,
        setToggleIcon,
        toggleTime,
        setToggleTime,
        setShouldNoteAppear,
        shouldNoteAppear,
        note,
        setNote,
        setTogglePassword,
        togglePassword
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
