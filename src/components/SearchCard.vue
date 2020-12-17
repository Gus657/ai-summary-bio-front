<template>
    <div>
        <!-- Main contaner for home view -->
        <md-card class="card md-elevation-24">
         <md-card-header>
                <div class="md-title"> Summary AI Evaluation </div>
                    <div>
                        <!-- Input to get the username -->
                        <md-field>
                            <label>Type your user name here!</label>
                            <md-input 
                                class="md-elevation-1 font-color" 
                                v-model="user"
                            ></md-input>
                        </md-field>
                    </div>
            
                    <!-- Leyend and buttons -->
                <span class="md-subhead separator">  
                    <i>You can see your user name next to ' / '  on your torre profile link</i>
                </span>  
                <br> 
                <br>
                <md-button 
                    @click="searchUser()" 
                    class="md-raised font-color button-color"
                > Search </md-button>
                <md-button 
                    @click="clearData()" 
                    class="md-raised font-color button-color"
                > Clear </md-button> 
         </md-card-header>
           
            <!-- Child Component to show the information about the selected user -->
            <BioData v-show="visible"
                class="card-margin"
                :peopleData="people"
                :state=1
                :user="user"
            ></BioData>
    </md-card>

    </div>
</template>



<script>
import BioData from './BioData'
const  axios = require('axios'); // Library used to meka the api requests


    export default {
        name: 'SearchCard',
        components: {
            BioData //Child component for display user information
        },
        data(){
            return {
                user:'', //User name typed
                visible: false, // Application state, show the bio information and results
                people: { //Object to store the person information
                    name:'',
                    picture: '',
                    headline: '',
                    summary: '',
                   userResults: []
                }
            }
        },
        methods: {
            searchUser(){
                if (this.user!=''){ //Validates user field is not empty
                const URL = `https://ai-summary-api.herokuapp.com/api/bio-data/${this.user}`; // Integration with backend
                axios.get(URL, {
                user:this.user //object sended
                })
                .then(response => {
                    //Storage the response
                    this.people.name = response.data.name;
                    this.people.picture = response.data.picture;
                    this.people.headline = response.data.headline;
                    this.people.summary = response.data.bio;
                     this.visible = true // changin app state
                })
                .catch(err => { // Showing error
                    alert("Unknow user name 😢")
                })
                }else{ // Showing validation
                    alert("Please type your user name")
                }
                    
            },
            clearData(){
                //unstorage data from user 
                this.visible = false
                this.user = '';
                this.people.name =  '';
                this.people.picture =  '';
                this.people.headline =  '';
                this.people.summary = '';
                this.people.userResults = [];
               
            }
        }
        
    }
</script>



<style >
    .separator {
        padding: 20px;
    }
    .top-left {
        display: flex;
        align-items: left;
        margin-bottom: 10px;
        padding: 5px 0 5px 0 ;
    }

</style>