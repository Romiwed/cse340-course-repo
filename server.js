import express from "express";

// Create Express application
const app = express();

// Configure port
const port = process.env.PORT || 3000;

// Configure EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS, images, JavaScript)
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    });
});

// Organizations page
app.get("/organizations", (req, res) => {
    res.render("organizations", {
        title: "Organizations"
    });
});

// Service Projects page
app.get("/projects", (req, res) => {
    res.render("projects", {
        title: "Service Projects"
    });
});

// Categories page
app.get("/categories", (req, res) => {
    res.render("categories", {
        title: "Categories"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});