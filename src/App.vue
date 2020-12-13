<template>
  <div id="app">
    <SearchCard></SearchCard>
  </div>
</template>

<script>

import SearchCard from "./components/SearchCard"
export default {
  name: 'App',
  components: {
    SearchCard
  }

}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  margin-left: 30px;
  margin-right: 30px;
}

  .card{
    background-color: rgba(67, 67, 67, 0.755);
    color: white;
  }
  .font-color{
    color: white;
  }
  .button-color{
    background-color: rgb(53, 202, 3);
  }

    body{
  background: #8cb549;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8cb549, #3CA55C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8cb549, #3CA55C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     }
</style>
