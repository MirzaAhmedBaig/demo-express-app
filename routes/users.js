var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getuserdetails', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
  userName: "Mirza ahmed baig",
  monNumber: "7276137498"
  }, null, 30))
  res.send()
  });
  
  router.post('/senduserdetails',function(req,res){
  console.log(req.body)
  res.send("success")
  });

module.exports = router;
