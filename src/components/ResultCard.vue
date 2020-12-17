<template>
    <div>
        <!-- Main container for the evaluation results card component -->
        <md-card class="card md-elevation-24 space">
            <div>
                <!-- Result information display on card -->
                        <div class="md-title">
                            {{results.date}}  
                        </div>
                        <div class="md-subhead">
                            😁{{results.positiveValue}}% <br>
                            🤨{{results.negativeValue}}% <br>
                            🤐{{results.neutralValue}}% <br>
                        </div>
                        <div class="md-subhead line-clamp">
                            {{results.summary}}
                        </div>
                      
            </div>
        </md-card>
    </div>
</template>



<script>
export default {
    name: 'ResultCard',
    props: ['results']// Prop used to get the analyze results

        
}
</script>



<style >
  .line-clamp{
      text-align: justify;
      padding: 10px 10px 0 10px; ;
      display: -webkit-box;
    -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .icon-btn-margin{
      border: none;
      margin-right: 5px;
      margin-left: 5px;
      border-radius: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
  }
</style>