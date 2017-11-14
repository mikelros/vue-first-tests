<template>
  <li>
    {{ comment }}
  </li>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: String
    }
  }
}
</script>
