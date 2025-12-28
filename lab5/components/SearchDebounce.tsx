"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SearchItem = {
  title: string;
  desc: string;
};

const SearchDebounce = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const performSearch = useCallback((q: string) => {
    console.log("Search triggered for:", q);

    if (!q.trim()) {
      setResults([]);
      return;
    }

    setResults([
      { title: `Kết quả 1 cho "${q}"`, desc: `Mô tả chi tiết cho kết quả tìm kiếm 1` },
      { title: `Kết quả 2 cho "${q}"`, desc: `Mô tả chi tiết cho kết quả tìm kiếm 2` },
      { title: `Kết quả 3 cho "${q}"`, desc: `Mô tả chi tiết cho kết quả tìm kiếm 3` },
    ]);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      performSearch(keyword);
    }, 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [keyword, performSearch]);

  return (
    <section style={{ marginTop: 40 }}>
      <h2>Exercise 5: Debouncing Search with useCallback</h2>
      <p style={{ marginBottom: 14 }}>
        Nhập từ khóa để tìm kiếm. Chức năng tìm kiếm sẽ chỉ được thực hiện sau khi bạn ngừng gõ{" "}
        <b>500ms</b>, giúp tránh gọi API quá nhiều lần.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #cbd5e1",
          borderRadius: 10,
          padding: "8px 12px",
          gap: 10,
        }}
      >
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          style={{
            flex: 1,
            height: 36,
            border: "none",
            outline: "none",
            fontSize: 16,
          }}
        />
        <span style={{ opacity: 0.6 }}>🔍</span>
      </div>

      {keyword.trim() === "" ? (
        <p style={{ marginTop: 18, textAlign: "center", opacity: 0.6 }}>
          Nhập từ khóa để xem kết quả tìm kiếm
        </p>
      ) : (
        <div style={{ marginTop: 18 }}>
          {results.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "12px 0",
                borderTop: idx === 0 ? "none" : "1px solid #e2e8f0",
              }}
            >
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div style={{ opacity: 0.7, marginTop: 4 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )}

  
    </section>
  );
};

export default SearchDebounce;
