<template>
  <div id="app">
    <!-- General Tab Menu -->
    <md-card class="card  md-elevation-24 margin-top">
      <!-- General container for tab menu buttons-->
            <div class="top-left">
              <!-- Home Button -->
                <md-button
                  @click="focusHome()" 
                  class=" md-raised font-color " 
                  v-bind:class="[homeButton ? styleFocus : styleUnfocus]"
                >
                  Home
                </md-button>
        <!-- Example Button -->
                <md-button 
                  @click="focusExample()" 
                  class=" md-raised font-color " 
                  v-bind:class="[exampleButton ? styleFocus : styleUnfocus]" 
                >
                  Example
                </md-button>
            </div>
    </md-card>
    <!-- Search user card, this will display the bio data and evaluation options when home tab is selected -->
    <SearchCard 
        v-show="homeButton"
    ></SearchCard>
    <!-- Example Card options, this will display an AI fucntionality example whe the example tab is selected-->
    <Example 
        v-show="exampleButton"
    ></Example>
  </div>
</template>

<script>

import SearchCard from "./components/SearchCard"
import Example from "./components/Example"
const  axios = require('axios'); //library used for making the requests
import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  Vue,
  dsn: "https://3aeb4cacbff04c0ab1bedea0dcd2f613@o573091.ingest.sentry.io/5723239",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

  export default {
    name: 'App',
    components: {
      SearchCard,
      Example
    },
    data(){
      return {
        
        homeButton: true,
        exampleButton: false,
        styleFocus: 'button-color',
        styleUnfocus: 'button-color-unfocus'
      }
      
    },
    methods: {
      focusHome(){ //set style focus on home button
        this.homeButton = true;
        this.exampleButton = false;
      },
      focusExample(){ //set style focus on example button
        this.homeButton = false;
        this.exampleButton = true;
      }
    },
    beforeMount(){
     const URL = 'https://ai-summary-api.herokuapp.com/api/wakeup';// Enpoint to get ready API
                axios.post(URL);
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
    .button-color-unfocus{
      background-color: rgb(79, 104, 71);
    }

 body{
    background: #8cb549; 
    background: -webkit-linear-gradient(to right, #8cb549, #3CA55C);  
    background: linear-gradient(to right, #8cb549, #3CA55C); 
    }
</style>
