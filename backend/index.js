const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>AWS EKS DevOps Platform</h1>
        <p>Application is running successfully!</p>
        <p>Deployed using AWS, Docker, Jenkins, Terraform and Kubernetes.</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});