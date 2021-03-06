const operations = require('../models/operationsModel');

module.exports = async (req, res, next) => {
  try {
    const { value1, value2 } = req.body;

    resultAdd = value1 + value2;

    const resultFinalAdditio = await operations.create({
      value1,
      value2,
      operation: 'Addition',
      result: resultAdd
    });

    return res.status(200).json({ resultFinalAdditio });
  } catch (error) {
    next(error);
  }
};
