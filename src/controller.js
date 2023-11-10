// controller.js

// Importa a lista de tarefas do modelo
import { tasks } from './model';

// Controlador de tarefas com métodos para manipulação da lista de tarefas
export const taskController = {
  // Obtém a lista de tarefas
  getTasks: () => tasks,
  
  // Adiciona uma nova tarefa à lista
  addTask: (text) => {
    // Cria uma nova tarefa com um ID único
    const newTask = { id: tasks.length + 1, text, completed: false };
    
    // Adiciona a nova tarefa à lista de tarefas
    tasks.push(newTask);
    
    // Salva as tarefas após a adição
    saveTasks();
  },
  
  // Alterna o estado de conclusão de uma tarefa
  toggleTask: (taskId) => {
    // Encontra a tarefa com base no ID
    const task = tasks.find(task => task.id === taskId);
    
    // Se a tarefa existir, alterna seu estado de conclusão e salva as tarefas
    if (task) {
      task.completed = !task.completed;
      saveTasks();
    }
  },
  
  // Remove uma tarefa com base no ID
  removeTask: (taskId) => {
    // Encontra o índice da tarefa com base no ID
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    // Se o índice for válido, remove a tarefa da lista e salva as tarefas
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      saveTasks();
    }
  },
};
