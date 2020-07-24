<template>
  <main v-if="sections">
    <Intro :type="'center'" v-bind:section="sections.intro" />
    <section class="ba-section" v-if="post">
      <div class="row column" v-html="post.content.rendered"></div>
    </section>
    <!-- /.ba-section -->
  </main>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/home/Intro.vue";

export default {
  props: ["slug"],
  data() {
    return {
      sections: {
        intro: {
          title: "Сторінка Стаття",
          img: "./img/home-page/intro.jpg",
        },
      },
      post: null,
    };
  },
  components: {
    Intro,
  },
  methods: {
    getPost() {
      const postsUrl = `https://www.zavtra.in.ua/wp-json/wp/v2/posts?slug=${this.slug}&_embed`;

      fetch(postsUrl)
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          this.post = data[0];
          this.sections.intro.title = this.post.title.rendered;
          if (this.post._embedded["wp:featuredmedia"]) {
            this.sections.intro.img = this.post._embedded[
              "wp:featuredmedia"
            ][0].media_details.sizes["post-thumbnail"].source_url;
          }
        });
    },
  },
  created() {
    this.getPost();
  },
  metaInfo: {
    title: "Стаття",
    meta: [
      {
        name: "description",
        content: "Вітаємо переможців Всеукраїнського чемпіонату",
      },
    ],
  },
};
</script>
