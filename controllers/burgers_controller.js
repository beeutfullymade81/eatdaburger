var express = require("express");
var router = express.Router();


var burgers = require("../models/burgers.js");


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/burgers/insert", function(req, res) {
    console.log(req.body);
    burgers.insert(req.body.burger_name, function(result) {
        
        res.redirect('/');

    });
});

router.put('/burgers/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/');
  });
});
// Export routes for server.js to use.
module.exports = router;