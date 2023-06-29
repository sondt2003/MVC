const express=require('express');
const router=express.Router();

router.use('/v1/api',require('./login'))
router.get('/', function(req, res){
    return res.status(200).send({
        message:'Welcome'
    });
})
module.exports=router;