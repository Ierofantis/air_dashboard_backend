import { Router } from 'express';

import { user, airline, bankcrupt } from '../controllers';

const router = Router();

router.post('/signup', (req, res) => user.registerUser(req.body.email, req.body.username, req.body.password, res));
router.post('/login', (req, res) => user.loginUser(req.body.email, req.body.password, res));
router.post('/addAccident', (req, res) => airline.createAccidentForCertainAirline(res));
router.post('/addBankcruptcy', (req, res) => bankcrupt.createBankcruptcy(res));

router.get('/worstToTop', (req, res) => airline.sortCompanyFromWorstToTop(res));
router.get('/topToWorst', (req, res) => airline.sortCompanyFromTopToWorst(res));

export default router;
