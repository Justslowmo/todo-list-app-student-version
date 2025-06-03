const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel");

//This route retrieves and returns a list of all tasks from the database
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// This route receives task data from the client and creates a new task in the database
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { title, description } = req.body; // changed name to title 
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
