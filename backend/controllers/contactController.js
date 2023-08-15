// controllers/contactController.js

const ContactInfo = require('../schema/ContactInfo.js');

exports.createContactInfo = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContactInfo = new ContactInfo({
      name,
      email,
      message,
    });

    const savedContactInfo = await newContactInfo.save();

    res.status(201).json(savedContactInfo);
  } catch (error) {
    res.status(500).json({
      error: 'An error occurred while saving the contact information.',
    });
  }
};
