const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.post("/send", (req, res) => {
  console.log("FORM RECEIVED:");
  console.log(req.body);

  return res.status(200).json({
    success: true,
    message: "Form Submitted Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});