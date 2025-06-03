const db = require("../db");

//this function retrieves all task from the tasks table in order from least to greatest 
//it also returns an array of task objects
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

//This function inserts a new task into the 'tasks' table with a title, description and sets the 'is_complete' 
//field to false, with the current timestamp for 'created_at'. and It returns the newly inserted task object.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
