const express = require('express');
const router  = express.Router();
const Song = require('../models/song')
var http = require("http");


setInterval(function() {
    http.get("http://ybwedding.herokuapp.com");
}, 1500000); // every 5 minutes (300000)

// Home Page
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// Schedule Page
router.get('/schedule', (req, res, next) => {
  res.render('schedule');
});


// Travel Page
router.get('/travel', (req, res, next) => {
  res.render('travel');
});


// Bridal Party
router.get('/entourage', (req, res, next) => {
  res.render('entourage');
});


// Song Request Page
// router.get('/song-request', (req, res, next) => {
//   res.render('songs');
// });

// ADD new request through Postman
router.post('/song-request', (req, res, next) => {
  const newSong = {
    song: req.body.song,
  }
  Task.create(newSong)
  .then((requestJustCreated) => {
    res.json(requestJustCreated)
  })
  .catch((err) => {
    res.json(err)
  })
})


// Gallery Page
router.get('/gallery', (req, res, next) => {
  res.render('gallery');
});


// FAQ Page
router.get('/faq', (req, res, next) => {
  res.render('faq');
});


module.exports = router;
