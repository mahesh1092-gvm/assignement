import { validateTitle,validatePriority,validateDueDate } from "./validator.js";
   //    ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions
 let  tasks = [];
   // 1. Add new task
                 function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
if(validateTitle && validatePriority && validateDueDate)
{
    tasks.push({title,priority,dueDate})
}
//tasks.push({title,priority,dueDate})
                    }
                     // 2. Get all tasks
                    function getAllTasks() {
                        return tasks
                     }
                      // 3. Mark task as complete
                function completeTask(taskId) {
                    // Find task and mark as complete
                    for(let i in tasks){
                        if(i==taskId){
                            return "task completed"
                        }
                    
               
                   }
                }
              export {addTask,getAllTasks,completeTask}
                    
