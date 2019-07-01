const express = require('express');
const router = express.Router();
var db = require('../../models');
var Op = require("sequelize").Op;


//Routes **all routes booked here by default begin with 'api'
//Any reqeusts should only include an extension to this url if desired






router.get('/items', function(req, res){
    db.item_name.findAll({}).then(function(item) {
        res.json(item);
      });
});



module.exports = router;