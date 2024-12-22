<template>
  <div
    class="core-webgl"
    data-us-project-src="/encoder.json"
    data-us-scale="1"
    data-us-dpi="1.5"
    data-us-lazyload="true"
    data-us-disableMobile="true"
    data-us-alttext="Gradient background based on WebGL"
    data-us-arialabel="Rendering on Canvas"
  ></div>
</template>

<script>
import * as UnicornStudio from "@/assets/webgl.js";
export default {
  name: "HeroWebGL",
  mounted() {
    window.UnicornStudio.init()
      .then((scenes) => {
        console.log("Scenes are ready", scenes);
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.core-webgl {
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
