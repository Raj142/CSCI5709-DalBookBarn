const Order = require('../model/bookOrder');
const User = require('../model/userModel');

exports.addOrder = async (req, res) => {
    try {

        const { address, city, country, email, isPaid, paymentMethod, totalPrice, orderItems } = req.body;
        
        let order = new Order({
            address,
            city, 
            country,
            email,
            isPaid,
            paymentMethod,
            totalPrice,
            orderItems
        });

        await order.save()
            .then(order => {
                res.status(200).json({
                    status: 'success',
                    message: 'Order has been placed',
                    orderId: order._id
                });
            })
            .catch(err => {
                res.status(400).json({
                    status: 'failed',
                    message: err
                })
            })

        res.send('working');
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        });
    }
};