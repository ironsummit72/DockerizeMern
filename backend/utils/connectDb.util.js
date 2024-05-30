import mongoose from "mongoose";
import environmentVar from "../conf/env.conf.js";

function connectDatabase() {
  mongoose
    .connect(`${environmentVar.DB_URL}${environmentVar.DB_NAME}`)
    .then((res) => {
      console.log(
        "database connection successfull ",
        res.connection.host,
        res.connection.port
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
export default connectDatabase;
