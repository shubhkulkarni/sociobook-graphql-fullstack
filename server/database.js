const { connect } = require("mongoose");

const databaseURI = process.env.DB;

connect(databaseURI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database is connected successfully"));
