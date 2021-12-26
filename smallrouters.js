var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send({name:'abdoul',hobbies:'coding'});
});
router.post('/', function(req, res){

    var getA={you:'have you coded today ?'}
    res.json(200, {
        getA
     });
});

//export this router to use in our index.js
module.exports = router;