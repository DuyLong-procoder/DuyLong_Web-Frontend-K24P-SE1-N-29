"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/providers/AuthProvider";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  return (
    <nav
      style={{
        display: "flex",
        gap: 16,
        padding: 16,
        borderBottom: "1px solid #ddd",
        alignItems: "center",
      }}
    >
      <Link href="/lazy">Lazy</Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>

      <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
        {!isLoggedIn ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button
              onClick={() => {
                logout();
                router.replace("/login");
              }}
              style={{ padding: "6px 10px", cursor: "pointer" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
