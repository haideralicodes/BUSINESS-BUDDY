const express = require('express');
const Order = require('../models/orderModels'); 
const router = express.Router();


router.post('/create-order', async (req, res) => {
    const {
        userId,
        username,
        email,
        phoneNumber,
        shippingAddress,
        items,
        totalPrice,
    } = req.body;

    const newOrder = new Order({
        userId,
        username,
        email,
        phoneNumber,
        shippingAddress,
        items,
        totalPrice,
    });

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).send('Error creating order');
    }
});


// In your orders.js (or equivalent route file)

router.get('/get-orders/:userId', async (req, res) => {
  try {
      const orders = await Order.find({ userId: req.params.userId });
      res.json(orders);
  } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).send('Error fetching orders');
  }
});




module.exports = router;
