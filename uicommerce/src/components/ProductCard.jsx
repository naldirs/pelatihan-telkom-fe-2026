import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        className="border-round shadow-2 overflow-hidden surface-card transition-all transition-duration-300 hover:shadow-4"
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full"
            style={{ height: "180px", objectFit: "cover" }}
          />

          {/* DISCOUNT BADGE (optional) */}
          {product.discountPercentage && (
            <span
              className="absolute top-0 left-0 m-2 px-2 py-1 text-xs border-round"
              style={{ background: "red", color: "white" }}
            >
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-3">
          <h4 className="m-0 mb-2 text-sm font-medium line-clamp-2">
            {product.title}
          </h4>

          <p className="text-sm text-500 m-0 mb-2">{product.category}</p>

          <div className="flex align-items-center justify-content-between mb-3">
            <span className="text-lg font-bold">${product.price}</span>

            {/* RATING */}
            <span className="text-sm">⭐ {product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
