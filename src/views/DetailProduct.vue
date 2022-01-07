<template>
  <div class="detail-product">
    <Header />

    <div class="box-v1">
      <div class="container">
        <div class="wrapper-video">
         <div class="plyr__video-embed" id="player">
  <iframe
    src="https://player.vimeo.com/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Plyr from "plyr";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  mounted() {
    const player = new Plyr("#player");
  },
};
</script>
