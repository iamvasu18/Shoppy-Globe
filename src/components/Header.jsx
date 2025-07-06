import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/" target="_self">
            <span className="logo-bold">Shoppy</span>
            <span className="logo-globe">Globe</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/">HOME</Link>  
          <div className="dropdown nav-item">
          <span className="dropdown-toggle">PRODUCTS</span>
          <div className="dropdown-menu">
          <Link to="/category/makeup">Makeup</Link>
          <Link to="/category/fragrances">Fragrances</Link>
          <Link to="/category/furniture">Furniture</Link>
          <Link to="/category/groceries">Groceries</Link>
        </div>
       </div>


          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="header-right">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={handleSearchChange}
          />
          <Link to="/cart" className="cart-link">
            🛒 Cart ({totalQuantity})
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
