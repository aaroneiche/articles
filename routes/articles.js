var express = require('express');
var router = express.Router();



let articleData = [
    {
        id:1,
        title: "I am a title.",
        body: "body",
        date:"2018-12-24T23:02:00.000Z",
        categories: ['toys','electronics','collectables']
    },
    {
        id:2,
        title: "Buying stuff from a thing",
        body: "body",
        date:"2019-06-21T02:02:00.608Z",
        categories: ['toys']
    },
    {
        id:3,
        title: "How to impress development managers",
        body: "body",
        date:"2018-05-18T02:02:00.608Z",   
        categories: ['toys','cats','robotics']     
    }
]; 

/* GET users listing. */
router.get('/', function(req, res, next) {
    //Send all the articles! In a larger system we'd probabyl paginate this.
    res.json(articleData);
});

router.get('/:id', function(req, res, next) {

    //find the article by ID.
    let thisArticle = articleData.find(el=>{
        return el.id == req.params.id;
    });

    //If we can't find the article, lets return a 404
    if(thisArticle == undefined) {
        res.status(404);
        res.json({error: "Article ID not found"});
    }

    res.json(thisArticle);
  });


module.exports = router;
