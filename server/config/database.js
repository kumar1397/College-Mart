const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log('DB connection is successful'))
        .catch((error) => {
            console.log('Issue in DB connection');
            console.error(error);
            process.exit(1); // Optional: Exit the process if the connection fails
        });
};

module.exports = dbConnect;