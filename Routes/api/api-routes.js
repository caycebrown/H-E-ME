const express = require('express');
const router = express.Router();
var db = require('../../models');
var Op = require("sequelize").Op;


//Routes **all routes booked here by default begin with 'api'
//Any reqeusts should only include an extension to this url if desired


router.get('/items', (req, res) => {
    db.item_name.findAll({}).then(function(item) {
        res.json(item);
      });
});



router.post('/complete', (req, res) => {
  const list = req.body;
  let aisleArr = [];
  console.log('req.body = ' + list[0])
  list.map(item =>
    db.item.findAll({
      where: {'$item.name$': item}
      })
      .then(data => data.map( data => 
        db.aisle.findAll({
          where: {'$aisle.id$': data.dataValues.aisleId, '$aisle.storeId$': 2}
        }).then( result => { 
          if(result[0]){
            aisleArr.push(result[0].name)
            console.log('here' + result[0].name)
            return aisleArr;
          }else{
            console.log('no match')}})
        ) 
      )
    )
res.send(aisleArr)
});



module.exports = router;