const Payee = require('../models/payeemodel')
const User = require('../models/usermodel')
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbId');


// create payee
const createPayee = asyncHandler(async (req, res) => {

    try {
        // const userId = "6435047b5724bcd11329418e"
        const id = req.params.id;
        validateMongoDbId(id)
        const payment_status = "pending"
        const { name, mobile, payment_mode, amount } = req.body;
        const newPayee = await Payee.create({ name, mobile, payment_mode, amount, payment_status, createdby: id });
        res.json(newPayee);

    } catch (error) {
        throw new Error(error)
    }

});

// show payee payee 

const getPayee = asyncHandler(async (req, res) => {
    try {

        const { id } = req.params;
        validateMongoDbId(id);
        const user = ((await Payee.find({ createdby: id }).sort({ createdAt: 'desc' })));
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);

    } catch (error) {
        throw new Error(error)

    }
});

const successfullPayment = asyncHandler(async (req, res) => {
    try {

        const { id } = req.params;
        validateMongoDbId(id);
        const user = ((await Payee.find({ createdby: id, payment_status: 'success' }).sort({ createdAt: 'desc' })));
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);

    } catch (error) {
        throw new Error(error)

    }
})



module.exports = {
    createPayee,
    getPayee,
    successfullPayment,
};