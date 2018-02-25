<template>
    <div class="base">
        <div class="overlay">
            <div class="wrapper">
                <div class="rectangle-wrapper">
                    <div class="rectangle-banner">
                    
                    </div>
                </div>
            </div>
        </div>
         <div class="overlay2">
          
        </div>
        <div>
            <div class="loading-text">
                <h1>Loading MILPACS...</h1>
            </div>
            <radar-spinner class="spinner" :animation-duration="2000" :size="90" color="#F3C300" />
        </div>
       
    </div> 
</template>

<script>
import { Circle8 } from 'vue-loading-spinner'
import { RadarSpinner } from 'epic-spinners'

export default {
  components: {
    Circle8,
    RadarSpinner
  }
}
</script>

<style lang="scss">
@import "../style/_variables";


.base{
  width:100%;
  height:100%;
  background-color:black;
}

.loading-text {
  position: absolute;
  left: 50%;
  top: 50%;
  color: white;
  z-index: 5;
  transform: translate(-50%, -50%);
  text-align: center;
}

.spinner {
  position: absolute !important;
  bottom: 25% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 10 !important;
}

.overlay {
  opacity: 0.3;
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: $pcolor;

    .rectangle-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      .rectangle-banner {
        position: absolute;
        right: 0;
        left: 0;
        height: 100%;
        background-color: black;
        transform: skewY(45deg);
      }
    }
  }
}
</style>



