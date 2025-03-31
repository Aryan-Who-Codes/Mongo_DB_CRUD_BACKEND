const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/blogs", blogRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

