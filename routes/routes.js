const express = require("express");
const router = express.Router();

const taskController = require(`../controllers/taskController.js`);

router.get("/", (req, res) => {
  res.send("Task List - Rest API Server");
});
// GET TASKS
router.get("/tasks", taskController.getTasks);
// POST TASKS
router.post("/tasks", taskController.postTask);
// UPDATE TASK
router.put("/tasks/:id", taskController.updateTask);
// DELETE TASK
router.delete("/tasks/:id", taskController.deleteTaskById);

module.exports = router;
