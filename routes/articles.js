var express = require('express');
var router = express.Router();

//initial ID value.
let lastId = 1;

class Article {
    
    constructor(title, body, categories) {
        this.id = lastId;
        this.title = title;
        this.body = body;
        this.categories = categories;
        this.date = new Date();
        
        lastId++;
    }
} 

let articleData = [
    new Article(`I am a title.`,`Nothing here really`,['toys','electronics','collectables']),
    new Article(`Buying stuff from a thing`,`body`, ['toys']),
    new Article(`How to impress development managers`,`body`, ['toys','cats','robotics'])
]; 

/* GET article listing. */
router.get('/', function(req, res, next) {
    //Send all the articles! In a larger system we'd probabyl paginate this.
    res.json(articleData);
});

/* GET article by id */
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

    //Check for missing properties
    if(req.body.title == undefined || req.body.body == undefined){
        res.status(400);
        res.json({error:"Missing Title or Body of article"});
    }else{
        let article = new Article(
            req.body.title,
            req.body.body,
            req.body.categories
        );
    
        articleData.push(article);
        
        res.status(201);
        res.send(`/articles/${article.id}`); 
    }
});




module.exports = router;
