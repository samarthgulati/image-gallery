const express = require('express');
const router = express.Router();

const Image = require('./image');
Image.create([{
    "url": "https://picsum.photos/id/0/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/1/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/2/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/3/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/4/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/5/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/6/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/7/472/316",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/8/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/9/500/326",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/10/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/11/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/12/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/13/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/14/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/15/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/16/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/17/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/18/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/19/250/166",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/20/367/246",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/21/300/200",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/22/443/372",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/23/388/489",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/24/485/180",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/25/500/333",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/26/420/276",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/27/326/183",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/28/492/326",
    "upVotes": 0,
    "downVotes": 0
}, {
    "url": "https://picsum.photos/id/29/400/267",
    "upVotes": 0,
    "downVotes": 0
}]);

router.get('/', (req, res) => {
  Image.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `${err}` });
    });
});

router.post('/', async (req, res) => {

  await Image.deleteMany({}).then(result => {
  }).catch(err => {
    res.json({
        success: false,
        msg: 'Error deleting'
    });
  });
  await Image.create(req).then(result => {
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