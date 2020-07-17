<template>
  <main v-if="sections">
    <Intro :type="'center'" v-bind:section="sections.intro" />
  </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
  data() {
    return {
      sections: null
    };
  },
  components: {
    Intro
  },

  created() {
    fetch("data/specs-page.json")
      .then(result => result.json())
      .then(data => {
        console.log(data);

        this.sections = data;
      });
  }
};
</script>
