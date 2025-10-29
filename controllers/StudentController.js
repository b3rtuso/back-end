import * as StudentModel from '../models/StudentModel.js';

export const fetchStudent = async (req, res) => {
    try {
        const student = await StudentModel.getStudent();
        res.status(200).json({success: true, message: student});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}