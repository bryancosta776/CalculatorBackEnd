const express = require('express');

const router = express.Router();

router.post('/multiplication', async (req, res) => {
  try {
    const { value1, value2 } = req.body;

    result = value1 * value2;

    res.status(200).json(result);
  } catch(error) {
    next(error);
  }
});
module.exports = router;
