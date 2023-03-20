
const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

router.get('/', (req, res) => {
        console.log(`req.body data ${req.body}`);
        axios({
            method: 'GET',
            url: `api.github.com/search/repositories?language:${req.body}&sort=stars&order=desc&per_page=5`,
        })
            .then((apiRes) => {
                res.send(apiRes.data);
            })
            .catch((err) => {
                console.error('API GET failed', err);
                res.sendStatus(500);
            });
});


module.exports = router;


