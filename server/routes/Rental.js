import Rental from '../controllers/Rental';
import express from 'express';
import passport from 'passport';
import '../middleware/auth';
const router = express.Router();

router.post('/', passport.authenticate("jwt", { session : false }), Rental.create);
router.put('/:rentalId', passport.authenticate("jwt", { session : false }), Rental.update);
router.get('/:rentalId', Rental.getRentalDetails);

module.exports = router;