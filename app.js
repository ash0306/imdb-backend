require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3500;
const moviesRouter = require('./routes/movies')
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open',()=>console.log('Connection established'))

app.get('/', (request, response) => {
    response.send('Welcome');
})

app.use('/api/v1/movies',moviesRouter);

app.listen(PORT,console.log(`listening on port http://localhost:${PORT}`));