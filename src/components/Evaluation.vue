<template>
    <div>
        <md-card class="card md-elevation-24 space">
        <div>
                     <div class="md-title">
                     {{results.value}}%
                    </div>
                      <div class=" emoji-size">
                     {{results.emoji}}
                    </div>
                      <div class="md-subhead">
                     {{results.type}}
                    </div>
                    <div class="md-title">
                     
                    </div>
     </div>

   </md-card>
    </div>
</template>
<script>
export default {
    name: 'EvaluationCard',
    props: ['results']
    
    
}
</script>
<style >
.space{
    margin-top: 10px;
    padding: 10px 0 10px 0;
    height: 200px;
}
.emoji-size{
    margin: 50px;
    font-size: 86px;
}

</style>