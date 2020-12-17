const router = require('express').Router()
const controller = require('../controller/index')


router.get('/test', (req,res)=>{
    res.render('login')
})
router.get('/hai', (req,res)=>{
    res.render('relationship')
})
router.get('/', controller.home)

// router.get('/myprofile/:UserId', controller.ShowMyProfile)

// router.get('/myprofile/:Userid/edit'.controller.EditProfile)

// router.post('/myprofile/:Userid/edit'.controller.EditProfile)

// router.get('/relationship/:UserId', controller.) 

// router.get('/relationship/hubunganserius', controller.) 

// router.get('/relationship/temanbicara', controller.) 

// router.get('/relationship/temankondangan', controller.)


// - hubunganserius
// -teman bicara
// -temen kondangan 



module.exports=router