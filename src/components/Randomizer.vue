<template>
  <div>
    <button @click="fetchRandomWord">Add a random word</button>
  </div>
</template>

<script>
export default {
  name: 'Randomizer',
  data: function () {
    return {
      wordnikApiUrl: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun'+
      '&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12'+
      '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    }
  },
  methods: {
    fetchRandomWord: function () {
      return fetch(this.wordnikApiUrl)
        .then(response => response.json())
        .then(({id, word}) => {
          this.$emit('add', word);
          return word;
        })
        .catch(e => e);
    }
  },
}
</script>
