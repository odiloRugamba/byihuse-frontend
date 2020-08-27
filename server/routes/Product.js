import Product from '../controllers/Product';
import express from 'express';
import passport from 'passport';
import '../middleware/auth';
const router = express.Router();

router.post('/', passport.authenticate("jwt", { session : false }), Product.create);
router.put('/:productId', passport.authenticate("jwt", { session : false }), Product.update);
router.get('/:productId', Product.getProductDetails);

module.exports = router;