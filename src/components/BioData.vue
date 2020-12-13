<template>
    <div>
     <md-card class="card md-elevation-24">
        <div class="md-layout md-gutter">
                 <div class="md-title md-layout-item card-margin">
                    <img src="https://starrgate.s3.amazonaws.com/CACHE/images/users/8721db66f9b1fa11e02d2ad54a3f92ebf64d9fa1/profile_Dc20xif/d5df330d3da509377d71422f688d2c69.jpg" alt="Photo">
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
                     <md-button @click="evaluate()" class="md-raised font-color button-color">Evaluate</md-button>
                 </md-card-header>
                </div>
     </div>

   </md-card>
    <div class="md-layout md-gutter" v-show="visible">
     <EvaluationCard :results="positive" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="negative" class="md-layout-item"></EvaluationCard>
    <EvaluationCard :results="neutral" class="md-layout-item"></EvaluationCard>
    </div>
    
    <md-card class="card card-margin">
         <span class="md-subhead">  <i>Remember, this is only an idea to help you, isn't a requirement for you.</i></span>  
    </md-card>
    

    </div>
</template>
<script>
import EvaluationCard from "./Evaluation"

export default {
    name: 'BioData',data() {
        return {
            visible: false,
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
    props: ['peopleData'],
    components: {
        EvaluationCard
    },
    methods: {
        evaluate(){
            this.visible = true
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
>