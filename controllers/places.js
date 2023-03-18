const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')

})

router.get('/', (req, res) => {

  res.render('places/index', { 
    places: places, })


})


router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router


