import express from "express";
import * as UserController from '../controllers/UserController.js';

const userRoutes = express.Router();

userRoutes.post('/register', UserController.register);



export default userRoutes;