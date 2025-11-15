import React, { useRef, useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function MapEmbed() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const query = encodeURIComponent("Raaz Unani Dawakhana, Hindupur, Andhra Pradesh");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const iframeSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  // Format time mm:ss
  const formatTime = (t) => {
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Update time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeUpdate = () => setCurrentTime(video.currentTime);
    const loadedMeta = () => setDuration(video.duration);

    video.addEventListener("timeupdate", timeUpdate);
    video.addEventListener("loadedmetadata", loadedMeta);

    return () => {
      video.removeEventListener("timeupdate", timeUpdate);
      video.removeEventListener("loadedmetadata", loadedMeta);
    };
  }, []);

  // Play / Pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.muted = false; // enable sound
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="mt-8 space-y-6">

      {/* Custom Reel Player */}
      <div
        className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black"
        onClick={togglePlayPause}  // Tap area to toggle play/pause
      >

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/videos/raaz.mp4"
          className="w-full h-full object-cover"
          playsInline
          loop
        />

        {/* PLAY BUTTON (shows only when paused) */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* VIDEO TIME */}
        <div className="absolute bottom-3 left-4 right-4 text-white text-sm font-medium 
                        bg-black/40 px-3 py-1 rounded-full w-fit mx-auto">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={iframeSrc}
          title="Raaz Unani Map"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* BUTTON */}
      <div className="flex justify-end">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#EBCB74]
          text-[#0a0f0c] px-4 py-2 rounded-full font-semibold
          hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <MapPin size={18} />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </div>
  );
}
