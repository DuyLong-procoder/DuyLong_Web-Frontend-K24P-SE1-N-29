"use client";

export default function ProductAlbums() {
  return (
    <section className="min-h-screen bg-white px-10 py-12">
      <h1 className="mb-6 text-xl font-semibold">Simple albums list page</h1>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Cột 1 */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Biscuit Snacks
          </h2>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-white"
              >
                <div className="h-16 w-16 rounded bg-slate-100" />
                <div className="flex flex-col">
                  <div className="mb-1 text-xs text-pink-500">★★★★☆</div>
                  <div className="text-xs text-slate-600">
                    Sample Product {i}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900">
                    $31.00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cột 2 */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Chocolate
          </h2>

          <div className="space-y-6">
            {[5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-16 w-16 rounded bg-slate-100" />
                <div className="flex flex-col">
                  <div className="mb-1 text-xs text-pink-500">★★★★☆</div>
                  <div className="text-xs text-slate-600">
                    Sample Product {i}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900">
                    $31.00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cột 3 */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Shakes Biscuit
          </h2>

          <div className="space-y-6">
            {[9, 10, 11, 12].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-16 w-16 rounded bg-slate-100" />
                <div className="flex flex-col">
                  <div className="mb-1 text-xs text-pink-500">★★★★☆</div>
                  <div className="text-xs text-slate-600">
                    Sample Product {i}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900">
                    $31.00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
