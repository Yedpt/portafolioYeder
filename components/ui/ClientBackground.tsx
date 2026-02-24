'use client';

import dynamic from 'next/dynamic';

// ssr:false solo es válido en Client Components
const StarryBackground = dynamic(
  () => import('@/components/ui/StarryBackground').then((m) => ({ default: m.StarryBackground })),
  { ssr: false, loading: () => null }
);

const TechCarousel = dynamic(
  () => import('@/components/ui/TechCarousel').then((m) => ({ default: m.TechCarousel })),
  { ssr: false, loading: () => null }
);

export function ClientBackground() {
  return <StarryBackground />;
}

export function ClientTechCarousel() {
  return <TechCarousel />;
}
