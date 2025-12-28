"use client";

import dynamic from "next/dynamic";

const HeavyComponents = dynamic(
  () => import("../../components/heavycomponents"),
  {
    loading: () => <p>Loading heavy component...</p>,
    ssr: false,
  }
);

export default function LazyPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Lazy Loading Page</h1>
      <p>Component nặng chỉ load khi bạn vào trang này.</p>
      <HeavyComponents />
    </main>
  );
}
