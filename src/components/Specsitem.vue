<template>
  <article class="ba-specs" :class="type">
    <img class="ba-specs__img" :src="item.img" :alt="item.title" />
    <div class="ba-specs__body">
      <h3 class="ba-specs__title">{{item.title}}</h3>
      <!-- /.ba-specs__title -->
      <p>{{item.content}}</p>
      <div class="ba-specs__footer">
        <button class="ba-button" :class="`ba-button--on-${type}`">Подати заявку</button>
        <!-- /.ba-button -->
        <span class="ba-specs__duration">{{item.duration}}</span>
        <!-- /.ba-specs__duration -->
        <span class="ba-specs__price">
          <b>{{item.price}}</b> грн/рік
        </span>
        <!-- /.ba-specs__price -->
      </div>
      <!-- /.ba-specs__footer -->
    </div>
    <!-- /.ba-specs__body -->
  </article>
  <!-- /.ba-specs -->
</template>

<script>
export default {
  props: ["item", "type"]
};
</script>

<style lang="scss">
.ba-specs {
  @include breakpoint(medium) {
    display: flex;
  }

  &.dark {
    background: $black;
    color: #d7d7d7;
  }

  & + & {
    margin-top: 22px;

    @include breakpoint(medium) {
      margin-top: 60px;
    }
  }

  &__img {
    width: 100%;

    @include breakpoint(medium) {
      width: 33.333%;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
    color: $black;
    margin-bottom: 5px;

    @include breakpoint(medium) {
      font-size: 28px;
    }

    @include breakpoint(large) {
      margin-bottom: 49px;
    }

    .dark & {
      color: #fff;
    }
  }

  &__body {
    // background: #fff;
    // color: #646464;
    padding: 28px 16px;

    @include breakpoint(medium) {
      padding: 38px 76px 38px 53px;
      display: flex;
      flex-direction: column;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(medium) {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: auto;
    }

    @include breakpoint(large) {
      flex-wrap: nowrap;
    }
  }

  &__duration {
    font-size: 12px;
    padding: 15px 0 0;
    margin-bottom: 12px;

    @include breakpoint(medium) {
      padding: 0 40px 0 21px;
      margin: 0;
    }
  }

  &__price {
    color: $black;
    font-size: 12px;
    white-space: nowrap;

    .dark & {
      color: $white;
    }

    b {
      color: $primary-color;
      font-size: 24px;

      @include breakpoint(medium) {
        font-size: 26px;
      }
    }
  }

  @include breakpoint(medium only) {
    &__duration {
      order: -1;
      padding: 15px 20px 15px 0;
      margin-bottom: 15px;
    }

    &__price {
      order: -1;
    }
  }
}
</style>