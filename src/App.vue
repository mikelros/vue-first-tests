<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CommentInput @add="addComment" />
    <CommentList :comments="comments" />
  </div>
</template>

<script>
import CommentInput from './components/CommentInput.vue';
import CommentList from './components/CommentList.vue';

export default {
  name: 'app',
  components: {
    CommentInput,
    CommentList
  },
  data: function () {
    return {
      comments: []
    };
  },
  methods: {
    addComment: function (comment) {
      this.comments.push(comment);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 700px;
}
</style>
