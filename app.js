import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';
import cors from 'cors';
import userRoutes from './routers/UserRoutes.js';

const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
};
app.use(express.json());
app.use(cors(corsOptions));


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
try {
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}...`);
});
}catch(e){
    console.error('Error starting server:', e);
}




app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);
    