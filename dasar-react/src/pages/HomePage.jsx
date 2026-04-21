import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";
import { Paginator } from "primereact/paginator";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- State untuk Pagination ---
  const [first, setFirst] = useState(0); // Indeks data pertama di halaman aktif
  const [rows, setRows] = useState(8); // Jumlah data per halaman
  const [totalRecords, setTotalRecords] = useState(0); // Total data dari API

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Menggunakan query params 'limit' dan 'skip' untuk pagination di API
        const response = await fetch(
          `https://dummyjson.com/products?limit=${rows}&skip=${first}`,
        );

        if (!response.ok) throw new Error("Gagal mengambil data");

        const data = await response.json();
        setProducts(data.products);
        setTotalRecords(data.total); // Simpan total data untuk paginator
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [first, rows]); // Fetch ulang setiap kali 'first' atau 'rows' berubah

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // --- Template Tampilan ---
  const cardHeader = (product) => (
    <img
      alt={product.title}
      src={product.thumbnail}
      style={{ width: "100%", height: "180px", objectFit: "cover" }}
    />
  );

  if (loading) {
    return (
      <div className="flex justify-content-center mt-8">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-center mb-4">Katalog Produk</h2>

      {error && (
        <Message severity="error" text={error} className="w-full mb-4" />
      )}

      {/* Grid Card */}
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="col-12 md:col-4 lg:col-3 p-2">
            <Card
              title={product.title}
              header={cardHeader(product)}
              subTitle={`$${product.price}`}
            >
              <p
                className="text-sm line-height-2"
                style={{ height: "40px", overflow: "hidden" }}
              >
                {product.description}
              </p>
            </Card>
          </div>
        ))}
      </div>

      {/* Komponen Paginator PrimeReact */}
      <div className="card mt-4 shadow-1">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          rowsPerPageOptions={[4, 8, 12, 20]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default HomePage;
