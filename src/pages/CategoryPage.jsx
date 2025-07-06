import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from '../components/ProductItem';

function CategoryPage() {
  const { name } = useParams();
  const { products, error } = useFetchProducts();
  const search = useSelector((state) => state.search.query.toLowerCase());

  const lowerName = name.toLowerCase();
  let categoryProducts = [];

  // Step 1: Try direct match from API (e.g., 'furniture', 'fragrances', 'groceries')
  categoryProducts = products.filter(
    (product) => product.category?.toLowerCase() === lowerName
  );

  // Step 2: Fallback for custom 'makeup' category
  if (categoryProducts.length === 0) {
    if (lowerName === 'makeup') {
      const makeupKeywords = ['lipstick', 'foundation', 'mascara', 'eyeliner', 'maybelline', 'beauty'];
      categoryProducts = products.filter((product) =>
        makeupKeywords.some((keyword) =>
          product.title.toLowerCase().includes(keyword) ||
          product.brand?.toLowerCase().includes(keyword)
        )
      );
    }
  }

  // Step 3: Apply search filtering
  const filteredProducts = categoryProducts.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Products</h2>
      {error && <p>{error}</p>}
      {filteredProducts.length === 0 && <p>No products found.</p>}

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
