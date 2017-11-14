<template>
  <div class="list">
    <h1>Comments</h1>
    <ol class="comments" v-if="comments.length > 0">
      <Comment v-for="(comment, i) in comments"
               :comment="comment"
               :key="i"
      />
    </ol>
    <p v-else>There are no comments yet!</p>
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    Comment
  }
}
</script>

<style scoped>
  .list {
    width: 400px;
    margin: auto;
  }

  .comments {
    text-align: left;
  }
</style>
