const db = require("./database");

const getAll = async () => {
  return await db.select().from("tarea");
};

const postTask = async (userId, priorityId, title, completed) => {
  return db("tarea").insert({
    user_id: userId,
    prioridad_id: priorityId,
    titulo: title,
    completado: completed,
  });
};
const updateTask = async (taskId, updateTaskData) => {
  await db("tarea").where("id", taskId).update(updateTaskData);
};

const deleteTaskById = async (taskId) => {
  await db("tarea").where("id", taskId).del();
};

module.exports = { getAll, postTask, deleteTaskById, updateTask };
