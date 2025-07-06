import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: qty }));
    }
  };

  return (
    <div className="cart-item">
      <div>
        <h4>{item.title}</h4>
        <p>Price: ₹{item.price}</p>
        <p>Total: ₹{item.price * item.quantity}</p>
      </div>
      <div>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          style={{ width: '60px', marginRight: '10px' }}
        />
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
