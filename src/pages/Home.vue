<template>
  <main v-if="sections">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <Intro v-bind:section="sections.intro" />
    <About v-bind:section="sections.about" />
    <Specs :type="'dark'" v-bind:section="sections.specs" />
    <Gallery v-bind:section="sections.gallery" />
  </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import About from "@/components/home/About.vue";
import Specs from "@/components/home/Specs.vue";
import Gallery from "@/components/home/Gallery.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Home page",
      sections: null
    };
  },
  components: {
    Intro,
    About,
    Specs,
    Gallery
  },

  created() {
    fetch("data/home-page.json")
      .then(result => result.json())
      .then(data => {
        console.log(data);

        this.sections = data;
      });
  }
};
</script>
