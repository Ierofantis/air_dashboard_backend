import { Router } from 'express';

import { user, airline } from '../controllers';

const router = Router();

router.post('/signup', (req, res) => user.registerUser(req.body.email, req.body.username, req.body.password, res));
router.post('/login', (req, res) => user.loginUser(req.body.email, req.body.password, res));
router.post('/addAccident', (req, res) => airline.updateAccidentForCertainAirline());

export default router;
