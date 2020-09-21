<template>
  <b-container class="m-auto" align-v="center">
    <b-row class="mb-5" align-h="center">
      <b-col>
        <h1>
          <router-link to='/todolist'>Do it Now!</router-link>
        </h1>

        <b-input
          id="todoItemInput"
          class="mb-2 mb-sm-0"
          placeholder="지금 당장 해야 할 일들을 입력해주세요"
          v-on:keyup.enter="createTodoItem"
          v-model="todoItem"
          autofocus
        ></b-input>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
      <h1>Over Deadline</h1>

      <ul class="deadLineSection__list">        
        <li class="mt-5 h-100" v-for="deadlineItem in deadlineItems">
          {{ deadlineItem.content}}
        </li>
      </ul>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <h1>Do it Now!</h1>

        <b-input
          id=""
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="생각난 것을 바로 적어주세요"
        ></b-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
var todoItems = [];
var todoItemCount = 0;

export default {
  name: 'Index',
  data () {
    return {
      todoItem: '',
      deadlineItems: [
        {
          id: '1',
          content: '영어 공부하기'
        },
        {
          id: '2',
          content: '운동하기'
        }
      ]
    }
  },
  methods: {
    createTodoItem() {
      console.log('createTodoItem')
  
      todoItemCount++;

      todoItems.push({
        id: todoItemCount,
        content: this.todoItem
      })

      this.todoItem = '';

      console.log(todoItems)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .deadLineSection__list {
    list-style: none;
    padding-left: 0;
    width: 75%;
    margin-left: 12.5%;
  }

  .deadLineSection__list li {
    border: 5px solid #f7eaea;
    font-size: 30px;
    box-shadow: 5px 5px 5px;
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

