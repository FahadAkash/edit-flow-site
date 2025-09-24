import { useEffect, useState, useRef } from 'react';

export const useIntersection = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.2,
      ...options
    });

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options]);

  return { elementRef, isIntersecting };
};