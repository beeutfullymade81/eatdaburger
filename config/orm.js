
var connection = require("../config/connection.js");

var orm = {
    selectall: function(allBurgers) {
        connection.query('Select * from burgers', function (err, result){
            if (err) throw err;
            allBurgers(result);
        })
    },
    insertOne: function(justOne, cb){
        connection.query('Insert into burgers set ?', {
            burger_name: justOne,
            devoured: false
        }, function (err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(oneUpdated, burger_id) {
        connection.query('Update burgers set ? where ?', [{devoured: true}, {id: burger_id}], function(err, result){
            if (err) throw err;
            oneUpdated(result);
        })
    },
}


// Export the orm object for the model (cat.js).
module.exports = orm;
