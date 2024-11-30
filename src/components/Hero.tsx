"use client";
import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import Bio from "./Bio";
import Status from "./Status";
import status from "@/appwrite/status";
import { useStatus } from "@/features/appState";

interface DocumentType {
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

export default function Hero() {
  const { setId, setTime, setTitle, setTool, id, time, title, tool } = useStatus();
  const [statusState, setStatusState] = useState<DocumentType>();
  useEffect(() => {
    status.getDoc().then((res) => setStatusState(res as DocumentType));
    if(statusState){
      setId(statusState.id);
      setTime(statusState.time);
      setTitle(statusState.title);
      setTool(statusState.tool);
    }
  }, [statusState]);
  
  
  return (
    <div className="flex justify-between w-full md:w-[85%] md:flex-row flex-col pl-4 md:mx-auto items-start md:items-center md:mb-20 pt-8 md:mt-8">
      <div className="flex flex-col space-y-12">
        <Intro />
        <Status id={id} time={time} title={title} tool={tool} />
      </div>
      <div className="md:w-auto w-full">
        <Bio />
      </div>
    </div>
  );
}
