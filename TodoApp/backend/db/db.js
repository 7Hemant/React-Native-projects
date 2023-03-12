const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const ConnectedDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.Mongo_Url);
    console.log(`connected ${connected.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectedDB;
