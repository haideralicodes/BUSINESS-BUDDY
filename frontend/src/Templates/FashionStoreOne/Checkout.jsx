import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import logo from './assets/logo.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CustomizeWebsiteSidebar from '../../pages/CustomizeWebsite/CustomizeWebsiteSidebar';
import { TextField } from '@mui/material';
import axios from 'axios';

function Checkout() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const [activeMenu, setActiveMenu] = useState(null);
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        phoneNumber: '',
    });
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch cart items
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/carts/getCartItems?userId=${userId}`);
                console.log("Cart Items:", response.data);
                const items = Array.isArray(response.data) ? response.data : [];
                setCartItems(items);
                calculateTotalPrice(items);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        if (userId) {
            fetchCartItems();
        }
    }, [userId]);

    const calculateTotalPrice = (items) => {
        if (!Array.isArray(items)) {
            console.error("calculateTotalPrice called with non-array:", items);
            return;
        }
        const total = items.reduce((sum, item) => sum + (item.productId.price * item.quantity), 0);
        setTotalPrice(total);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.productId._id === productId) {
                item.quantity = newQuantity;
            }
            return item;
        });
        setCartItems(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    const handleRemoveItem = (productId) => {
        axios.delete(`http://localhost:4000/carts/remove-from-cart?userId=${userId}&productId=${productId}`)
            .then(() => {
                const updatedCart = cartItems.filter(item => item.productId._id !== productId);
                setCartItems(updatedCart);
                calculateTotalPrice(updatedCart);
            }).catch(error => console.error("Error removing item:", error));
    };

    const handlePlaceOrder = async () => {
        const orderData = {
            userId,
            username: userDetails.username,
            email: userDetails.email,
            phoneNumber: userDetails.phoneNumber,
            shippingAddress,
            items: cartItems.map(item => ({
                productId: item.productId._id,
                name: item.productId.name,
                quantity: item.quantity,
                price: item.productId.price,
            })),
            totalPrice,
        };
    
        try {
            console.log("Initiating payment for:", totalPrice);
    
            // Create the order first
            const orderResponse = await axios.post("http://localhost:4000/orders/create-order", orderData);
            console.log("Order created:", orderResponse.data);
    
            const amountInCents = Math.round(totalPrice * 100);
    
            // Proceed with payment
            const response = await axios.post(
                "http://localhost:4000/payments/create-checkout-session",
                { amount: amountInCents }
            );
    
            if (response.data?.url) {
                window.location.href = response.data.url; // Redirect to Stripe Checkout
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };
    

    return (
        <>
            <div
                style={{
                    width: activeMenu ? '60%' : 'calc(100vw - 60px)',
                    marginLeft: activeMenu ? '0' : '60px',
                }}
            >
                <section className="preview">
                    <div className="previewRectangle">
                        <div className="previewbar">
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate('../dashboard')}
                            />
                        </div>
                        <div className="mybtns">
                            <button
                                style={{ border: "1px solid blue", backgroundColor: "white", color: "blue" }}
                                onClick={() => navigate('../dashboard')}
                            >
                                Save Design
                            </button>
                            <button onClick={() => navigate('../Payment')}>Publish</button>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ marginLeft: "60px" }}>
                <Navbar />
            </div>

            <Box>
                <Typography variant='h3' mt={5} ml={14} fontWeight={600} fontSize={40}>Checkout.</Typography>
            </Box>

            <Box sx={{ ml:12, width:"1150px", display: "flex", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ ml:2, width:"40%", display: "flex", justifyContent: "center", alignItems:"left", flexDirection: "column", gap: "20px" }}>
                    <Typography variant='h6' mt={5} fontWeight={600} color='#003049'>SHIPPING DETAILS</Typography>
                    <TextField
                        fullWidth
                        label="Full Name"
                        value={userDetails.username}
                        onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        value={userDetails.phoneNumber}
                        onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Shipping Address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </Box>

                <Box sx={{ textAlign: "center", width: "60%" }}>
                    <Typography variant='h6' fontWeight={600} color='#003049'>YOUR ORDER</Typography>
                    {Array.isArray(cartItems) && cartItems.map(item => (
                        <Box key={item.productId._id} sx={{ display: "flex", alignItems: "center", marginBottom: "10px", gap:"70px" }}>
                            <img src={item.productId.images?.[0]} alt={item.productId.name} style={{ width: 150, height: 150, objectFit: 'cover', borderRadius:"5px" }} />
                            <Typography variant="body1" sx={{ flex: 1, marginLeft: "10px" }}>{item.productId.name}</Typography>
                            <TextField
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.productId._id, parseInt(e.target.value))}
                                sx={{ width: "50px", marginLeft: "10px" }}
                            />
                            <Typography variant="body1" sx={{ marginLeft: "10px" }}>${item.productId.price}</Typography>
                            <Button variant="contained" color="error" onClick={() => handleRemoveItem(item.productId._id)} sx={{ marginLeft: "10px" }}>X</Button>
                        </Box>
                    ))}
                    <Typography variant='h5' mt={5} fontWeight={600} color='#003049'>Total: ${totalPrice}</Typography>
                    <Button variant="contained" onClick={handlePlaceOrder} sx={{ marginTop: "20px", width:"200px", height:"50px" }}>Place Order</Button>
                </Box>
            </Box>

            <CustomizeWebsiteSidebar />
        </>
    );
}

export default Checkout;
