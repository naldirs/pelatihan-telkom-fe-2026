import axios from "axios";

// Membuat instance axios (bisa ditambah baseURL jika sudah ada backend sendiri)
const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async ({ limit, skip }) => {
  try {
    const response = await apiClient.get("/products", {
      params: {
        limit: limit,
        skip: skip,
      },
    });
    // Axios otomatis mengubah response menjadi JSON, data ada di property .data
    return response.data;
  } catch (error) {
    // Melempar error agar bisa ditangkap oleh komponen UI
    throw new Error(
      error.response?.data?.message || "Gagal memuat data produk",
    );
  }
};
