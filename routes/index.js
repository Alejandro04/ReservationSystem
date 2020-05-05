const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.locals.metaTags = { 
        title: "Reservas", 
        description: "Sistemas de reservas",   
        keywords: "reservas javascript nodejs" 
    }; 
    res.render('index'); 
})

module.exports = router;