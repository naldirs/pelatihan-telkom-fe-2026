import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

export function useProducts({ first, rows, search, category }) {
  const skip = first;
  const limit = rows;

  const query = useQuery({
    queryKey: ["products", { first, rows, search, category }],
    queryFn: () =>
      getProducts({
        limit,
        skip,
        search,
        category,
      }),
    keepPreviousData: true,
  });

  // raw data dari API
  const rawProducts = query.data?.products || [];

  // filter category di frontend
  const filteredProducts = category
    ? rawProducts.filter((p) => p.category === category)
    : rawProducts;

  return {
    ...query,
    products: filteredProducts,
    total: query.data?.total || 0,
  };
}
