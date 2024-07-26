
import "./Header.css";

function Header({ openCart, openAddProduct, onAddProduct}) {
    // const [showCart, setShowCart] = useState(false);
    // const openCart = () => setShowCart(true);
    // const closeCart = () => setShowCart(false);

    return <div className="header">
        <h1>My React Store</h1>
    <div>
        <button className="yellow-button" style={{ marginRight: "20px"}} onClick={openAddProduct}>Add product</button>
        <button className="yellow-button" onClick={openCart}>Cart</button>
    </div>
    {/* <Modal show={showCart} onClose={closeCart}>Hello from Cart</Modal> */}
    
    </div>
}
export default Header;