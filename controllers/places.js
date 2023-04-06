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
  .populate('comments')
  .then(place => {
      console.log(place.comments)
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


router.get('/:id/comment', (req, res) => {
  db.place_schema.findById(req.params.id)
      .then((place) => { res.render('places/comment', { place }) })
      .catch((err) => {
          console.log(err)
          res.render('error404')
      })    
})

router.post('/', (req, res) => {
  db.place_schema.create(req.body)
      .then(() => { res.redirect('/places') })
      .catch((err) => {
          if (err.name === 'ValidationError') {
              let message = "Validation Error: "
              for (var field in err.errors) {
                  message += `${field} was ${err.errors[field].value} - `
                  message += `${err.errors[field].message}`
              }
              console.log("Validation Error Message", message)
              res.render('places/new', { message })
          }
          res.render('error404')
      })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
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


