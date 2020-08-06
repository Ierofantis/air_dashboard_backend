import { Router } from 'express';

import { user } from '../controllers';
const db = require("../models");
const User = db.user;

const router = Router();
const auth = { "myprivatekey": "myprivatekey" };
const bcrypt = require("bcrypt-nodejs");
/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

router.post('/signup', (req, res) => user.registerUser(req.body.email, req.body.username, req.body.password, res));

export default router;
