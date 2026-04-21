import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/productService';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,

    // karena jarang berubah
    staleTime: 1000 * 60 * 10, // 10 menit
    cacheTime: 1000 * 60 * 30, // 30 menit
  });
}