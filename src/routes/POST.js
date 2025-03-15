const express = require('express');
const router = express.Router();
const { postcon } = require('../database/postgresdb');
const Blog = require('../models/blog');

router.post('/authors', (req, res) => {
    const query = 'INSERT INTO blog.authors(name, email) VALUES($1, $2)'
    const { name, email } = req.body;
    postcon.query(query, [name, email])
        .then(() => {
            res.status(200).send({ message: 'Author added successfully'});
        })
        .catch((err) => {
            res.status(404).send({ message: err.message });
        });
});
router.post('/blogs', async (req, res) => {
        const blog = new Blog({
            blogtitle: req.body.blogtitle,
            content : req.body.content })
            try{
                const newblog = await blog.save();
                res.status(201).json(newblog)
            } catch (err) {
                res.status(400).send({ message: err.message })
        }
    }
);
module.exports = router;