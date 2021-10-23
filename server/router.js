const express = require("express");
const router = express.Router();
const db = require("../db.json");

router.get("/", (req, res) => {
  res.render("home", {
    meta: req.app.get("meta"),
    comments: db.comments,
  });
});

module.exports = router;
