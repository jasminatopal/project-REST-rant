const router = require('express').Router()
let db = require('../models')


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
})



router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/:id/edit', (req, res) => {
  db.place_schema.findById(req.params.id)
      .then((place) => { res.render('places/edit', { place }) })
      .catch((err) => {
          console.log(err)
          res.render('error404')
      })    
})

  router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
  



router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id) || !places[id]) {
      res.render('error404')
  }

  req.body.pic = req.body.pic || 'http://placekitten.com/400/400'
  req.body.city = req.body.city || 'Anytown'
  req.body.state = req.body.state || 'USA'
  places[id] = req.body
  res.redirect(`/places/${id}`)
})




router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})








module.exports = router


