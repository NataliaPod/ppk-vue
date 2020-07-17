<template>
  <footer class="ba-footer">
    <div class="row">
      <div class="column small-6 medium-4 large-order-1 large-offset-3 large-2">
        <h4>{{col1.title}}</h4>
        <ul class="menu vertical ba-footer-menu">
          <li v-for="(link, i) in routes" :key="i">
            <router-link :to="link.path">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- /.column -->
      <div class="column small-6 medium-4 large-order-1 large-2">
        <h4>{{col2.title}}</h4>
        <ul class="menu vertical ba-footer-menu">
          <li v-for="(link, i) in routes" :key="i">
            <router-link :to="link.path">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- /.column -->
      <div class="column small-6 medium-4 large-order-1 large-3 show-for-medium">
        <h4>{{col3.title}}</h4>
        <ul class="menu vertical ba-footer-menu" v-if="col3.menu.length">
          <li v-for="(link, i) in col3.menu" :key="i">
            <a :href="'tel:${link}'">{{link}}</a>
          </li>
        </ul>
      </div>
      <!-- /.column -->
      <div class="text-center column small-12 large-2 large-order-0">
        <router-link to="/" class="ba-footer-logo">
          <img src="@/assets/logo.png" alt="ППК" />
        </router-link>
        <p :inner-html.prop="desc | tobr" class="ba-footer__desc"></p>
      </div>
      <!-- /.column -->
    </div>
    <!-- /.row -->
    <p class="ba-copy text-right">{{copy}}</p>
  </footer>
</template>

<script>
import { routes } from "@/router/index.js";

export default {
  name: "Footer",
  filters: {
    tobr: function(value) {
      return value.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }
  },
  data() {
    return {
      routes: routes,
      desc:
        "Ми вам дуже раді! \nЧекаємо у нашому навчальному закладі \nППК НТУ ХПІ!",
      copy: "(c) Copyright 2020",
      col1: {
        title: "Коледж",
        menu: null
      },
      col2: {
        title: "Корисне",
        menu: null
      },
      col3: {
        title: "Зворотній зв'язок",
        menu: ["+38095195630", "+380505616065"]
      }
    };
  }
};
</script>

<style lang="scss">
.ba-footer {
  background: $black;
  color: $white;
  // padding-top: 58px;

  // @include breakpoint(medium) {
  //   padding-top: 50px;
  // }

  a {
    color: $white;

    &:hover,
    &:focus {
      color: $primary-color;
    }
  }

  &__desc {
    font-size: 12px;
    max-width: 131px;
    margin: 0 auto;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .menu {
    margin-bottom: 48px;
    font-size: 14px;

    @include breakpoint(medium) {
      font-size: 16px;
    }

    li + li {
      margin-top: 9px;
    }
  }

  &-logo {
    width: 67px;
    display: inline-block;
    margin-bottom: 14px;

    @include breakpoint(medium) {
      width: 90px;
    }
  }
}

.ba-copy {
  color: #d7d7d7;
  font-size: 10px;
  padding: 0 13px 13px;
  margin: 0;

  @include breakpoint(medium) {
    font-size: 12px;
    padding: 26px 40px;
  }
}
</style>
