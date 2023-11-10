// model.js

// Chave para armazenar as tarefas no localStorage
const tasksKey = 'tasks';

// Obtém a lista de tarefas do localStorage ou inicializa uma array vazia
export const tasks = JSON.parse(localStorage.getItem(tasksKey)) || [];

// Método para salvar as tarefas no localStorage
export const saveTasks = () => {
  // Converte a array 'tasks' em uma string JSON e a armazena no localStorage
  localStorage.setItem(tasksKey, JSON.stringify(tasks));
};