import Service from '../controllers/Service';
import express from 'express';
import passport from 'passport';
import '../middleware/auth';
const router = express.Router();

router.post('/', passport.authenticate("jwt", { session : false }), Service.create);
router.put('/:serviceId', passport.authenticate("jwt", { session : false }), Service.update);
router.get('/:serviceId', Service.getServiceDetails);

module.exports = router;