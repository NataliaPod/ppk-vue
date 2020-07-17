<template>
  <section class="ba-section">
    <div class="row column ba-container">
      <h2 class="ba-section__title">{{ section.title }}</h2>
    </div>
    <!-- //.row .column -->
    <div class="ba-gallery">
      <img v-for="(url, i) in section.gallery" :key="i" :src="url" alt />
    </div>
    <!-- /.ba-gallery -->
  </section>
</template>

<script>
export default {
  props: ["section"]
};
</script>

<style lang="scss">
.ba-gallery {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 225px;

  @include breakpoint(small down) {
    :nth-child(1),
    :nth-child(4n) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @include breakpoint(medium) {
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 225px;

    :nth-child(5n) {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>
