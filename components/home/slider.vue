<template>
  <div   ref="container" class="keen-slider">
    <div class="keen-slider__slide number-slide1">
      <img src="./fanam/3.jpg"/>
    </div>
    <div class="keen-slider__slide number-slide2">
      <img src="./fanam/3.jpg"/>
    </div>
    <div class="keen-slider__slide number-slide3">
      <img src="./fanam/3.jpg"/>
    </div>

  </div>
</template>

<script setup>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

const [container] = useKeenSlider(
  {
    loop: true,
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]
);
</script>

<style>


</style>

