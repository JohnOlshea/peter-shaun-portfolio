"use client";

import Card from "@/components/ui/card";
import dynamic from "next/dynamic";

// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <Card className="w-26">Cool</Card>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
