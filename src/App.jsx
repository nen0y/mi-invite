import { useEffect, useRef } from "react";

import desktopImage from "./assets/Desktop.svg";
import mobileImage from "./assets/Mobile.svg";
import cta from "./assets/CTA.svg";
import audioFile from "./assets/Ben E. King - Stand By Me.mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const hasInteractedRef = useRef(false); // tracks playback state

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!audioRef.current) return;

      const audio = audioRef.current;

      if (!hasInteractedRef.current) {
        audio.play().catch((err) => {
          console.warn("Playback failed:", err);
        });
        hasInteractedRef.current = true;
      } else {
        audio.pause();
        hasInteractedRef.current = false;
      }
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

      <div className="cta">
        <img src={cta} alt="" />
      </div>
    </main>
  );
}

export default App;
