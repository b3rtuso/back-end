import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';
const app = express();

app.use(express.json());
try {
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}...`);
});
}catch(e){
    console.error('Error starting server:', e);
}

app.use('/book', bookRoutes);
app.use('/students', studentRoutes);
    