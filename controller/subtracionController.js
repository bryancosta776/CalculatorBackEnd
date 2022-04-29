const express = require('express');

const router = express.Router();

router.post('/subtraction', (req, res) => {
    const { value1, value2 } = req.body;

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return res.status(400).json({ error: 'Os valores precisam estar no formato Number' });
    }

    const resultSubtracion = value1 - value2;
    return res.status(200).json(resultSubtracion);
});

module.exports = router;
