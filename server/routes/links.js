const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../models/Link');
const { auth } = require('../middleware/auth');
const { linkSchema } = require('../validators/schemas');


router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ userId: req.user.id })
      .lean()
      .sort({ createdAt: -1 });

    res.json(links || []);
  } catch (err) {
    console.error('Get links error:', err.message);
    res.status(500).json({ message: 'Failed to fetch links' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const validation = linkSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.issues[0].message || 'Invalid link data',
        errors: validation.error.issues
      });
    }

    const { title, url } = validation.data;

    const link = await Link.create({
      userId: req.user.id,
      title,
      url,
    });

    res.status(201).json({
      _id: link._id,
      title: link.title,
      url: link.url,
      createdAt: link.createdAt
    });
  } catch (err) {
    console.error('Create link error:', err.message);
    res.status(500).json({ message: 'Failed to create link' });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid link ID' });
    }

    const result = await Link.deleteOne({
      _id: id,
      userId: req.user.id
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Link not found or unauthorized' });
    }

    res.json({ message: 'Link deleted successfully' });
  } catch (err) {
    console.error('Delete link error:', err.message);
    res.status(500).json({ message: 'Failed to delete link' });
  }
});

module.exports = router;