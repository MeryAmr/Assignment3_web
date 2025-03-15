const express = require('express');
const router = express.Router();
const { postcon } = require('../database/postgresdb');
const Blog = require('../models/blog');
const getBlog = require('../middlewares/findbyid');
router.put('/authors/:id', (req, res) => {
    const query = 'UPDATE blog.authors SET name = $1, email = $2 WHERE id = $3'
    const { name, email } = req.body;
    const idnum = parseInt(req.params.id)
    postcon.query(query, [name, email, idnum])
        .then(() => {
            res.status(200).send({ message: 'Author updated successfully' });
        })
        .catch((err) => {
            res.status(404).send({ message: err.message });
        });
});

router.patch('/blogs/:id', getBlog, async (req, res) => { 
    if (req.body.blogtitle != null) {
        res.blog.blogtitle= req.body.blogtitle
    }
    if (req.body.content != null) {
        res.blog.blogcontent= req.body.content
    }
    try {
        const updatedblog = await res.blog.save();
        console.log("heheha")
        res.status(201).send(updatedblog)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
});
module.exports = router;