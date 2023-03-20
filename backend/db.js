const mongoose = require("mongoose");

const url =
  "mongodb://Omolara:Omolara@ac-vesoojw-shard-00-00.pw97uay.mongodb.net:27017,ac-vesoojw-shard-00-01.pw97uay.mongodb.net:27017,ac-vesoojw-shard-00-02.pw97uay.mongodb.net:27017/techSpace?ssl=true&replicaSet=atlas-12p11q-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
