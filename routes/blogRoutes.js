const express = require("express");
const router = express.Router();
const {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

router.route("/").post(createBlog).get(getBlogs);
router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;
