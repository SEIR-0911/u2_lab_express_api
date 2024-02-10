const express = require('express');
const router = express.Router();
const {Actor} = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        if (!actor) return res.status(404).json({ message: 'Actor not found' });
        res.json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
