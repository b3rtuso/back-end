import pool from './db.js';


export const getStudent = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudents");
    return rows;
}

export const insertStudent = async ({ srcode, name, course }) => {
    const [result] = await pool.query(
        "INSERT INTO tblbook (srcode, name, course) VALUES (?, ?, ?)",
        [srcode, name, course]
    );
    return result.insertId;
}

export const updateStudent = async ( srcode, name, course, studentId) => {
    const [result] = await pool.query(
        "UPDATE tblbook SET srcode = ?, name = ?, course = ? WHERE id = ?",
        [srcode, name, course, studentId]
    );
    return result.affectedRows;
}

export const deleteStudent = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudents WHERE id = ?",[studentId]
    );
    return result.affectedRows;
}