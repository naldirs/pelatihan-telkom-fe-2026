import React, { useState } from "react";
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";
import { Paginator } from "primereact/paginator";
import { useProducts } from "../hooks/useProducts";

function HomePage() {
  // State UI untuk Paginator tetap di sini
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);

  // Menggantikan useEffect, useState(products), useState(loading), dll.
  const { data, isLoading, isFetching, isError, error } = useProducts({
    first,
    rows,
  });

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const cardHeader = (product) => (
    <img
      alt={product.title}
      src={product.thumbnail}
      style={{ width: "100%", height: "180px", objectFit: "cover" }}
    />
  );

  // Status Loading awal (saat cache masih kosong)
  if (isLoading) {
    return (
      <div className="flex justify-content-center mt-8">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Katalog Produk</h2>
        {/* Indikator kecil jika sedang fetch di background (opsional) */}
        {isFetching && <i className="pi pi-spin pi-spinner text-primary"></i>}
      </div>

      {isError && (
        <Message
          severity="error"
          text={error.message}
          className="w-full mb-4"
        />
      )}

      <div className="grid">
        {/* data.products berasal dari return API Anda */}
        {data?.products?.map((product) => (
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
