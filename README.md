# Articles
This repository is a quick build out of a simple API and front end.
The API has one endpoint `/articles`

## Usage 
Articles is a typical Node ExpressJS app. Install with the following command:
`npm install`

To run the API:
`npm start`

To Execute tests:
`npm test`

## Endpoints

### GET
`/articles` will return all articles present
`/articles/{id}` will return an article with the specified id.

### POST
`/articles` with parameters for `title`,`body`,and `categories` will generate a post. Categories are not required.

### PUT
`/articles/{id}` with parameters for any of `title`,`body`,and `categories` will update a given post (provided it exists)