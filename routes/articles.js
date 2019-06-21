var express = require('express');
var router = express.Router();

class Article {
    
    constructor(id, title, body, categories) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.categories = categories;
        this.date = new Date();
    }
} 

let articleData = [
    new Article(1,"I am a title.","Nothing here really",['toys','electronics','collectables']),
    new Article(2,"Buying stuff from a thing","body", ['toys']),
    new Article(3,"How to impress development managers","body", ['toys','cats','robotics'])
]; 

/* GET article listing. */
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

/* POST Endpoints  */

router.post('/',function(req, res, next){
    req.body

});




module.exports = router;
