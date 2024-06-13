import express from 'express'
import { register, login, registerAdmin } from '../controllers/auth.controller.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//register

router.post("/register", register);

router.post("/login", login);

router.post("/register-admin", verifyAdmin, registerAdmin);

export default router;
