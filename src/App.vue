<!-- App.vue -->

<template>
  <div>
    <!-- Título da aplicação -->
    <h1>Lista de Tarefas</h1>
    
    <!-- Lista de tarefas -->
    <ol>
      <!-- Iteração sobre as tarefas usando v-for -->
      <li v-for="task in tasks" :key="task.id">
        <!-- Checkbox para marcar tarefa como concluída -->
        <input type="checkbox" v-model="task.completed" @input="toggleTask(task.id)">
        
        <!-- Exibição do texto da tarefa, com estilo condicional se estiver concluída -->
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        
        <!-- Botão para remover a tarefa -->
        <button @click="removeTask(task.id)">X</button>
      </li>
    </ol>
    
    <!-- Entrada de nova tarefa -->
    <!-- Use @keyup.enter.prevent para evitar problemas com a submissão do formulário -->
    <input v-model="newTask" @keyup.enter.prevent="addTask" placeholder="Adicionar nova tarefa">
  </div>
</template>

<script>
// Importa o controlador de tarefas
import { taskController } from './controller';

export default {
  data() {
    // Dados da aplicação
    return {
      tasks: taskController.getTasks(), // Lista de tarefas
      newTask: '', // Nova tarefa a ser adicionada
    };
  },
  methods: {
    // Adiciona uma nova tarefa
    addTask() {
      if (this.newTask.trim() !== '') {
        taskController.addTask(this.newTask.trim());
        this.newTask = '';
      }
    },
    // Alterna o estado de uma tarefa e salva as tarefas
    toggleTask(taskId) {
      taskController.toggleTask(taskId);
      taskController.saveTasks();
    },
    // Remove uma tarefa
    removeTask(taskId) {
      taskController.removeTask(taskId);
    },
  },
};
</script>

<style>
/* Estilos CSS */
.completed {
  text-decoration: line-through; /* Linha através do texto para tarefas concluídas */
}

ol {
  list-style-type: none; /* Remove a estilização padrão da lista ordenada */
  padding: 0; /* Remove o preenchimento padrão da lista ordenada */
}

input {
  margin-right: 10px; /* Margem à direita para o elemento de entrada */
}
</style>
