import { useEffect, useState } from 'react';

export default function ScrollingTextBanner() {
  const [randomSentence, setRandomSentence] = useState('');

  useEffect(() => {
    const sentences = [
      'Tuan is going to put NixOS on every computer he owns.',
      'Song of the Year: APT by Bruno Mars, Rosé (Spotify Wrapped, 2024).',
      'Ask Tuan about his home server, he really loves his home server.',
      'Runescape is the only game Tuan plays anymore.',
      'Previously at Arima Data, Skinopathy, Artemis Data, Tesla, CertiK, and 4PAY.',
      'Currently Watching: Better Call Saul (Season 3).',
      '39,326 Minutes Listened (Spotify Wrapped, 2024).',
      'Artist of the Decade: The Weeknd (Spotify Wrapped, 2020).',
      'Artist of the Year: Knock2 (Spotify Wrapped, 2024).',
      "Tuan once broke prod at 4PAY - be careful with SSH, y'all.",
      'PSA: Pocketbase is awesome.',
      "Tuan's Nginx reverse proxy brought you here.",
      'Brought to You By: My $6 per month Digital Ocean Droplet.',
      'Drink your water, guys!',
      '"If you\'ve got health insurance I want you to prove it right now" - Dillon Francis'
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setRandomSentence(sentences[randomIndex]);
  }, []);
  return (
    <>
      {/* Scrolling Banner */}
      <div className="flex w-screen items-center border-t-4 border-b-4 border-white py-8 h-8 text-3xl">
        <p className="scrolling-text">{randomSentence}</p>
      </div>
    </>
  );
}
