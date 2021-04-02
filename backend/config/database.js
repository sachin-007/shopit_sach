const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      // "mongodb://localhost:27017/shopit",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((con) => {
      console.log(
        `mongoDB Database connected with HOST: ${con.connection.host} with id ${process.env.DB_LOCAL_URI}`
      );
    });
};

module.exports = connectDatabase;
