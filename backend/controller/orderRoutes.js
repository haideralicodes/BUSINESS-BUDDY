const express = require('express');
const router = express.Router();
const Order = require('../models/orderModels');

// POST: Create a new order
router.post('/post-orders', async (req, res) => {
    const { userId, username, email, phoneNumber, shippingAddress, items, totalPrice } = req.body;

    try {
        const newOrder = new Order({
            userId,
            username,
            email,
            phoneNumber,
            shippingAddress,
            items,
            totalPrice,
        });

        // Save the new order to the database
        await newOrder.save();

        // Send response back to the client
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET: Retrieve orders for a user
router.get('/get-orders/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId }).populate('items.productId'); // Populate product details

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.status(200).json(orders); // Send back all orders for the user
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
