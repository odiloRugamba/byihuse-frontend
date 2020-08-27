import Order from '../repos/Order';
import Response from '../utils/Responses';

exports.addOrder = async (req, res) => {
    try {
        const {
            products,
            totalAmmount
        } = req.body;
        const {
            userId
        } = req.user;
        const results = await Order.addOrder(userId, products, totalAmmount);
        Response.Success(res, 200, "updated successfully", results);
    } catch (err) {
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const {
            status,
            cancelReason
        } = req.body;
        const {
            userId
        } = req.user;
        const {
            orderId
        } = req.params;
        const results = await Order.addOrder(userId, orderId, status, cancelReason);
        Response.Success(res, 200, "updated successfully", results);
    } catch (err) {
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const {
            userId
        } = req.user;
        const results = await Order.getUserOrders(userId);
        Response.Success(res, 200, "queried successfully", results);

    } catch (err) {
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}