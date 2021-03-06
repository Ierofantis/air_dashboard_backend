import { Router } from 'express';

import { user, airline, bankcrupt, accident, calculateRisk } from '../controllers';

const router = Router();

router.post('/signup', (req, res) => user.registerUser(req.body.email, req.body.username, req.body.password, res));
router.post('/login', (req, res) => user.loginUser(req.body.email, req.body.password, res));
router.post('/addAccident', (req, res) => airline.createAccidentForCertainAirline(req.body.accident, req.body.airlineId, res));
router.post('/addBankcruptcy', (req, res) => bankcrupt.createBankcruptcy(req.body.airlineId, req.body.status, res));
router.post('/calculateRisk', (req, res) => calculateRisk.calculation(req.body.airlineRanking, req.body.condition, res));

router.post('/authorizeRoutes', (req, res) => user.authorizeRoutes(req.body.email, req.body.password, res));

router.post('/createAirlines', (req, res) => airline.createAirlines(res));

router.get('/worstToTop', (req, res) => airline.sortCompanyFromWorstToTop(res));
router.get('/topToWorst', (req, res) => airline.sortCompanyFromTopToWorst(res));
router.get('/getAllAirlines', (req, res) => airline.getAllAirlines(res));
router.get('/getAllRemovedAirlines', (req, res) => airline.getAllRemovedAirlines(res));

router.get('/getTheAccidents', (req, res) => accident.getAllTheAccidents(res));

export default router;
