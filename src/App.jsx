import { useEffect, useRef } from "react";

import desktopImage from "./assets/Desktop.svg";
import mobileImage from "./assets/Mobile.svg";
import audioFile from "./assets/probass-hardi-dobrogo-vechora-mi-z-ukraini-(meloua.com).mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.warn("Playback failed:", err);
          });
        }
      }, 0);

      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <main>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="Responsive" />
      </picture>

      <audio ref={audioRef} src={audioFile} preload="auto" />
    </main>
  );
}

export default App;
