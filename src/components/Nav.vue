<template>
  <nav class="ba-nav">
    <ul class="menu show-for-medium">
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

    <button class="menu-icon hide-for-medium"></button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.ba-nav {
  .menu-icon {
    width: 33px;
    height: 22px;

    &:after {
      height: 3px;
    }
  }
  a {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    position: relative;

    &:hover,
    &:focus {
      color: $primary-color;
    }

    &.router-link-exact-active {
      &:after {
        content: "";
        position: absolute;
        height: 3px;
        left: 0;
        top: 100%;
        right: -15px;
        background: $primary-color;
        margin-top: 7px;
      }
    }
  }

  li + li {
    margin-left: 54px;
  }
}
</style>
