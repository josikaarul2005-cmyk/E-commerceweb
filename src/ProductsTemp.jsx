import "./App.css";
function Products({ products, addtocart }) {
   

    return (
        <div>
            <div className="hero">
                <h1>Find Your Everyday Favorites</h1>
                <p>Discover products you'll love, all in one place.</p>
                <a className="shop-button" href="#products">
                    Shop Now
                </a>
            </div>

            <div className="products-list" id="products">
                <h2>Our Products</h2>

                <div className="product-listing">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <h3>{product.name}</h3>
                            <p>{product.price}</p>

                            <button onClick={() => addtocart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
