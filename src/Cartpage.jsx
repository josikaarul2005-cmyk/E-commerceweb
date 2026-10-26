import { useState } from "react";
import "./App.css";

function Cartpage({ cart }) {
    const [showBill, setShowBill] = useState(false);

    const totalBill = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    function generateBill() {
        setShowBill(true);
    }

    function printBill() {
        window.print();
    }

    function back() {
        setShowBill(false);
    }

    return (
        <div className="billing-page">
            {!showBill && (
                <div className="checkout-container">
                    <h1>Checkout</h1>
                    <p className="checkout-subtitle">
                        Review your order before generating your bill.
                    </p>

                    {cart.length === 0 ? (
                        <p>Your cart is empty. Add products first!</p>
                    ) : (
                        <>
                            <div className="table-container">
                                <table className="billing-table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td className="product-name">
                                                    {item.name}
                                                </td>
                                                <td>{item.quantity}</td>
                                                <td>₹{item.price}</td>
                                                <td>
                                                    ₹{item.price * item.quantity}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="grand-total">
                                <span>Grand Total</span>
                                <h2>₹{totalBill.toLocaleString("en-IN")}</h2>
                            </div>

                            <button
                                className="generate-button"
                                onClick={generateBill}
                            >
                                Generate Bill
                            </button>
                        </>
                    )}
                </div>
            )}

            {showBill && (
                <div className="invoice">
                    <h2>Hamily Invoice</h2>
                    <p className="invoice-subtitle">
                        Thank you for shopping with Hamily!
                    </p>

                    <div className="table-container">
                        <table className="billing-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td className="product-name">
                                            {item.name}
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            ₹{item.price.toLocaleString("en-IN")}
                                        </td>
                                        <td>
                                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th colSpan="4">Grand Total</th>
                                    <th>₹{totalBill.toLocaleString("en-IN")}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="invoice-actions">
                        <button onClick={printBill}>
                            Print / Save PDF
                        </button>

                        <button onClick={back}>
                            Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cartpage;