var express = require('express');
var router = express.Router();



let articleData = [
    {id:1,
    title: "I am a title."
    },
    {id:2,
    title: "Buying stuff from a thing"
    },
    {id:3,
    title: "How to impress development managers"        
    }
]; 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({});
});

router.get('/:id', function(req, res, next) {
    
    let thisArticle = articleData.find(el=>{
        return el.id == req.params.id;
    });

    if(thisArticle == undefined) {
        res.status(404);
        res.json({error: "Article ID not found"});
    }

    /* 
    {
        id: 1,
        title: "I am an article!",
        body: "hear me roar",
        date: "2019-06-21T02:02:00.608Z",
        categories: ['cat1','cat2','cat3']
    }
    */

    res.json(thisArticle);
  });


module.exports = router;
