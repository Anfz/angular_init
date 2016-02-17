// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var People = require('./people/people.model');

module.exports = function(app) {
  
  //People Routes
  app.route('/api/people').post( function(req, res) {
        
    var people = new People();      // create a new instance of the People model
    people.name = req.body.name;  // set the bears name (comes from the request)
    // save the bear and check for errors
    people.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'People created!' });
    });
  })
  .get(function(req, res) {
    // use mongoose to get all nerds in the database
    People.find(function(err, people) {
      // if there is an error retrieving, send the error. 
                      // nothing after res.send(err) will execute
      if (err)
        res.send(err);
      res.json(people); // return all nerds in JSON format
    });
  });
  
  app.route('/api/people/:people_id')
    .get(function(req, res) {
      People.findById(req.params.people_id, function(err, people) {
        if (err)
          res.send(err);
        res.json(people);
      });
    })
    .put(function(req, res) {
      People.findById(req.params.people_id, function(err, people) {
        if (err)
            res.send(err);

        people.name = req.body.name;  // update the people info
        // save the bear
        people.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'People updated!' });
        });
      });
    })    
    .delete(function(req, res) {
        People.remove({
            _id: req.params.people_id
        }, function(err, people) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
    
  
  //end people routes

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./client/views/index.html'); // load our public/index.html file
    });

};
