<template lang="html">
  <div>
    <p>Now count - {{count}}</p>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <p>
      <button type="button" @click="ansycIncrement">Ansyc +</button>
    </p>
  </div>
</template>

<script>
import * as types from '../store/mutations_types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  computed: {
    count () {
      return this.$store.state.count{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    increment () {
      this.$store.commit(types.INCREMENT_COUNT){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    decrement () {
      this.$store.commit(types.DECREMENT_COUNT){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    ansycIncrement () {
      this.$store.dispatch('increment'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>

<style lang="css">
</style>
