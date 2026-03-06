<template>
  <footer id="r_footer">
    <div id="state_bar" class="state_bar" >
      <span id="items_left">{{ completedCount }} 件待办项</span>
      <button v-for="type in ['All','Active','Completed'] " :key="type" class="changeurl" :class="current==type?'active':''" @click="current=type;$emit('change-state',current)"  > {{ type }}</button>
      <button id="clear_completed" @click="$emit('clear-completed')">清除所有完成项</button>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";

const current = ref('All');

const props=defineProps({
  todos: Array,
});

const completedCount = computed(() => {
  return props.todos.filter(todo => !todo.completed).length;
});





 

</script>