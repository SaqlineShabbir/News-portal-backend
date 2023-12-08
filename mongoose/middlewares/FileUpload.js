const path = require('path')
const multer = require('multer')

var storage =  multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let name =Date.now()+"_"+file.originalname
        cb(null,name)
    }
})

var upload = multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        
            callback(null,true)
        
    },
    // limits:{
    //     fileSize: 1024*1024*4
    // }
})

module.exports=upload