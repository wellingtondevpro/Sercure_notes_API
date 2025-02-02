require('dotenv').config();
const express = require('express');
const noteRoutes = require('./routes/nodeRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/notes', noteRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
