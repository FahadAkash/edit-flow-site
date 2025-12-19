import React, { useEffect, useState } from 'react';

interface CachedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  fallbackSrc?: string;
}

const CachedVideo: React.FC<CachedVideoProps> = ({ src, fallbackSrc, ...props }) => {
  const [videoSrc, setVideoSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt caching in background, but render immediate src first
    const cacheVideo = async () => {
      if (!('caches' in window)) return;
      try {
        const cache = await caches.open('video-cache-v1');
        const cachedResponse = await cache.match(src);

        if (cachedResponse) {
          const blob = await cachedResponse.blob();
          const url = URL.createObjectURL(blob);
          setVideoSrc(url);
        } else {
             // Cache for future visits, but don't block current playback
             fetch(src).then(res => {
                 if(res.ok) cache.put(src, res.clone());
             }).catch(e => console.error("Cache failed", e));
        }
      } catch (err) {
        console.error('Error accessing video cache:', err);
      }
    };

    cacheVideo();
  }, [src]);

  // Force play on mount/update because some browsers are picky about autoplay in lazy/cached components
  useEffect(() => {
      if (videoRef.current && !hasError) {
          videoRef.current.defaultMuted = true; // Crucial for some browsers
          videoRef.current.muted = true;
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
              playPromise.catch(error => {
                  console.log("Autoplay prevented:", error);
                  // Interactive fallback could go here
              });
          }
      }
  }, [videoSrc, hasError]);

  const [isLoading, setIsLoading] = useState(true);

  if (hasError && fallbackSrc) {
    return (
       <iframe 
         src={`${fallbackSrc}?autoplay=1&mute=1&controls=0&loop=1&playlist=${fallbackSrc.split('/').pop()}`}
         className={props.className}
         title="Video fallback"
         frameBorder="0" 
         allow="autoplay; encrypted-media; loop"
         allowFullScreen
       />
    );
  }

  return (
    <div className="relative w-full h-full block">
        {/* Loading Spinner */}
        <div 
            className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}
        >
             <div className="w-10 h-10 border-4 border-white/10 border-t-[#FFB300] rounded-full animate-spin"></div>
        </div>

        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          {...props}
          onError={() => setHasError(true)}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onPlaying={() => setIsLoading(false)}
        />
    </div>
  );
};
export default CachedVideo;
