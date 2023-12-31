//require express in
const express = require('express');
const app = express();

//require routes in
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

//assign a PORT
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at Port ${PORT}`));
});