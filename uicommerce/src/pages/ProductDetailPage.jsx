import { useParams, useNavigate } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useProductDetail(id);

  if (isLoading) return <p className="p-4">Loading...</p>;

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="p-4">
      <button className="mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="grid">
        {/* IMAGE */}
        <div className="col-12 md:col-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full border-round"
          />
        </div>

        {/* INFO */}
        <div className="col-12 md:col-6">
          <h2>{product.title}</h2>

          <p className="text-500">{product.description}</p>

          <p>
            <b>Category:</b> {product.category}
          </p>
          <p>
            <b>Brand:</b> {product.brand}
          </p>

          <div className="mt-3 mb-3">
            <span className="text-2xl font-bold">${product.price}</span>
          </div>

          <p>⭐ Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
