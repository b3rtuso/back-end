import * as StudentController from '../controllers/StudentController.js';
import express from "express";
import checkToken from "../middleware/authenticationHandler.js";

const studentRoutes = express.Router();

studentRoutes.use(checkToken);
studentRoutes.get('/all', StudentController.fetchStudent);
studentRoutes.post('/new', StudentController.createStudent)
studentRoutes.put('/edit/:studentId',StudentController.editStudent);
studentRoutes.delete('/delete/:studentId',StudentController.deleteStudent)

export default studentRoutes;