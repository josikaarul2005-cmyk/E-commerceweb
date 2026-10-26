
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "./ProductsTemp";
import CartList from "./CartList";
import Cartpage from "./Cartpage";

function App() {
    const [cart, setCart] = useState([]);
    const products = [
        {
            id: 1,
            name: "Casual Sneakers",
            price: 1499,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        },
        {
            id: 2,
            name: "Stylish Backpack",
            price: 899,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
        },
        {
            id: 3,
            name: "Classic Watch",
            price: 1299,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        }
    ];
     function addtocart(product) {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ]);
        }
         alert(product.name + " added to cart successfully!");
    }

    const cartCount = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    
    return (
       <BrowserRouter>
            <nav className="navbar">
                <h2>Hamily</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cartlist">Cart List({cartCount})</Link>
                    <Link to="/cartpage">Checkout</Link>
                </div>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Products
                            products={products}
            addtocart={addtocart}
                        />
                    }
                />

                <Route
                    path="/cartlist"
                    element={
                        <CartList
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />

                <Route
                    path="/cartpage"
                    element={<Cartpage cart={cart} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

