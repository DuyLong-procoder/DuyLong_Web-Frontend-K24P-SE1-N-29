import { notFound } from "next/navigation";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 25000000, description: "Apple flagship." },
  { id: 2, name: "Samsung S24", price: 22000000, description: "Samsung flagship." },
  { id: 3, name: "Xiaomi 14", price: 15000000, description: "Value flagship." },
];

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const idNumber = Number(params.id);
  const product = products.find((p) => p.id === idNumber);
  if (!product) notFound();

  return (
    <main style={{ padding: 24 }}>
      <h1>Product Details</h1>

      <p><b>ID:</b> {product.id}</p>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Price:</b> {product.price.toLocaleString("vi-VN")}đ</p>
      <p><b>Description:</b> {product.description}</p>

      <div style={{ marginTop: 16 }}>
        <Link href="/products">← Back to list</Link>
      </div>
    </main>
  );
}
