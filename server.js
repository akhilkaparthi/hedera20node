const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// const connection = mongoose.connection;
// connection.once('open', () =>{
//     console.log('MongoDB connection established');
// })

// const userRouter = require('./routes/quiz.js');
const hederaRouter = require('./routes/fees.js')


// app.use('/users',userRouter);
app.use('/hedera',hederaRouter);

app.listen(port, () => {
    console.log(`server is listning on port ${port}`);
});
