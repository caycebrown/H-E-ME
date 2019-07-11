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



router.post('/complete', async (req, res) => {
  const list = req.body;
  
  console.log('req.body = ' + list[0])
  
  
  list.map(item =>
    db.item.findAll({
      where: {'$item.name$': item}
      })
      .then(data => 
        data.map( newData => 
          db.aisle.findAll({
            where: {'$aisle.id$': newData.dataValues.aisleId, '$aisle.storeId$': 2}
          }).then( result => { 
            if (result[0]) {
              /*aisleArr.push(result[0].name)*/
              console.log('here' + result[0].name)
              aisleArr.push(result[0].name)
              return result[0].name;
            } else {
              console.log('no match');
            }
          })
          ) 
        )
      )
      const finalArr = await Promise.all(aisleArr)
  res.json(finalArr)
});



module.exports = router;