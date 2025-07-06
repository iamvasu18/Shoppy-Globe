import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <br />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
