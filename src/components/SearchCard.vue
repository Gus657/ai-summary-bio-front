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
                    <i>You can see your user name ({{user}}) next to ' / '  on your torre profile link</i>
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
                :state="visible"
            ></BioData>
    </md-card>

    </div>
</template>



<script>
import BioData from './BioData'
const  axios = require('axios');


    export default {
        name: 'SearchCard',
        components: {
            BioData
        },
        data(){
            return {
                user:'',
                visible: false,
                people: {
                    name:'Gus',
                    picture: '',
                    headline: 'Web Developer',
                    summary: 'Soy una persona apasionada por aprender, desde 2016 me dedico al diseño gráfico y digital y desde 2017 al desarrollo de software, gracias a esto pude encontrar una gran cantidad de oportunidades para seguir aprendiendo, nuevas oportunidades para mejorar y ampliar mis conocimientos, me he dado cuenta que al colaborar con otros fortalezco mis conocimientos y habilidades, además de hacer nuevas amistades.'
                }
            }
        },
        methods: {
            wakeUp(){
                this.user = this.user;
            },
            searchUser(){
                if (this.user!=''){
                const URL = 'https://ai-summary-api.herokuapp.com/api/bio-data';
                axios.post(URL, {
                user:this.user
                })
                .then(response => {
                    console.log(response.data);
                    this.people.name = response.data.name;
                    this.people.picture = response.data.picture;
                    this.people.headline = response.data.headline;
                    this.people.summary = response.data.bio;
                     this.visible = true
                })
                .catch(err => {
                    alert("Error getting Data 😯")
                })
                }else{
                    alert("Please type your user name")
                }
                    
            },
            clearData(){
                this.visible = false
                this.user = '';
                this.people.name =  '';
                this.people.picture =  '';
                this.people.headline =  '';
                this.people.summary = '';
               
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