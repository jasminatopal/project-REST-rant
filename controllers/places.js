const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


router.get('/', (req, res) => {
  // let places = [{
  //   name: 'H-Thai-ML',
  //   city: 'Seattle',
  //   state: 'WA',
  //   cuisines: 'Thai, Pan-Asian',
  //   pic: '/images/thai-food.jpg'
  // }, {
  //   name: 'Coding Cat Cafe',
  //   city: 'Phoenix',
  //   state: 'AZ',
  //   cuisines: 'Coffee, Bakery',
  //   pic: '/images/pastry-coffee.webp'
  // }]
  res.render('places/index', { 
    places: places, })


})







module.exports = router


