import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/productService';

export function useProductDetail(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id, // hanya jalan kalau id ada
  });
}