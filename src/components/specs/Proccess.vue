<template>
  <section class="ba-section padding-bottom-0">
    <div class="row column ba-container">
      <h2 class="ba-section__title">{{ section.title }}</h2>
    </div>
    <!-- //.row .column -->
    <a :href="section.video_url" class="ba-video-popup glightbox">
      <svg
        class="ba-video-popup__icon"
        width="121"
        height="121"
        viewBox="0 0 121 121"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60.5" cy="60.5" r="60.5" />
        <path d="M52.6667 44.6667V77.3334L78.3334 61.0001L52.6667 44.6667Z" fill="currentColor" />
      </svg>

      <img src="/img/specs/proccess.jpg" alt="proccess" />
    </a>
  </section>
</template>

<script>
import GLightbox from "glightbox";

export default {
  props: {
    section: { type: Object, default: null }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    const lightbox = GLightbox();
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css");

.ba-video-popup {
  display: block;
  position: relative;
  color: $black;
  fill: white;

  img {
    display: block;
    width: 100%;
  }

  &:hover {
    color: white;
    fill: $primary-color;
  }

  &__icon {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 1;

    @include breakpoint(small down) {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
