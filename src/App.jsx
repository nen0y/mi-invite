import { useEffect, useRef } from "react";

import desktopImage from "./assets/Desktop.png";
import mobileImage from "./assets/Mobile.png";
import audioFile from "./assets/probass-hardi-dobrogo-vechora-mi-z-ukraini-(meloua.com).mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Playback failed:", err);
        });
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // Listen to both desktop and mobile interaction
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <main>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="Responsive" />
      </picture>

      <audio ref={audioRef} src={audioFile} />
    </main>
  );
}

export default App;
