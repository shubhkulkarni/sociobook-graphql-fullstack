const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/schema/schema");

//configuration
const dotenv = require("dotenv");
const { errorMiddleware } = require("./src/middlewares/errorMiddleware");

const dev_env = process.env.NODE_ENV.trim() === "development";
dev_env
  ? dotenv.config({ path: "./dev.config.env" })
  : dotenv.config({ path: "./prod.config.env" });

require("./database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: dev_env,
    schema,
  })
);

app.use(errorMiddleware);
app.listen(process.env.PORT, () =>
  console.log(`server is running on ${process.env.PORT}`)
);