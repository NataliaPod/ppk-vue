<template>
  <section class="ba-section ba-section--about">
    <div class="row column ba-container">
      <h2 class="ba-section__title ba-section__title--about">{{ section.title }}</h2>
      <div class="row">
        <div class="column small-12 medium-8 medium-offset-2 large-6 large-offset-3">
          <div class="ba-about-desc">
            <p>{{ section.content }}</p>

            <div class="ba-about-desc__img">
              <img :src="section.img" :alt="section.title" />
            </div>
            <!-- /.ba-about-desc__img -->
          </div>
          <!-- /.ba-about-desc -->
        </div>
        <!-- /.column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- //.row .column -->
  </section>
</template>

<script>
export default {
  props: ["section"]
};
</script>

<style lang="scss">
.ba-about-desc {
  &__img {
    @include breakpoint(small down) {
      margin-left: -33px;
      margin-right: -33px;
    }
  }

  @include breakpoint(medium) {
    padding-top: 90px;
    position: relative;

    &::after {
      content: "";
      top: 0;
      left: 100%;
      margin-left: -20px;
      width: 115px;
      height: 237px;
      position: absolute;
      border: 7px solid $primary-color;
      border-width: 7px 7px 0 0;
    }

    &__img {
      position: relative;
      padding-top: 66px;

      &::after {
        content: "";
        width: 96px;
        height: 191px;
        position: absolute;
        background: $primary-color;
        right: 100%;
        bottom: 13%;
      }
    }
  }
}
</style>
