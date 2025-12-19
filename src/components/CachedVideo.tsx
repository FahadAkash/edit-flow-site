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
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      playsInline
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
export default CachedVideo;
