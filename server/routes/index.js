import express from 'express';
const router = express.Router();

router.use('/api/categories', require('./Category'));
router.use('/api/departments', require('./Department'));
router.use('/api/companies', require('./Company'));
router.use('/api/products', require('./Product'));
router.use('/api/rentals', require('./Rental'));
router.use('/api/services', require('./Service'));
router.use('/api/carts', require('./Cart'));
router.use('/api/wishlists', require('./Wishlist'));
router.use('/api/orders', require('./Order'));
router.use('/api/auth', require('./User'));

module.exports = router;