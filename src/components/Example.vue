<template>
    <div>
      <!-- Main container for the evaluation example results card component -->
        <md-card class="card  md-elevation-24">
            <md-card-header>
                <div class="md-title">AI Evaluation Example</div>
                    <div>
            <!-- Text Area for get the text to evaluation example -->
                        <md-field>
                            <label>Type here the text to evaluate</label>
                            <md-textarea class="md-elevation-1 font-color" v-model="textForExample" md-autogrow></md-textarea>
                        </md-field>
                    </div>
            <!-- Help leyend -->
                <span class="md-subhead separator">  
                    <i>Try any text, and see the results of your writing.</i>
                </span>  
                <br> 
                <br>
            <!-- Main container for the evaluation results card component -->
                <md-button @click="evaluate(textForExample, 'en')" class="md-raised font-color button-color" v-show="!state">English</md-button>
                <md-button @click="evaluate(textForExample, 'es')" class="md-raised font-color button-color" v-show="!state">Spanish</md-button>
                <md-button @click="clearData()" class="md-raised font-color button-color" v-show="state">Clear</md-button> 
            </md-card-header>
        </md-card>
    <!-- Main container for the evaluation results card component -->
        <div class="md-layout md-gutter" v-show="state">
            <EvaluationCard :results="positive" class="md-layout-item"></EvaluationCard>
            <EvaluationCard :results="negative" class="md-layout-item"></EvaluationCard>
            <EvaluationCard :results="neutral" class="md-layout-item"></EvaluationCard>
        </div>
    </div>

</template>
<script>
import EvaluationCard from "./Evaluation"
const  axios = require('axios'); //library used for making the request to backend

export default {
    name: 'Example',
    components: {
     EvaluationCard //Child component used for display results
    },
    data(){
        return {
            textForExample:'', //Storage the text to analyze
            state: false, // Used to determine the state of aplication components
            positive: { //Object to describe positive results
                value: 50,
                type: 'Positive',
                emoji: '😁'
            },
            negative: {//Object to describe negative results
                 value: 30,
                type: 'Negative',
                emoji: '🤨'
            },
            neutral: { // Object to describe neutral results
                 value: 50,
                type: 'Neutral',
                emoji: '🤐'
            }
        }
    },
    methods: {
        evaluate(text ,language){ // text represents data to analyze and lang is language of the text
                if (text!=''){//Validates if input text is valid
                const URL = 'https://ai-summary-api.herokuapp.com/api/evaluate';// Enpoint of AI 
                axios.post(URL, {
                    //Object sended to endpoint
                summary: text,
                lang : language
                })
                .then(response => {
                    //storage the results
                    this.positive.value = (response.data.positive * 100).toFixed(2);
                    this.negative.value = (response.data.negative * 100).toFixed(2);
                    this.neutral.value = (response.data.neutral * 100).toFixed(2);
                    this.state = true
                })
                .catch(err => {
                    //Show the error message if the response is not valid
                    alert("Error on data 😢")
                })
                }else{
                    //validation for empty text
                    alert("Please type any text to analyse")
                }
            },
        clearData(){
            //Set empty text and initial state
            this.state = false,
            this.textForExample = ''
        }
    }
    
}
</script>

<style >


</style>