const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    
    timecreated: {
        type: Date,
        default: Date.now
    },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;