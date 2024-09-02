const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Handle POST requests to add new contact messages
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).send('Message received!');
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).send('Server error');
  }
});

// Handle GET requests to fetch all contact messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
