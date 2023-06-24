<template>
  <div class="bg-carousel" id="scrollspySection2">
    <div class="blur">
      <h1 class="house-design-header">Home Design</h1>
      <div class="hd-box">
        <swiper
          class="swiper"
          :options="swiperOptions"
          :style="{
            '--swiper-navigation-color': '#b32d18',
            '--swiper-pagination-color': '#b32d18',
          }"
        >
          <swiper-slide v-for="(img, index) in HomeImg" :key="index">
            <img class="img-fluid" width="1200" height="590" :src="img" alt=""
          /></swiper-slide>
        </swiper>
      </div>

      <!-- <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../assets/img/1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/img/2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/img/3.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "carouSel",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      HomeImg: {
        img1: require("@/assets/img/1.jpg"),
        img2: require("@/assets/img/2.jpg"),
        img3: require("@/assets/img/3.png"),
      },
      //   swiperOptions: {
      //     autoplay: {
      //       delay: 3000,
      //       disableOnInteraction: false,
      //     },
      //     slidesPerView: 1,
      //     spaceBetween: 1,
      //     loop: true,
      //     loopFillGroupWithBlank: true,
      //     breakpoints: {
      //       1024: {
      //         slidesPerView: 1,
      //         spaceBetween: 10,
      //       },
      //       768: {
      //         slidesPerView: 1,
      //         spaceBetween: 10,
      //       },
      //       640: {
      //         slidesPerView: 1,
      //         spaceBetween: 10,
      //       },
      //       320: {
      //         slidesPerView: 1,
      //         spaceBetween: 10,
      //       },
      //     },
      //   },
      swiperOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // slidesPerView: 3,
        spaceBetween: 30,
        // loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          665: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  directives: {
    swiper: directive,
  },
};
</script>
<style lang=""></style>
