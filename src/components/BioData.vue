<template>
    <div>
     <md-card class="card md-elevation-24">
        <div class="md-layout md-gutter">
                 <div class="md-title md-layout-item">
                    <img src="https://starrgate.s3.amazonaws.com/CACHE/images/users/8721db66f9b1fa11e02d2ad54a3f92ebf64d9fa1/profile_Dc20xif/d5df330d3da509377d71422f688d2c69.jpg" alt="Photo">
                     <div class="md-title">
                     {{peopleData.name}}
                    </div>
                     <span class="md-subhead">  <i>{{peopleData.headline}}</i></span>  
                </div>

               <div class="summary md-layout-item">
                 <md-card-header>
                      <div class="md-title">
                {{peopleData.name}}
                </div>
                     <p class="md-subhead">  <i>{{peopleData.summary}}</i></p>  
                 </md-card-header>
                </div>
     </div>

   </md-card>
    </div>
</template>
<script>


export default {
    name: 'BioData',
    props: ['peopleData']
    
    
    
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
</style>
>