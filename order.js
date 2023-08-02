const getOrderById = (req,res, next) => {
    Order.findById(req.params.orderId).select('-__v -items._id').exec((err, order) => {
        if (err) {
            // forward to express error handling middleware
            return next(err);
        }
        res.status(200).json(order);
    })
}

module.exports = {
    placeOrder: placeOrder,
    getOrderById: getOrderById
}
