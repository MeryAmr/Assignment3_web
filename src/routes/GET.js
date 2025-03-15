const express = require('express');
const router = express.Router();
const { postcon } = require('../database/postgresdb');
const Blog = require('../models/blog');
const getBlog = require('../middlewares/findbyid');
router.get('/', (req, res) => {
    const query = 'SELECT * FROM blog.authors';
    postcon.query(query)
        .then((data) => {
            res.status(200).send(data.rows);
        })
        .catch((err) => {
            res.status(404).send({ message: err.message });
        });
});
router.get('/authors', (req, res) => {
    const query = 'SELECT * FROM blog.authors';
    postcon.query(query)
        .then((data) => {
            res.status(200).send(data.rows);
        })
        .catch((err) => {
            res.status(404).send({ message: err.message });
        });
});

router.get('/blogs', async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(201).send(blog)
    } catch (err) {
        res.status(404).send({ message: err.message })
    }
})
router.get('/blogs/:id', getBlog, async (req, res) => { 
    res.status(200).send(res.blog)
})

module.exports = router;