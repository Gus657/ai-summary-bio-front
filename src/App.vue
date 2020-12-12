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
.md-content {
    width: 100%;
    height: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    background-color: rgb(67, 67, 67);
    color: white;
  }
  .font-color{
    color: white;
  }
  .button-color{
    background-color: rgb(53, 202, 3);
  }

    body{
  background: #3CA55C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #B5AC49, #3CA55C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #B5AC49, #3CA55C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     }
</style>
