const path = require('path');

const express = require('express');

// importing our dolphin middleware
const dolphinController = require('../controllers/dolphin');

// creating router object
const router = express.Router();

// /dolphins/new => GET
router.get('/new', dolphinController.getNewDolphin);

// /dolphins/ => GET
router.get('/', dolphinController.getDolphins);

// /dolphins/create => POST
router.post('/create', dolphinController.postCreateDolphin);

// exporting router object containing our controller actions
module.exports = router;