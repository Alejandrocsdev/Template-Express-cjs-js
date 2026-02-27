const mongoose = require('mongoose');

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;

const connectMongoDB = () => {
  return mongoose
    .connect(uri, { user, pass })
    .then(() => {
      console.info('[MongoDB] connected');
    })
    .catch((error) => {
      console.error('[MongoDB] connection failed');
      throw error;
    });
};

module.exports = connectMongoDB;
