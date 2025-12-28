"use client";

import { lazy, Suspense } from "react";

const HeavyComponents = lazy(() => import("../../components/heavycomponents"));

export default function Lazy2Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Lazy Loading (React.lazy)</h1>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponents />
      </Suspense>
    </main>
  );
}
