const router = require('express').Router();

router.get('/new', (req, res) => {
    res.render('places/new')
}
);

router.get('/', (req, res) => 
{
    // res.send('GET /places');
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai_cooking.jpg',
        },
        {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/thaifood.jpg',
        }]
    res.render('places/index', {places});
});

module.exports = router;

// http://placekitten.com/250/250
// http://placekitten.com/250/250