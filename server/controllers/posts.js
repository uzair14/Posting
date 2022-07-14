const express = require('express');
const router = express.Router();

const Post= require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        // console.log(posts);
        res.status(200).json({posts})
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id)
        // console.log(post);
        res.status(200).json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
});

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.story)
        //console.log(req.body.title);
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router
