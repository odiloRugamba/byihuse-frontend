import Order from '../controllers/Order';
import express from 'express';
import passport from 'passport';
import '../middleware/auth';
const router = express.Router();

router.post('/', passport.authenticate("jwt", { session : false }), Order.addOrder);
router.put('/:orderId', passport.authenticate("jwt", { session : false }), Order.updateOrderStatus);
router.get('/', passport.authenticate("jwt", { session : false }), Order.getUserOrders);

module.exports = router;