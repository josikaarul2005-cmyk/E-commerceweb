import { useNavigate } from "react-router-dom";

import "./App.css";

function CartList({ cart, setCart }) {
    const navigate = useNavigate();

    function increase(id) {
        setCart(
            cart.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    }

    function decrease(id) {
        setCart(
            cart
                .map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
                .filter((product) => product.quantity > 0)
        );
    }

    function removeCart(id) {
        setCart(cart.filter((product) => product.id !== id));
    }

    const totalprice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    return (
        <div className="cart-list">
            <h1>My Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="product-listing">
                    {cart.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />

                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>

                            <button onClick={() => increase(product.id)}>
                                +
                            </button>

                            <span> {product.quantity} </span>

                            <button onClick={() => decrease(product.id)}>
                                −
                            </button>

                            <p>
                                Subtotal: {product.price * product.quantity}
                            </p>

                            <button onClick={() => removeCart(product.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <h3>Total Price: {totalprice}</h3>
            {cart.length > 0 && (
    <button  className="buy-now-button" onClick={() => navigate("/cartpage")}>
        Buy Now
    </button>
)}
        </div>
    );
}

export default CartList;
