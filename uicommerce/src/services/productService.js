import { api } from "./api";

export const getProducts = async ({ limit, skip }) => {
  try {
    const response = await api.get("/products", {
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
