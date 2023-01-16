const express = require("express");
const router = express.Router();
const Subject = require("../models/subject");

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// Get all subjects
router.get(
  "/subjects",
  wrapAsync(async (req, res, next) => {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  })
);

// Get one subject
router.get(
  "/subject/:id",
  wrapAsync(async (req, res, next) => {
    res.status(200).json(res.subject);
  })
);

module.exports = router;
