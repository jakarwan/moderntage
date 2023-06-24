<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar />
    <Service />
    <Carousel />
    <Pricing />
    <FormSection />
    <Footer />
  </div>
</template>

<script>
import Service from "./components/Service.vue";
import Carousel from "./components/Carousel.vue";
import Navbar from "./components/Navbar.vue";
import Pricing from "./components/Pricing.vue";
import FormSection from "./components/FormSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Service,
    Carousel,
    Navbar,
    Pricing,
    FormSection,
    Footer,
  },
  metaInfo() {
    return {
      title: "Moderntage รับออกแบบ สร้างบ้าน",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
