import { useSelector } from 'react-redux';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from '../components/ProductItem';

function Home() {
  const { products, error } = useFetchProducts();
  const search = useSelector((state) => state.search.query.toLowerCase());

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <h2>All Products</h2>
      {error && <p>{error}</p>}

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
