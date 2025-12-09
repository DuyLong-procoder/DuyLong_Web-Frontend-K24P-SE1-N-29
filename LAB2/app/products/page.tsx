// app/products/page.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Bradley Burgess 2", price: "$20.00" },
  { id: 2, name: "Allie Sharp", price: "$30.00" },
  { id: 3, name: "Nathaniel Baldwin", price: "$40.00" },
  { id: 4, name: "Effie Rios", price: "$40.00" },
  { id: 5, name: "Wooden Bird", price: "$25.00" },
  { id: 6, name: "Lamp", price: "$35.00" },
  { id: 7, name: "Black Pot", price: "$18.00" },
  { id: 8, name: "Green Pot", price: "$22.00" },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <div className="products-layout">
        {/* Left: product grid */}
        <section className="products-grid">
          {products.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-image" />
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-price">{p.price}</div>
              </div>
            </article>
          ))}
        </section>

        {/* Right: filter sidebar */}
        <aside className="filter-sidebar">
          {/* Category */}
          <div className="filter-group">
            <div className="filter-title">Category</div>
            <div className="filter-option">
              <span className="filter-bullet" />
              <span>Kids</span>
            </div>
            <div className="filter-option">
              <span className="filter-bullet" />
              <span>Mens</span>
            </div>
            <div className="filter-option">
              <span className="filter-bullet" />
              <span>Womens</span>
            </div>
          </div>

          {/* Price filter */}
          <div className="filter-group">
            <div className="filter-title">Filter</div>
            <input
              type="range"
              min={0}
              max={200}
              defaultValue={100}
              className="price-slider"
            />
            <div className="price-value">100$</div>
          </div>

          {/* Color */}
          <div className="filter-group">
            <div className="filter-title">Color</div>
            {["Black", "Blue", "Gray", "Green", "Red"].map((c) => (
              <div key={c} className="filter-option">
                <span className="filter-bullet" />
                <span>{c}</span>
              </div>
            ))}
          </div>

          {/* Brand */}
          <div className="filter-group">
            <div className="filter-title">Color</div>
            {["Adidas", "Balenciaga", "Balmain", "Burberry", "Chloe"].map(
              (b) => (
                <div key={b} className="filter-option">
                  <span className="filter-bullet" />
                  <span>{b}</span>
                </div>
              )
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
