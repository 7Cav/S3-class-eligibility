<template>
    <div>
        <div class="overlay">
            <div class="wrapper">
                <div class="rectangle-wrapper">
                    <div class="rectangle-banner">
                    
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="loading-text">
                <h1>Loading MILPACS...</h1>
            </div>
            <Circle8 class="spinner"></Circle8>
        </div>
    </div> 
</template>

<script>
import {Circle8} from 'vue-loading-spinner'
export default {
    components: {
    Circle8
  },
  name: "testje"
}
</script>

<style lang="scss">
@import "../style/_variables";

.loading-text{
    position: absolute;
    left:50%;
    top:50%;
    color:white;
    z-index: 5;
    transform: translate(-50%, -50%);
    text-align: center;
}

.spinner{ 
    position: absolute;
    bottom:33%;
    left:50%;
    transform: translateX(-50%);
    z-index:10;
        .spinner-inner{
            transform:scale(2) !important;
            margin-top:5em !important;
        }
    }

.overlay{
    opacity: 49%;
    background-color:black;
    width:100%;
    height:100%;
    .wrapper{
        width:100%;
        height:100%;
        background-color: $pcolor;

        .rectangle-wrapper{
            width: 100%;
            height:100%;
            position: relative;
            overflow: hidden;
            .rectangle-banner {
                position: absolute;
                right:0;
                left:0;
                height:100%;
                background-color: black;
                transform: skewY(45deg);

                
            }
        }
    }
}


</style>



