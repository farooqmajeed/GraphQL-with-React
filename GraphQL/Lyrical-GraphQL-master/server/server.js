const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const { mongoURL } = require("./keys");
const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "mongodb+srv://farooq:farooq123@cluster0.qcd52.mongodb.net/test?retryWrites=true&w=majority";
if (!mongoURL) {
  throw new Error('You must provide a MongoLab URI');
}


mongoose.Promise = global.Promise;
mongoose.createConnection(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
