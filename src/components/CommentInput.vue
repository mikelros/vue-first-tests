<template>
  <div>
    <input autofocus autocomplete="off"
           placeholder="What do you want to comment?"
           v-model="comment"
           @keyup.enter="addComment"
           class="creator"
    />
    {{ reversedInput }}
  </div>
</template>

<script>
export default {
  name: 'CommentCreator',
  data: function () {
    return {
      comment: ''
    };
  },
  methods: {
    addComment: function () {
      this.$emit('add', this.comment);

      this.comment = '';
    }
  },
  computed: {
    reversedInput: function () {
      return this.comment.split('').reverse().join('');
    }
  },
  watch: {
    comment: function (newValue) {
      console.log(newValue);
    }
  }
}
</script>

<style scoped>
  .creator {
    width: 100%;
    padding: 6px;
    margin-bottom: 50px;
  }

  .creator:focus {
    outline: none;
  }
</style>
