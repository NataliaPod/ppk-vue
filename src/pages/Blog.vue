<template>
  <main v-if="sections">
    <Intro :type="'center'" v-bind:section="sections.intro" />
    <Posts v-bind:section="sections.posts" />
  </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";
import Posts from "@/components/home/Posts.vue";

export default {
  data() {
    return {
      sections: {
        intro: {
          title: "Блог і новини",
          img: "./img/home-page/intro.jpg"
        },
        posts: {
          title: "Блог викладачів"
        }
      }
    };
  },
  components: {
    Intro,
    Posts
  },

  created() {
    // fetch("data/specs-page.json")
    //   .then(result => result.json())
    //   .then(data => {
    //     console.log(data);
    //     this.sections = data;
    //   });
  }
};
</script>
