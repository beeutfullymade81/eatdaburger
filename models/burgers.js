var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
      orm.selectall(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    update: function(burger_id, cb) {
      orm.updateOne(burger_id, function(res) {
        cb(res);
      });
    },
    insert: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    }
    
  };

  module.exports = burgers;