const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/send", (req, res) => {
  console.log("BODY:", req.body);

  return res.status(200).json({
    success: true,
    message: "Success",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});