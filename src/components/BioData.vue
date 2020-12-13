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
                     <md-button @click="evaluate()" class="md-raised font-color button-color" v-show="state">English</md-button>
                     <md-button @click="evaluate()" class="md-raised font-color button-color" v-show="state">Spanish</md-button>
                 </md-card-header>
                </div>
     </div>

   </md-card>

   <!-- Showin de results of evaluation in child components -->
    <div class="md-layout md-gutter" v-show="!state">
    <EvaluationCard :results="positive" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="negative" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="neutral" class="md-layout-item"></EvaluationCard>
    </div>
    
    <!-- Information leyend -->
    <md-card class="card card-margin">
         <span class="md-subhead">  <i>Remember, this is only an idea to help you, isn't a requirement for you.</i></span>  
    </md-card>
    
    </div>
</template>



<script>
import EvaluationCard from "./Evaluation"

    export default {
        name: 'BioData',
        props: ['peopleData', 'state'],
        components: {
            EvaluationCard
        },
        data() {
            return {
                visible: false,
                buttonVisible: true,
                positive: {
                    value: 50,
                    type: 'Positive',
                    emoji: '😁'
                },
                negative: {
                    value: 30,
                    type: 'Negative',
                    emoji: '🤨'
                },
                neutral: {
                    value: 50,
                    type: 'Neutral',
                    emoji: '🤐'
                }
            }
        },
        methods: {
            evaluate(){
                this.visible = true
                this.state = false
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
  
</style>
