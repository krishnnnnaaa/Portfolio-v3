'use client';

import { useStatus } from '@/features/appState';
import React from 'react';
import { MdClose } from 'react-icons/md';

interface LyricPopoverProps {
  lyrics: string[]
}

const LyricPopover: React.FC<LyricPopoverProps> = ({ lyrics }) => {
  const {trackInfo} = useStatus()
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-[6px] bg-opacity-70 flex justify-center items-center z-50">
      <div className="modal-container w-[90%] md:w-[600px] h-[600px] bg-[#00b5ff] rounded-xl shadow-lg p-4 overflow-y-scroll relative">
        <button
        onClick={()=> trackInfo.setToggleLyrics(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>

        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-4">Lyrics</h2>
          <ul className="space-y-2 w-[90%] mx-auto">
            {lyrics.length > 0 ? (
              lyrics.map((line, index) => (
                <li key={index} className="text-lg md:text-xl hover:text-white font-semibold cursor-pointer select-none my-4 hover:scale-110 transition-all text-gray-700">
                  {line}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No lyrics available.</p>
            )}
          </ul>
          {
          lyrics && 
            <span className='select-none mt-4'>Lyrics by MusixMatch</span>
          }
        </div>
      </div>
    </div>
  );
};

export default LyricPopover;
