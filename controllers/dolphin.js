// importing Dolphin class
const Dolphin = require('../models/dolphin');

exports.getNewDolphin = (req, res, next) => {
  // todo
  res.render('dolphin/new', {
    pageTitle: 'Create Dolphin',
    path: './new'
  })
};

exports.postCreateDolphin = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const mood = req.body.mood;
  // todo
  const dolphin = new Dolphin(null, name, age, mood);
  dolphin.save()
    .then(result => {
      console.log('*SPLASH*', result);
      return res.redirect('/dolphins');
    })
    .catch(err => console.log(err));
};

exports.getDolphins = (req, res, next) => {
  // todo
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