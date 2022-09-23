const operationsModel = require('../models/operationsModel');
const users = require('../models/userModel');
const operationCost = 1;

module.exports = async (req, res, next) => {
  try {
    const user = await users.findOne({ id: req.auth.id });

    if (user.credits < operationCost) {
      return res.status(200).json({ message: 'Buy new credits to use this API' });
    }
    const { operations } = req.body;

    const results = [];

    operations.forEach(async (op) => {
      const { value1, value2 } = op;

      add = value1 + value2;

      results.push({ result: add, value1, value2, operation: 'Addition' });

      await operationsModel.create({
        value1,
        value2,
        operation: 'Addition',
        result: add
      });
    });

    user.credits = user.credits - results.length;

    if(user.credits < 0){
      return res.status(200).json({ message: 'Buy new credits to use this API' });
    }

    await user.save();

    return res.status(200).json({ results });
  } catch(error) {

    next(error);
  }
};
