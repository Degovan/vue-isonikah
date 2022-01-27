<template>
  <div id="app">
    <div v-if="!$route.meta.hideNavigation">
      <Header />
    </div>
    <router-view/>
    <div v-if="!$route.meta.hideNavigation">
      <Footer />
    </div>
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
