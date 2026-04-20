import React from "react";
import { useSearchParams } from "react-router-dom";

function PageFour() {
  // Tambahkan kurung siku [ ] untuk mengambil elemen pertama
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const role = searchParams.get("role");

  return (
    <div>
      <h1>Halaman Empat</h1>
      <div>
        <p>
          Nama dari query parameter adalah: <b>{name || "Tidak ada"}</b>
        </p>
        <p>
          Peran dari query parameter adalah: <b>{role || "Tidak ada"}</b>
        </p>
      </div>
    </div>
  );
}

export default PageFour;
