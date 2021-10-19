var mongoose = require("mongoose");
var express = require("express");
var graphqlHTTP = require("express-graphql").graphqlHTTP;

const app = express();

var expressPlayground =
  require("graphql-playground-middleware-express").default;

require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.use(express.json());

var PORT = process.env.PORT || 3001;
var query = process.env.ATLAS_DATABASE;

const db = query;
mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error!" + error);
    }
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected");
});

app.use(
  "/graphiql",
  graphqlHTTP(async (req) => ({
    schema: require("./src/graphql/schema"),
    graphiql: true,
  }))
);

app.get("/playground", expressPlayground({ endpoint: "/graphiql" }));

app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});

app.get("/", async (req, res) => {
  res.status(200).json("App is running correct! - Grupo 1 Equipo 4");
});
