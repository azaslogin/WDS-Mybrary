const express = require('express')
const router = express.Router()
const Author = require('../models/author.js')

//All authors
router.get('/', (req,res) => 
    res.render('authors/index.ejs'
))
//New author
router.get('/new', (req,res) => 
    res.render('authors/new.ejs', {author: new Author()}
))

//Create author
router.post('/', (req,res) => 
    res.send('Create'
))

module.exports = router