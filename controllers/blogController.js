const Blog = require("../models/blogModel");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, slug, content, category } = req.body;
    const blog = await Blog.create({ title, slug, content, category });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};

// Get Single Blog
const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.status(200).json(blog);
};

// Update Blog
const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.status(200).json(blog);
};

// Delete Blog
const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.status(200).json({ message: "Blog deleted successfully" });
};

module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
