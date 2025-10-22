import express from 'express';
const app = express();
const PORT =  3109;

app.use(express.json());
try {
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
}catch(e){
    console.error('Error starting server:', e);
}

app.get('/bert', async(req, res) => {
    res.status(200).json({message: 'bert'});
});