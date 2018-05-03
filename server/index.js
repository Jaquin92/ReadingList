const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema")
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require("cors");


const app = express();

// allow cross-origin requests

app.use(cors());

mongoose.connect("mongodb://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@ds211440.mlab.com:11440/r-list")

mongoose.connection.once('open', () => console.log("connected to mongoDB"))

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3005, () => console.log("LISTENING 3005"));