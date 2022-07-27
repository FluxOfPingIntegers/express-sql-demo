// importing Dolphin class
const Dolphin = require('../models/dolphin');

exports.getNewDolphin = (req, res, next) => {
  // todo
  // res.render('dolphin/new', {
  //   pageTitle: 'Create Dolphin',
  //   path: './new'
  // })
};

exports.postCreateDolphin = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const mood = req.body.mood;
  // todo
  // Dolphin.create({
  //   name: name,
  //   age: age,
  //   mood: mood
  // })
  //   .then(result => console.log('*SPLASH*', result))
  //   .catch(err => console.log(err));
};

exports.getDolphins = (req, res, next) => {
  // todo
  // Dolphin.fetchAll(dolphins => {
  //   res.render('dolphin/index', {
  //     dolphins: dolphins,
  //     pageTitle: 'All Dolphins',
  //     path: '/dolphins'
  //   });
  // });
};