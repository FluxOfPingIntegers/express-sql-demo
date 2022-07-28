// importing Dolphin class
const Dolphin = require('../models/dolphin');

// we will now create middleware functions we will use for our dolphins routes

exports.getNewDolphin = (req, res, next) => {
  res.render('dolphin/new', {
    pageTitle: 'Create Dolphin',
    path: './new'
  })
};

exports.postCreateDolphin = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const mood = req.body.mood;
  const dolphin = new Dolphin(null, name, age, mood);
  // this returns a promise, hence we need a then statement
  dolphin.save()
    .then(result => {
      console.log('*SPLASH*', result);
      return res.redirect('/dolphins');
    })
    .catch(err => console.log(err));
};

exports.getDolphins = (req, res, next) => {
  // this returns a promise hence we need our render in a then statement
  Dolphin.fetchAll()
    .then(dolphins => {
      console.log(dolphins[0]);
      res.render('dolphin/index', {
        dolphins: dolphins[0],
        pageTitle: 'All Dolphins',
        path: 'dolphins'
      });
    });
};