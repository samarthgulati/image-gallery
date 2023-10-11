const express = require('express');
const router = express.Router();

const User = require('./user');

router.get('/', (req, res) => {
  User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `${err}` });
    });
});

router.post('/', async (req, res) => {

  await User.deleteMany({}).then(result => {
  }).catch(err => {
    res.json({
        success: false,
        msg: 'Error deleting'
    });
  });
  await User.create(req).then(result => {
    res.json({
        success: true,
        msg: 'Updated'
    });
  }).catch(err => {
    res.json({
        success: false,
        msg: 'Error'
    });
  });
});

module.exports = router;
