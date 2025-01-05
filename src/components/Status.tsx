"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mood } from "@/app/mood";
import { Loader2 } from "lucide-react";
import spotify from '../assets/code/spotify.webp'
import { workspaceStack } from "@/app/workspacetoolicons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Status({
  id,
  tool,
  time,
  title,
  workTool,
  toggleTool
}: {
  id: string;
  tool: string;
  time: string;
  title: string;
  workTool: string;
  toggleTool: boolean;
}) {
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("04:35:04 PM");
  const [elapsedTime, setElapsedTime] = useState<{
    hours: number;
    minutes: number;
  }>();
  const router = useRouter();

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setTimeout(() => {
          router.push("/manage");
          console.log(clickCount);
        }, 2000);
        return 0;
      }
      return newCount;
    });
  };

  const calculateElapsedTime = (
    inputTime: string
  ): { hours: number; minutes: number } => {
    const [hours, minutes] = inputTime.split(":").map(Number);
    const now = new Date();
    const inputDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );

    const diffInMs = now.getTime() - inputDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / 60000);

    return {
      hours: Math.floor(diffInMinutes / 60),
      minutes: diffInMinutes % 60,
    };
  };

  const item = mood.find((obj) => obj.id === id);
  let workspaceTool = workspaceStack.find((tool) => tool.name === workTool);


  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(calculateElapsedTime(time));

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        second: "2-digit",
      });
      setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex space-y-4 flex-col items-start">
      <div className="text-2xl text-orange-300 select-none hover:scale-110 transition-all">
        Status
      </div>
      <div className="flex space-x-4 md:ml-0 items-start">
        <div>
          <Image
            src={item?.image as StaticImageData}
            alt="next"
            onClick={handleClick}
            className="hover:scale-110 transition-all"
            height={80}
            width={80}
          />
          {
            workspaceTool &&
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
  <Image src={workspaceTool?.image as StaticImageData} className="rounded-full hover:scale-110 transition-all bg-[#010a15] relative -top-5 left-[62px] p-1.5" alt="img" height={35} width={35}/>
    </TooltipTrigger>
    <TooltipContent className="bg-gray-600 text-white p-2 rounded-lg border-none outline-none" >
      <p>{workspaceTool.name}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
          }
        </div>
        {!elapsedTime ? (
          <p className="flex my-auto text-orange-300 font-semibold">
            Fetching <Loader2 className="mx-2 inline-block animate-spin" />
          </p>
        ) : (
          <div className="flex flex-col text-white w-[220px] md:w-[250px] overflow-hidden whitespace-nowrap">
            <span
              className={`text-base md:text-xl text-fuchsia-600 font-semibold w-fit select-none transition-all ${
                title.length > 25 ? "animate-scroll" : ""
              }`}
            >
              {title}
            </span>
            <span className="font-semibold text-base select-none">
              Elapsed: {elapsedTime.hours < 10 ? "0" : ""}
              {elapsedTime?.hours}
              <span className="md:hidden inline-block">:</span>
              <span className="hidden md:inline-block mx-1">
                {elapsedTime.hours == 1 ? "hour and" : "hours and"}
              </span>

              <span className="hidden">:</span>
              {elapsedTime.minutes < 10 ? "0" : ""}
              {elapsedTime?.minutes}{" "}
              <span className="md:inline-block hidden"> minutes</span>{" "}
            </span>
            
            <div className="flex space-x-2 text-base md:text-xl items-baseline">
              {
                toggleTool &&
                <>
                <span className="md:text-lg select-none">Tool: {tool}</span>
                <span className="select-none">•</span>
                </>
              }
              <span className={`text-cyan-600 select-none ${toggleTool && "hover:scale-110"} transition-all text-base`}>
                {currentTime}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
