import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Box';
import product5 from './assets/product5.webp';
import Navbar from './Navbar';
import CustomizeWebsiteSidebar from '../../pages/CustomizeWebsite/CustomizeWebsiteSidebar';
import axios from 'axios';

function Cart() {
    const [cartItems, setCartItems] = React.useState([]);


    React.useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handlePayment = async () => {
        try {
          const response = await axios.post('http://localhost:4000/payments/create-checkout-session');
          if (response.data?.url) {
            window.location.href = response.data.url; // Redirect to Stripe Checkout
          }
        } catch (error) {
          console.error('Error redirecting to checkout:', error);
        }
    };

    return (
        <Box>
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
                                onClick={handleClick}
                            />
                        </div>
                        <div className="mybtns">
                            <button
                                style={{ border: "1px solid blue", backgroundColor: "white", color: "blue" }}
                                onClick={handleSave}
                            >
                                Save Design
                            </button>
                            <button onClick={handlePayment}>Publish</button>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ marginLeft: "60px" }}>
                <Navbar />
            </div>
            <CustomizeWebsiteSidebar />
            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", ml: 7 }}>
                <Typography variant='h3' textAlign="center" mt={5}>Your Cart</Typography>
                <Box sx={{ pt: 5, margin: "auto", mb: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                    {cartItems.length === 0 ? (
                        <Typography variant='h6'>Your cart is empty</Typography>
                    ) : (
                        cartItems.map((item, index) => (
                            <Box key={index} sx={{ boxShadow: '0px 10px 30px 10px rgba(0,0,0,0.1)', p: 3, backgroundColor: "#f8fafc", height: "500px", borderRadius: "20px", width: "310px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                                <img src={item.image} alt={item.name} height="350px" style={{ borderRadius: "20px" }} />
                                <Typography variant='h6' fontWeight="bold">{item.name}</Typography>
                                <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            backgroundColor: "#04e762", color: "black", pt: 1, pl: 2, border: "2px solid black", width: "150px", height: "42px", fontSize: "16px", fontWeight: "550", borderRadius: "70px", transition: "0.5s ease-in-out",
                                            ":hover": { backgroundColor: "black", color: "white", cursor:"pointer" }
                                        }}
                                        onClick={() => handleRemoveFromCart(index)} 
                                    >
                                        Remove from Cart
                                    </Button>
                                    <Typography variant='h6' fontWeight="bold">Rs {item.price}</Typography>
                                </Box>
                            </Box>
                        ))
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Cart;