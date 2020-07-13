<template>
  <footer class="ba-footer">
    <div class="row">
      <div class="column small-6">
        <h5>{{col1.title}}</h5>
        <ul class="menu vertical">
          <li v-for="(link, i) in routes" :key="i">
            <router-link :to="link.path">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- /.column -->
    </div>
    <!-- /.row -->
  </footer>
</template>

<script>
import { routes } from "@/router/index.js";

export default {
  name: "Footer",
  data() {
    return {
      routes: routes,
      desc:
        "Ми вам дуже раді! \nЧекаємо у нашому навчальному закладі \nППК НТУ ХПІ!",
      col1: {
        title: "Коледж",
        menu: null
      },
      col2: {
        title: "Корисне",
        menu: null
      }
    };
  }
};
</script>

<style></style>
