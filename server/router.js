const express = require('express');
const bodyParser = require('body-parser');
const signup = require('../controllers/signup');
const signin = require('../controllers/signin');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/signup', signup);

router.post('/signin', signin);

router.all('*', (req, res)=>{
    res.send("Error. Resource not found on this server");
});

module.exports = router;