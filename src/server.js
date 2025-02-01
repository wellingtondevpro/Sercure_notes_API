const express = require('express');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/nodeRoutes');
const {connect} = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/notes', noteRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})