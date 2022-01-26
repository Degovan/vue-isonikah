<template>
  <div id="app">
    <navigation v-if="!$route.meta.hideNavigation">
      <Header />
    </navigation>
    <router-view/>
    <navigation v-if="!$route.meta.hideNavigation">
      <Footer />
    </navigation>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
