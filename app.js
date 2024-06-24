const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const auth = require('./middlewares/auth');

dotenv.config();
const app = express();
const port = process.env.PORT || 6000;

mongoose.connect(process.env.DB_URI).then(() => console.log('DB connected')).catch(err => console.error(err));

// Use auth middleware for all routes
app.use(auth);
app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) =>{
    res.send('Welcome to Worko API');
});
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
