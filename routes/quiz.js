const router = require('express').Router();
//const bcrypt = require('bcrypt');

let Quiz = require('../models/quiz.model');

router.route('/signup').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const pkh = req.body.pkh;
    const account = req.body.account;
  
    const newUser = new User({
        username,
        email,
        password,
        pkh,
        account
    });
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;