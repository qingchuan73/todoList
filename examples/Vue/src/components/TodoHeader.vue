<template>
  <header id="r_header">
    <div id="title">你想做些什么</div>
    <div id="main_input">
      <input
        id="input_m"
        type="text"
        name=""
        placeholder="请输入待办事项"
        @keyup.enter="
          if ($event.target.value.trim() != '') {
            $emit('add-todo', $event.target.value);
            $event.target.value = '';
          }
        "
        autofocus
        autocomplete="off"
      />
    </div>
  </header>
</template>

<script setup>
</script>