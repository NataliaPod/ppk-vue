<template>
  <main v-if="sections">
    <Intro :type="'center'" v-bind:section="sections.intro" />
    <Specs v-bind:section="sections.specs" />
    <Proccess v-bind:section="sections.proccess" />
  </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import Specs from "@/components/home/Specs.vue";
import Proccess from "@/components/specs/Proccess.vue";

export default {
  data() {
    return {
      sections: null
    };
  },
  components: {
    Intro,
    Specs,
    Proccess
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
