"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../providers/AuthProvider";

export default function DashboardPage() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.replace("/login");
  }, [isLoggedIn, router]);


  if (!isLoggedIn) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Redirecting...</h1>
        <p>Bạn chưa đăng nhập, đang chuyển sang /login</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard (Protected)</h1>
      <p>Bạn đã đăng nhập</p>

      <button
        onClick={() => {
          logout();
          router.replace("/login");
        }}
        style={{ padding: "10px 14px", marginTop: 12 }}
      >
        Logout
      </button>
    </main>
  );
}
