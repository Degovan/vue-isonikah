<template>
    <div class="detail-product">
        <Header />

        <div class="box-v1">
            <div class="container">
                <video height="240" poster="/images/w3schools_green.jpg" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "../components/Header.vue";
export default {
    components: {
        Header
    }
}
</script>