import { api } from './api';

export const getProducts = async (params) => {
  const { limit, skip, search, category } = params;

  let endpoint = '/products';
  let queryParams = { limit, skip };

  if (category) {
    endpoint = `/products/category/${category}`;
  } else if (search) {
    endpoint = '/products/search';
    queryParams.q = search;
  }

  const res = await api.get(endpoint, {
    params: queryParams,
  });

  return res.data;
};

// detail product
/*
export async function getProducts(params) {
  const res = await api.get('/products', { params });
  return res.data;
}
  */
export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await api.get('/products/categories');
  return res.data;
};