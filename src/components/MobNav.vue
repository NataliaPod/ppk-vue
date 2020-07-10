<template>
  <nav class="ba-nav-mob">
    <button class="ba-nav-mob__close" @click="toggleMenu">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9997 0.333008L12.4147 2.91801L22.6447 13.1663H0.333008V16.833H22.6447L12.4147 27.0813L14.9997 29.6663L29.6663 14.9997L14.9997 0.333008Z"
          fill="#D7D7D7"
        />
      </svg>
    </button>
    <p class="ba-nav-mob__title">{{title}}</p>
    <ul class="menu vertical">
      <li>
        <router-link to="/">Головна</router-link>
      </li>
      <li>
        <router-link to="/vykladachi">Викладачі</router-link>
      </li>
      <li>
        <router-link to="/spetcіalіzatsii">Спеціалізаціі</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      title: "Меню"
    };
  },
  methods: {
    toggleMenu() {
      eventBus.$emit("toggleMenu");
    }
  }
};
</script>

<style lang="scss">
.ba-nav-mob {
  padding: 124px 43px 43px;

  &__close {
    position: absolute;
    top: 43px;
    right: 16px;
    cursor: pointer;
    outline: none;
  }

  &__title {
    color: #d7d7d7;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .menu-icon {
    width: 33px;
    height: 22px;

    &:after {
      height: 3px;
    }
  }
  a {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    position: relative;

    &:hover,
    &:focus {
      color: $primary-color;
    }

    &.router-link-exact-active {
      color: $primary-color;
    }
  }

  li + li {
    margin-top: 43px;
  }
}
</style>
