<template>
  <li>
    <div class="todo-item" @dblclick="edit">
      <input
        v-if="editState"
        type="text"
        id="test_input"
        ref="editInput"
        v-model="newvalue"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
      />
      <input
        @dblclick.stop
        v-if="!editState"
        :checked="todo.completed"
        type="checkbox"
        class="li_checkbox"
        @click="$emit('toggle-todo', todo)"
      />
      <label
        @dbclick.stop
        v-if="!editState"
        class="check"
        :class="todo.completed ? 'completed' : ''"
        >{{ todo.text }}</label
      >
      <button
        @dbclick.stop
        v-if="!editState"
        class="destroy"
        @click="$emit('destroy-todo', todo)"
      >
        ✕
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref, nextTick } from "vue";
const editState = ref(false);
const editInput = ref(null);
const newvalue = ref("");
const emit = defineEmits(["toggle-todo", "destroy-todo", "edit-todo"]);

const edit = () => {
  newvalue.value = "";
  editState.value = true;
  nextTick(() => {
    editInput.value.focus();
  });
};

const saveEdit = () => {
  editState.value = false;
  if (newvalue.value.trim() !== "") {
    emit("edit-todo", props.todo, newvalue.value.trim());
  } else {
    newvalue.value = props.todo.text;
  }
};

const props = defineProps({ todo: Object });
</script>