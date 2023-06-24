<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      class="nav-bg fixed-top"
    >
      <a class="navbar-brand font-logo" href="#">
        <img
          src="../assets/img/download.png"
          alt=""
          width="70"
          height="24"
          class="d-inline-block align-text-center img-fluid"
        />
        <span style="margin-left: 40px"> MODERNTAGE</span>
      </a>

      <b-navbar-toggle target="nav-collapse" class="me-3"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="nav nav-pills d-flex justify-content-center ms-auto">
          <li
            :class="{
              'nav-item': navActive != 'Service',
              'nav-item active': navActive === 'Service',
            }"
          >
            <a
              class="nav-link"
              href="#scrollspySection1"
              @click="activeFunc('Service')"
              >Service</a
            >
          </li>
          <li
            :class="{
              'nav-item': navActive != 'Carousel',
              'nav-item active': navActive === 'Carousel',
            }"
          >
            <a
              class="nav-link"
              href="#scrollspySection2"
              @click="activeFunc('Carousel')"
              >Carousel</a
            >
          </li>
          <li
            :class="{
              'nav-item': navActive != 'Pricing',
              'nav-item active': navActive === 'Pricing',
            }"
          >
            <a
              class="nav-link"
              href="#scrollspySection3"
              @click="activeFunc('Pricing')"
              >Pricing</a
            >
          </li>
          <li
            :class="{
              'nav-item': navActive != 'From',
              'nav-item active': navActive === 'From',
            }"
          >
            <a
              class="nav-link"
              href="#scrollspySection4"
              @click="activeFunc('From')"
              >From</a
            >
          </li>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      navActive: "active",
    };
  },
  methods: {
    activeFunc(active) {
      this.navActive = active;
    },
  },
};
</script>
<style lang=""></style>
