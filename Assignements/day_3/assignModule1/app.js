//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again
import { addTask,getAllTasks,completeTask } from "./task.js";
  // 1. Add some tasks
  addTask("playing","high",'12-12-2025')

  addTask("gaming","medium","34-04-2023")
    // 2. Display all tasks
  let atasks=getAllTasks()
  console.log(atasks)
  console.log(completeTask(1))

  