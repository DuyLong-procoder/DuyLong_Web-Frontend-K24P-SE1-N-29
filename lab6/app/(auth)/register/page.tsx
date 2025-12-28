"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main style={{ padding: 24 }}>
      <h1>Register</h1>
      <p>Trang đăng ký (demo). Nhấn nút để giả lập đăng ký.</p>

      <button
        onClick={() => {
          router.replace("/login");
        }}
        style={{ padding: "10px 14px", marginTop: 12, cursor: "pointer" }}
      >
        Register
      </button>

      <div style={{ marginTop: 12 }}>
        Đã có tài khoản? <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
