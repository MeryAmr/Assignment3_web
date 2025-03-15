const express = require('express');
const router = express.Router();
const { postcon } = require('../database/postgresdb');
const Blog = require('../models/blog');
const getBlog = require('../middlewares/findbyid');
router.delete('/authors/:id', (req, res) => { 
    const query = 'DELETE FROM blog.authors WHERE id = $1'
    const idnum = parseInt(req.params.id)
    postcon.query(query, [idnum])
        .then(() => {
            res.status(200).send({ message: "author deleted successfully" })
        })
        .catch((err) => {
        res.status(500).send({message: err.message})
    })
})
router.delete('/blogs/:id', getBlog, async (req, res) => {
    try {
        await res.blog.deleteOne()
        res.status(200).send({ message: 'blog deleted successfully' })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})
module.exports = router