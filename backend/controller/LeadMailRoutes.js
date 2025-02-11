const express = require('express');
const router = express.Router();
const LeadMail = require('../models/LeadMailModels');

// POST route for submitting a new lead (Contact Us form submission)
router.post('/leadmail', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newLeadMail = new LeadMail({
      name,
      email,
      message,
    });

    await newLeadMail.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving lead mail:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

// GET route to fetch all lead mails
router.get('/leadmail', async (req, res) => {
  try {
    const leadMails = await LeadMail.find();
    res.status(200).json(leadMails);
  } catch (error) {
    console.error('Error fetching lead mails:', error);
    res.status(500).json({ message: 'Failed to fetch lead mails' });
  }
});

module.exports = router;
