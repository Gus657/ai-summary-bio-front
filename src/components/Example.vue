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
                            <md-textarea class="md-elevation-1 font-color" md-autogrow></md-textarea>
                        </md-field>
                    </div>
            <!-- Help leyend -->
                <span class="md-subhead separator">  
                    <i>Try any text, and see the results of your writing.</i>
                </span>  
                <br> 
                <br>
            <!-- Main container for the evaluation results card component -->
                <md-button @click="evaluate()" class="md-raised font-color button-color" v-show="!state">English</md-button>
                <md-button @click="evaluate()" class="md-raised font-color button-color" v-show="!state">Spanish</md-button>
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

export default {
    name: 'Example',
    components: {
     EvaluationCard
    },
    data(){
        return {
            user:'',
            visible: false,
            state: true,
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
            this.state = true
        },
        clearData(){
            this.state = false
        }
    }
    
}
</script>


<style >


</style>