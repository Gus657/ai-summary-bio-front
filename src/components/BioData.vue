<template>
    <div>
        <!-- Main container for bios data show component -->
     <md-card class="card md-elevation-24">
         <!-- General layout for child containers -->
        <div class="md-layout md-gutter">
                 <div class="md-title md-layout-item card-margin">
                    <img v-bind:src="[true ? peopleData.picture : '']" alt="Photo">
                     <div class="md-title">
                     {{peopleData.name}}
                    </div>
                     <span class="md-subhead">  <i>{{peopleData.headline}}</i></span>  
                </div>

               <div class="summary md-layout-item">
                 <md-card-header>
                      <div class="md-title">
                          Summary of Bio
                </div>
                     <p class="md-subhead separator">  <i>{{peopleData.summary}}</i></p>  
                   <div class="md-title">
                         Evaluate
                </div>
                <br>
                <!-- Evaluation buttons, this buttons will disapear when one of them will pressed -->
                     <md-button @click="evaluate(peopleData.summary, 'en')" class="md-raised font-color button-color" v-show="state==1">English</md-button>
                     <md-button @click="evaluate(peopleData.summary, 'es')" class="md-raised font-color button-color" v-show="state==1">Spanish</md-button>
                     <md-button @click="saveResults()" class="md-raised font-color button-color" v-show="state==2">Save Results</md-button>
                 </md-card-header>
                </div>
     </div>

   </md-card>

   <!-- Showin de results of evaluation in child components -->
    <div class="md-layout md-gutter" v-show="state==2 || state==3">
    <EvaluationCard :results="positive" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="negative" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="neutral" class="md-layout-item"></EvaluationCard>
    </div>
    
    <div class="card md-elevation-24 card-margin md-title" v-show="state==2 || state==3" >
    Saved Results: {{peopleData.userResults.length}}
    </div>

    <div class="md-layout md-gutter" v-show="state==2 || state==3" >
        <div v-for="(item, i) in peopleData.userResults" v-bind:key="item" class="md-layout-item">
            <ResultCard v-show="state==3" :results="item" class=" cardSize" ></ResultCard>
             <button v-show="state==3" class="font-color button-color icon-btn-margin" @click="showSummary(item.summary)">👁️</button>
             <button v-show="state==3" class="font-color button-color-unfocus icon-btn-margin" @click="deleteResult(i, item.name, item.date)">❌</button>
        </div>
    
    </div>
    
    
    <!-- Information leyend -->
    <md-card class="card card-margin">
         <span class="md-subhead">  <i>Remember, this is only an idea to help you, isn't a requirement for you.</i></span>  
    </md-card>
    
    </div>
</template>



<script>
import EvaluationCard from "./Evaluation"
import ResultCard from "./ResultCard"
const  axios = require('axios'); //library used for making the requests

    export default {
        props: ['peopleData', 'state', 'user'], // props used to know the general state of the application
        components: {
            EvaluationCard, //Child component for result display
            ResultCard
        },
        data() {
            return {
                 //Used to control de state of aplication 
                positive: { //Object to describe the positive state
                    value: 50,
                    type: 'Positive',
                    emoji: '😁'
                },
                negative: {// objecto to the negative state
                    value: 30,
                    type: 'Negative',
                    emoji: '🤨'
                },
                neutral: { //object to describe neutral state
                    value: 20,
                    type: 'Neutral',
                    emoji: '🤐'
                }
            }
        },
        methods: {
            //this method call the AI API
            evaluate(text ,language, appState){ // use text to define the input to analyze and use lang to know which language it should use
                
                if (text!=''){ //Validates if input text is not empty
                const URL = 'https://ai-summary-api.herokuapp.com/api/evaluate';// Enpoint of AI
                axios.post(URL, { //Object sended in the request
                summary: text,
                lang : language
                })
                .then(response => {
                    //store the response and adjust percentages
                    this.positive.value = (response.data.positive * 100).toFixed(2);
                    this.negative.value = (response.data.negative * 100).toFixed(2);
                    this.neutral.value = (response.data.neutral * 100).toFixed(2);
                    this.state = 2
                })
                .catch(err => {
                    //show an error message if the response is not valid
                    alert("Error on data 😢")
                })
                }else{
                    //validation for empty text
                    alert("Please type any text to analyse")
                }
            },
            saveResults() {
                 this.state = 3

                 //Getting Data from users
                    const URL = 'https://ai-summary-api.herokuapp.com/api/results/save';// Enpoint of AI
                    axios.post(URL, { //Object sended in the request
                    name: this.user,
                    positiveValue : this.positive.value,
                    negativeValue : this.negative.value,
                    neutralValue : this.neutral.value,
                    date : 'Front',
                    summary: this.peopleData.summary,
                    })
                    .then(response => {
                        //store the response and adjust percentages
                            this.peopleData.userResults.push(response.data);
                    })
                    .catch(err => {
                        //show an error message if the response is not valid
                        alert("Error on data 😢");
                    })
            },
            deleteResult(index, user, date) {
        
                 //Getting Data from users
                    const URL = `https://ai-summary-api.herokuapp.com/api/results/delete/${user}/${date}`;// Enpoint of AI
                    axios.delete(URL)
                    .then(response => {
                        //store the response and adjust percentages
                            this.peopleData.userResults.splice(index,1);
                    })
                    .catch(err => {
                        //show an error message if the response is not valid
                        alert("Error on data 😢");
                    })
            },
             showSummary(text){
                alert(text)
            }
    
           
        }
    }
</script>


<style >
 
img{
      border-radius: 20%;
      margin: 20px;
   }
  .summary{
      padding-right: 30px;
      text-align: justify;
      min-width: 300px;
  }
  .separator {
    padding: 20px;
  }
  .card-margin{
    margin-top: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .cardSize{
      min-width: 200px;
      width: autogrow; 
      margin-top: 10px;
  }

  
</style>
