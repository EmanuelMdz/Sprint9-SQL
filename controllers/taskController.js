const crudTasks = require("../services/crudTasks");

//GET TASK
const getTasks = async (req, res) => {
  try {
    const tasks = await crudTasks.getAll();
    res.send(tasks);
  } catch {
    res.status(500).send("Error al traer las tareas");
  }
};

// POST TASK
const postTask = async (req, res) => {
  try {
    const { userId, priorityId, title, completed } = req.body;
    await crudTasks.postTask(userId, priorityId, title, completed);
    res.status(200).send("Tarea creada con éxito");
  } catch {
    res.status(500).send("Error al agregar tarea");
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const updateTaskData = req.body;
    await crudTasks.updateTask(taskID, updateTaskData);
    res.send("Tarea actualizada correctamente");
  } catch {
    res.status(500).send("Error al actualizar la tarea");
  }
};

//DELETE TASK
const deleteTaskById = async (req, res) => {
  try {
    const taskID = req.params.id;
    const deleteTask = await crudTasks.deleteTaskById(taskID);
    res.send("Tarea eliminada correctamente");
  } catch {
    res.status(500).send("Error al eliminar tarea");
  }
};

module.exports = { getTasks, postTask, deleteTaskById, updateTask };
