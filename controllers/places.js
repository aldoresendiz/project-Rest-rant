const router = require('express').Router();
const places = require('../models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
});

  
router.get('/', (req, res) => 
{
    // res.send('GET /places');
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/thai_cooking.jpg',
    //     },
    //     {
    //         name: 'Coding Cat Cafe',
    //         city: 'Phoenix',
    //         state: 'AZ',
    //         cuisines: 'Coffee, Bakery',
    //         pic: '/images/thaifood.jpg',
    //     }]
    res.render('places/index', {places});
});

// SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id])
    {
        res.render('places/show')
    }
    else {
        res.render('places/show', {place: places[id]})
    }

    // res.render('places/show')
  })


// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // default image if one is not provided
        req.body.pic = 'http://placekitten.com/40/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places');
})

module.exports = router;

// http://placekitten.com/250/250
// http://placekitten.com/250/250