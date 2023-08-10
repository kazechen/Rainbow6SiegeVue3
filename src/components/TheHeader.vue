<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
</script>
<template>
  <header class="site-header sticky-top">
    <div class="px-md-3 py-2 bg-dark text-white">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a class="navbar-brand" href="/">
            <img
              class="logo"
              src="../assets/images/r6-logo.png"
              title="虹彩六號：圍攻行動-中文資訊"
            />
            <sup class="sub-text">中文資訊</sup>
          </a>

          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <li
              :class="{
                active: route.currentRoute.value.name === 'Home',
              }"
            >
              <router-link to="/" class="nav-link text-white">
                幹員列表
              </router-link>
            </li>
            <li
              :class="{
                active: route.currentRoute.value.name === 'Novice',
              }"
            >
              <router-link
                to="/novice"
                class="nav-link text-white"
                :class="{
                  'text-secondary': route.currentRoute.value.name === 'Novice',
                }"
              >
                新手須知
              </router-link>
            </li>
            <li
              :class="{
                active: route.currentRoute.value.name === 'Intro',
              }"
            >
              <router-link to="/intro" class="nav-link text-white">
                遊戲介紹
              </router-link>
            </li>
            <li
              :class="{
                active: route.currentRoute.value.name === 'External',
              }"
            >
              <router-link to="/external" class="nav-link text-white">
                相關連結
              </router-link>
            </li>
            <li
              :class="{
                active: route.currentRoute.value.name === 'About',
              }"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.nav {
  .active a {
    color: #ffd54f !important;
  }
  li:not(.active) a:hover {
    color: #999 !important;
  }
}
.sub-text {
  top: 6px;
}

@media (max-width: 768px) {
  .nav {
    .nav-link {
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>
