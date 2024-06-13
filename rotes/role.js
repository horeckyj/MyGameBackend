import express from 'express';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//creat new role in DB
router.post('/create', verifyAdmin, createRole);

//update role DB
router.put('/update/:id', verifyAdmin, updateRole);

//get all roles from DB
router.get ('/getAll', verifyAdmin, getAllRoles);

//delete role DB
router.delete ('/delete/:id', verifyAdmin, deleteRole);

export default router;