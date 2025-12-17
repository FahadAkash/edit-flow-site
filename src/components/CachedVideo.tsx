import React, { useEffect, useState } from 'react';

interface CachedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const CachedVideo: React.FC<CachedVideoProps> = ({ src, ...props }) => {
  const [videoSrc, setVideoSrc] = useState(src);

  useEffect(() => {
    const cacheVideo = async () => {
      if (!('caches' in window)) return;

      try {
        const cache = await caches.open('video-cache-v1');
        const cachedResponse = await cache.match(src);

        if (cachedResponse) {
          // If found in cache, use the blob URL
          const blob = await cachedResponse.blob();
          const url = URL.createObjectURL(blob);
          setVideoSrc(url);
        } else {
          // If not in cache, let the browser load it normally via the initial src.
          // We can try to cache it in the background for *next* time.
          // Using a slight delay to avoid contending with the immediate playback.
          setTimeout(async () => {
             try {
                const response = await fetch(src);
                if (response.ok) {
                   await cache.put(src, response.clone());
                }
             } catch (e) {
                console.error('Background caching failed', e);
             }
          }, 3000);
        }
      } catch (err) {
        console.error('Error accessing video cache:', err);
      }
    };

    cacheVideo();
  }, [src]);

  return (
    <video
      src={videoSrc}
      {...props}
    />
  );
};

export default CachedVideo;
