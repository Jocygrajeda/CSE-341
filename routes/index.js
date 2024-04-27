const router = require('express').Router();

//router.get('/', (req, res) => { res.send('Hello W');});

router.use('/users', require('/users'));

module.exports = router;