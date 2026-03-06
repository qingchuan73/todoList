
<template>
  <div id="container">
    <TodoHeader @add-todo="addtodo" />
    <main id="main_item">
      <ul id="new_item">
        <label class="allCheck" v-if="todos.length">
          <input type="checkbox" @click="toggleAll" />
          <span id="allText" :style="{ opacity: allChecked ? 0.5 : 1 }">∨</span>
        </label>
        
        <TodoItem
          v-for="(todo, index) in filterTodos"
          :key="index"
          :todo="todo"
          @toggle-todo="toggletodo"
          @destroy-todo="destroy"
          @edit-todo="(todo,newvalue)=>{todo.text=newvalue}"
         

        />
      </ul>
    </main>
    <TodoFooter
      v-if="todos.length"
      :todos="todos"
      @change-state="changestate"
      @clear-completed="clearCompleted"

    />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";

const todos = ref([]);
const stateBar = ref("All");
const filterTodos = computed(() => {
  const filters = {
    All: (todo) => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };
  return todos.value.filter(filters[stateBar.value]);
});

const allChecked = computed(() => {
  return todos.value.length > 0 && todos.value.every((todo) => todo.completed);
});
const addtodo = (newtodo) => {
  console.log(newtodo);
  todos.value.push({ text: newtodo, completed: false });
};

const toggletodo = (todo) => {
  todo.completed = !todo.completed;
};

const toggleAll = () => {

  if(filterTodos.value.length==0){
    return;
  }
  const all=!allChecked.value;

  console.log(allChecked.value);
  todos.value.forEach((todo) => {
    todo.completed = all;
  });
};

const destroy = (todo) => {
  const index = todos.value.indexOf(todo);
  console.log(todo);
  todos.value.splice(index, 1);
};

const changestate = (state) => {
  console.log(stateBar.value);
  stateBar.value = state;
};

const clearCompleted = () => {
  todos.value = todos.value.filter((todo) => !todo.completed);
  console.log(todos.value);
};
</script>

<style  scoped>
.allCheck {
  cursor: pointer;
  user-select: none;
}

.allCheck input {
  opacity: 0;
  position: absolute;
}
</style>