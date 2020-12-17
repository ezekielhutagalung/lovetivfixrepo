const router = require('express').Router()
const home = require('../controller/index')

router.get('/', home.home)



module.exports=router