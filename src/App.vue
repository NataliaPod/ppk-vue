<template>
  <div class="off-canvas-wrapper">
    <div
      v-bind:class="{ 'is-open': isMenuOpen }"
      class="off-canvas position-left"
      id="offCanvas"
      data-off-canvas
    >
      <!-- Your menu or Off-canvas content goes here -->
      <MobNav />
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <!-- Your page content lives here -->
      <v-header />

      <router-view />

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MobNav from "@/components/MobNav.vue";

import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: {
    "v-header": Header,
    Footer,
    MobNav,
  },
  created() {
    eventBus.$on("toggleMenu", () => (this.isMenuOpen = !this.isMenuOpen));
  },
  metaInfo: {
    title: "Полтавський політехнічний коледж",
    titleTemplate: " %s | Полтавський політехнічний коледж",
    meta: [
      {
        name: "description",
        content:
          "Більше 20 тисяч висококваліфікованих фахівців для різних галузей господарства України",
      },
    ],
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main";
</style>
