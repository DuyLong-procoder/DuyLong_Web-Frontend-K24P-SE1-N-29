"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../providers/AuthProvider";

export default function LoginPage() {
  const { isLoggedIn, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.replace("/dashboard");
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return (
      <main style={{ padding: 24 }}>
        <p>Đang chuyển sang Dashboard...</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <p>Nhấn nút để đăng nhập (demo client-side state)</p>

      <button
        onClick={() => {
          login();
          router.replace("/dashboard");
        }}
        style={{ padding: "10px 14px", marginTop: 12, cursor: "pointer" }}
      >
        Login
      </button>

      <div style={{ marginTop: 12 }}>
        Chưa có tài khoản? <Link href="/register">Register</Link>
      </div>
    </main>
  );
}
