'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const fullText = `My name is Antony. I'm a software developer based in Nairobi, Kenya.
I specialise in making things remarkable.\n\nI love Rock n Roll, 80s Music & classical symphonies. 
Yeah, Mostly Music. Sometimes, Football\n\nLet's Build, Shall we?`;
  
  const [displayedText, setDisplayedText] = useState('');
//implementing the typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="mt-7 text-5xl font-bold mb-4"><span className="text-blue-300 text-7xl">W</span>elcome</h1>
      <p className="text-lg max-w-xl bg-black/40 whitespace-pre-wrap">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  )
}

