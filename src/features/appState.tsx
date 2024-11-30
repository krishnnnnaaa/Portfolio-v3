'use client'

import React, { createContext, useContext, useState } from 'react';

interface StatusType {
  id: string;
  title: string,
  time: string;
  tool: string,
  setId: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setTool: React.Dispatch<React.SetStateAction<string>>;
}


const StatusContext = createContext<StatusType | undefined>(undefined);

export const StatusProvider = ({ children }: {children:React.ReactNode}) => {
    const [id, setId] = useState('5');
    const [title, setTitle] = useState('Coding');
    const [time, setTime] = useState('06:40');
    const [tool, setTool] = useState('VS Code');
    return (
      <StatusContext.Provider value={{ id, setId, title, setTitle, time, setTime, setTool, tool }}>
        {children}
      </StatusContext.Provider>
    );
  }
  export const useStatus = () => {
    const context = useContext(StatusContext);
    
    if (!context) {
      throw new Error("useStatus must be used within a StatusProvider");
  
    }
    return context
  }