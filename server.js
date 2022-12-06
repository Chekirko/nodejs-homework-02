const app = require('./app');
const { connectMongo } = require('./db/connection');
require('dotenv').config();

const { PORT } = process.env;

const start = async () => {
  try {
    await connectMongo();
    console.log('Database connection successful');

    app.listen(PORT, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  } catch (error) {
    console.log(`Failed to launch application with error: ${error.message}`);
    process.exit(1);
  }
};

start();
