import React, { useState } from "react";
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";
import { Paginator } from "primereact/paginator";
import { InputText } from "primereact/inputtext"; // Tambahan untuk UI
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories"; // Hook kategori
import ProductCard from "../components/ProductCard";

function HomePage() {
  // --- State Utama ---
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // --- Data Fetching ---
  const { data: categories = [], isLoading: catLoading } = useCategories();

  // Masukkan search dan category ke hook
  const { data, isLoading, isError, error } = useProducts({
    first,
    rows,
    search,
    category,
  });

  // --- Handlers ---
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFirst(0); // Reset ke halaman pertama saat mencari
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFirst(0); // Reset ke halaman pertama saat filter kategori
  };

  if (isLoading) {
    return (
      <div className="flex justify-content-center mt-8">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-center mb-4 font-bold">Katalog Produk</h2>

      {/* --- BAGIAN SEARCH & FILTER --- */}
      <div className="flex flex-column md:flex-row gap-3 mb-4">
        <span className="p-input-icon-left flex-1">
          <InputText
            placeholder="Cari produk..."
            className="w-full"
            value={search}
            onChange={handleSearchChange}
          />
        </span>

        {catLoading ? (
          <div className="p-inputtext flex align-items-center justify-content-center">
            <i className="pi pi-spin pi-spinner mr-2"></i> Loading...
          </div>
        ) : (
          <select
            className="p-inputtext w-full md:w-15rem"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {isError && (
        <Message
          severity="error"
          text={error.message}
          className="w-full mb-4"
        />
      )}

      {/* --- GRID PRODUK --- */}
      <div className="grid">
        {data?.products?.length > 0 ? (
          data.products.map((p) => (
            <div
              key={p.id}
              className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2"
            >
              <ProductCard product={p} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-gray-500">Produk tidak ditemukan.</p>
          </div>
        )}
      </div>

      {/* --- PAGINATION --- */}
      <div className="card mt-4 shadow-1">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={data?.total || 0}
          rowsPerPageOptions={[4, 8, 12, 20]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default HomePage;
