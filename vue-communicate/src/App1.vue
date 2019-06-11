<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div>
      <input type="text" v-model="val">
      <button @click="add">添加</button>
      <button @click="clear">清空</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.title" :class="{done:todo.done}">
        <input type="checkbox" v-model="todo.done">
        {{todo.title}}
      </li>
    </ul>
    <p>{{active}} / {{all}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "大圣老师很骚气",
      val: "",
      todos: []
    };
  },
  mounted() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    } else {
      this.todos = [
        { title: "吃饭", done: true },
        { title: "睡觉", done: false },
        { title: "写代码", done: false }
      ];
    }
  },
  computed: {
    active() {
      return this.todos.filter(v => !v.done).length;
    },
    all() {
      return this.todos.length;
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    }
  },
  methods: {
    clear() {
      this.todos = this.todos.filter(v => !v.done);
    },
    add() {
      if (this.val) {
        this.todos.push({ title: this.val, done: false });
        this.val = "";
      }
    }
  }
};


</script>
<style>
li.done {
  color: red;
  text-decoration: line-through;
}
</style>
