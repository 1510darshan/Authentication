const express = require('express');
const app = express();
const connectDB = require('./db/connectDB.js');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.routes.js');
const user = require('../Backend/models/user.model.js')
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use('/api/auth', authRouter);

app.listen(PORT,  () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})