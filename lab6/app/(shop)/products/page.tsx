import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 25000000 },
  { id: 2, name: "Samsung S24", price: 22000000 },
  { id: 3, name: "Xiaomi 14", price: 15000000 },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Product List</h1>

      <ul style={{ marginTop: 12 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <Link href={`/products/${p.id}`}>
              {p.name} - {p.price.toLocaleString("vi-VN")}đ
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
