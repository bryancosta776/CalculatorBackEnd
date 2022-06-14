

const operationsSchema = require('../models/operationsModel');


module.exports = async (req, res, next) => {
  try {
    const { operation }  = req.query;

    const resultOperations = await operationsSchema.find({ operation });
    res.status(200).json({ resultOperations });

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
