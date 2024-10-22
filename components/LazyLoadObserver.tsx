'use client';

import { useInView } from 'react-intersection-observer';

interface LazyLoaderObserverProps {
  children: React.ReactNode;
}

export default function LazyLoaderObserver({
  children,
}: LazyLoaderObserverProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? 'motion-safe:animate-slide-up' : ''}`}
    >
      {children}
    </div>
  );
}
