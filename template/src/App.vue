<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/" exact>
      <!-- router-link's exact will only be active at '/'  -->
      Home
    </router-link>
    <router-link to="/foo" active-class="active" tag="li">
      <a>Foo</a>
    </router-link>
    <router-link to="/bar" active-class="active" tag="li">
      <a>Bar</a>
    </router-link>
    <router-link to="/state" active-class="active" tag="li">
      <a>State</a>
    </router-link>

    <router-view></router-view>
    <!-- vouter-view will be rendered -->
  </div>
</template>

<script>
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: #AAA;
}
</style>
