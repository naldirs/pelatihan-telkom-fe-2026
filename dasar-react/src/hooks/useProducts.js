import { useQuery,keepPreviousData } from '@tanstack/react-query';
import { getProducts } from '../services/productService';

export function useProducts({ first, rows }) {
  //limit dan skip untuk API pagination
  const limit = rows;
  const skip = first;

  return useQuery({
    // Tambahkan limit ke dalam queryKey agar cache-nya spesifik per ukuran halaman
    queryKey: ['products', { first, rows }], 
    queryFn: () =>
      getProducts({
        limit: limit,
        skip: skip,
      }),
    // Di v5, gunakan ini untuk pagination yang smooth:
    placeholderData: keepPreviousData, 
  });
}
