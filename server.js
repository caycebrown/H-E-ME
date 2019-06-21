const express = require("express");
const routes = require("./Routes/api/api-routes");
const app = express();
const PORT = process.env.PORT || 3001;
//var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api/test", routes);

app.get('/', function(req, res){
  res.send('we have contact');
});

//app.get('/api/test', function(req, res){
  //res.send('here is your api');
//});

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
/*db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});*/

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
