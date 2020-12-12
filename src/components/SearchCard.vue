<template>
    <div>
        <md-card class="card">
         <md-card-header>
             <div class="md-title">
                 Summary of Bio Evaluation
             </div>

            <md-content>
                <div class="md-title">
                    <md-field>
                        <label>Type your user here!</label>
                        <md-input class="md-elevation-1 font-color" v-model="user"></md-input>
                    </md-field>
                </div>
            </md-content>
    
            <span class="md-subhead">  <i>See your username next to ' / '  on your torre profile link</i></span>   
         </md-card-header>
            <md-button @click="searchUser()" class="md-raised font-color button-color">Search</md-button>
            <md-button @click="clearData()" class="md-raised font-color button-color">Clear</md-button>

            <BioData v-show="visible"></BioData>
   </md-card>

    </div>
</template>
<script>
import BioData from './BioData'

export default {
    name: 'SearchCard',
    components: {
        BioData
    },
    data(){
        return {
            user:'',
            visible: false
        }
    },
    methods: {
        searchUser(){
            this.visible = true
        },
        clearData(){
            this.visible = false
        }
    }
    
}
</script>
<style >

</style>