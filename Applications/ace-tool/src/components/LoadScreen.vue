<template>
<div class="overlay">
 <div class="wrapper">
      <div class="rectangle-wrapper">
        <div class="rectangle-banner">
                <p>bla</p>
            </div>
      </div>
  </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../style/_variables";

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



