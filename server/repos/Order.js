import Order from '../models/Order';
exports.addOrder = async (userId, products, totalAmmount) => {
    try {
        const odr = {
            status: 'SENT',
            products,
            totalAmmount
        }
        const newOrder = await Order.update({
            userId: userId
        }, {
            $push: {
                orders: odr
            }
        });
        return newOrder;
    } catch (err) {
        throw err;
    }
};

exports.updateOrderStatus = async (userId, orderId, status, cancelReason = null) => {
    try {
        const newOrder = await Order.update({
            userId: userId,
            'orders.id': orderId
        }, {
            $set: {
                status,
                cancelReason
            }
        });
        return newOrder;
    } catch (err) {
        throw err;
    }
};


exports.getUserOrders = async (userId) => {
    try {
        const newOrder = await Order.findOne({userId})
        .populate('products')
        .exec()
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })

        return newOrder;
    } catch (err) {
        throw err;
    }
};