var app = new Vue({
  el: '#app',
    data() {
      return {
        text: '',
        todos: [
          {
            text: 'Add your to-do items above.',
            completed: false
          },
          {
            text: 'To mark as done, select the checkbox.',
            completed: false
          },
          {
            text: 'To delete items, double click/tap delete.',
            completed: false
          }
        ]
      }
    },
    methods: {
      submitForm(e) {
        this.todos.push({
          text: this.text,
          completed: false
        });
        e.preventDefault();
        this.text = '';
      },
      deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    }
});
