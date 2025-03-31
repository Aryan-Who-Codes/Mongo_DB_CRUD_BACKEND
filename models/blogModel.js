const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Blog title is required"] },
        slug: { type: String },
        content: { type: String },
        category: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
