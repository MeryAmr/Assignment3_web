const Blog = require('../models/blog');
async function getBlog(req, res, next) {
    let blogid
    try {
        blogid = await Blog.findById(req.params.id)
        if (blogid == null) {
            return res.status(404).send({ message: 'no such id exists' })
        }
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
    res.blog = blogid
    next()
}
module.exports = getBlog;