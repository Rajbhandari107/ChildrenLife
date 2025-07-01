const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Removed nodemailer and /api/contact POST route as form submission will be handled by Formspree

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
