const express = require('express');
const router = express.Router();
const callbackController = require("../controllers/callback");
const searchController = require("../controllers/search");

router.post('/callback', callbackController);
router.get('/search', searchController);

module.exports = router;