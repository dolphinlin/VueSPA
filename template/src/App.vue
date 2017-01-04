<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>      
      <router-link to="/" exact>
        <!-- router-link's exact will only be active at '/'  -->
        Home
      </router-link>
      <router-link to="/foo" active-class="active">
        Foo
      </router-link>
      <router-link to="/bar" active-class="active" >
        Bar
      </router-link>
      <router-link to="/state" active-class="active" >
        State
      </router-link>
    </p>

    <router-view></router-view>
    <!-- vouter-view will be rendered -->
  </div>
</template>

<script>
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
