<template>
  <b-container class="bv-example-row" v-on:keydown.space="keyEvent">
    <b-row>
      <router-link to='/'>
        <b-icon id="backspaceIcon" icon="backspace" font-scale="4" shift-v="8" ></b-icon>
      </router-link>
    </b-row>
    <b-row class="mb-5">
      <b-col>
      <h1>Todo List</h1>

      <ul class="listSection">
        <li class="mt-5 h-100" v-for="todoItem in todoItems.data" v-focus>
          {{ todoItem.content}}
        </li>
      </ul>

      <b-input
          id="todoItemInput"
          class="mb-2 mb-sm-0 mt-5"
          placeholder="지금 당장 해야 할 일들을 입력해주세요"
          v-on:keyup.enter="createTodoItem"
          v-model="todoItemInput.data"
          autofocus
        ></b-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
var todoItems 
  = {
    data: [],
    cnt: 0
  };

var focusElements = [];

var selectedItemNumber = -1;

export default {
  name: 'Index',
  data() {
    return {
      todoItems: todoItems,
      todoItemInput: {
        data: '',
        placeholder: '오늘 할 일을 입력해주세요'
      }
    }
  },
  created() {
    // TODO: mixins 분리 
    window.addEventListener('keyup', (e) => {
      var prevSelectItemNumber = selectedItemNumber;

      if (selectedItemNumber == -1) {
        return;
      }

      if (e.key === 'ArrowUp') {
        if (selectedItemNumber > 0) {
          selectedItemNumber--;
        }
        console.log('ArrowUp')
      } else if (e.key === 'ArrowLeft') {
        console.log('ArrowLeft')
      } else if (e.key === 'ArrowRight') {
        console.log('ArrowRight')
      } else if (e.key === 'ArrowDown') {
        if (selectedItemNumber < focusElements.length - 1) {
          selectedItemNumber++;
        }
        console.log('ArrowDown')
      }

      if (prevSelectItemNumber !== selectedItemNumber) {
        focusElements[prevSelectItemNumber].classList.remove('focus');
        focusElements[selectedItemNumber].classList.add('focus');
      }
    });
  },
  mounted() {
    console.log('mounted')
    todoItems.data = [
      // {
      //   id: 1,
      //   content: '1 string'
      // },
      // {
      //   id: 2,
      //   content: '2 string'
      // },
      // {
      //   id: 3,
      //   content: '3 string'
      // },
    ];
    todoItems.cnt = todoItems.data.length;

    if (todoItems.cnt > 0) {
      this.$nextTick(function() {
        selectedItemNumber = 0;
        focusElements[selectedItemNumber].classList.add('focus');
      });
    }
  },
  updated() {
    console.log('updated');
  },
  methods: {
    createTodoItem() {
      console.log('createTodoItem')
      console.log(this.todoItemInput.data);
      var todoItemCount = todoItems.cnt;
      todoItems.data.push({
        id: todoItemCount + 1,
        content: this.todoItemInput.data
      })

      console.log(todoItems);

      this.todoItemInput.data = '';
    },
    returnIndexPage() {

    }
  },
  directives: {
    focus: {
      bind: function(el, binding, vnode) {
        console.log(el);
        console.log(binding);

        focusElements.push(el);
      },
      inserted: function(el, binding, vnode) {
        console.log('inserted');
      },
      update: function(el, binding, vnode) {
        console.log('update');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .listSection {
    list-style: none;
    padding-left: 0;
  }

  .listSection li {
    border: 5px solid #f7eaea;
    font-size: 30px;
    box-shadow: 5px 5px 5px;
  }

  .listSection li.focus {
    border: 20px solid #000;
  }

  input {
    width: 75%;
    height: 4em;
    text-align: center;
    margin-left: 12.5%;
  }

  input:focus {
    place-content: '';
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>

