<template>
    <div>
        <md-card class="card  md-elevation-24">
         <md-card-header>
             
             <div class="md-title">
                 AI Evaluation
             </div>

            
                <div>
                    <md-field>
                        <label>Type your user here!</label>
                        <md-input class="md-elevation-1 font-color" v-model="user"></md-input>
                    </md-field>
                </div>
        
    
            <span class="md-subhead separator">  <i>You can see your username next to ' / '  on your torre profile link</i></span>  
            <br> <br>
             <md-button @click="searchUser()" class="md-raised font-color button-color">Search</md-button>
            <md-button @click="clearData()" class="md-raised font-color button-color">Clear</md-button> 
         </md-card-header>
           

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