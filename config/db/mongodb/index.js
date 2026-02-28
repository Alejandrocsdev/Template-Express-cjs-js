const mongoose = require('mongoose');

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

const connectMongoDB = () => {
  return mongoose
    .connect(uri, {
			dbName: MONGO_DB,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      authSource: process.env.MONGO_AUTH_SOURCE,
      serverSelectionTimeoutMS: 1000,
    })
    .then(() => {
      console.info('[MongoDB] connected');
    })
    .catch((error) => {
      console.error('[MongoDB] connection failed');
      throw error;
    });
};

module.exports = connectMongoDB;
