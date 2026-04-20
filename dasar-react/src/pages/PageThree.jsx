import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PageThree() {
  const { id, name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Halaman Tiga</h1>
      <div>
        <p>
          Nilai segment yang ditangkap adalah: <b>{id}</b>
        </p>
        <p>
          Nama segment yang ditangkap adalah: <b>{name}</b>
        </p>
      </div>

      <button
        onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
      >
        Kembali
      </button>
    </div>
  );
}

export default PageThree;
