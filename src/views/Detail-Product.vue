<template>
    <div class="detail-product">
        <Header />

        <div class="box-v1">
            <div class="container">
                <video poster="/images/w3schools_green.jpg" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="select-box">
                <div class="container">
                    <div class="flex">
                        <div class="col">
                            <h1>
                                Hello {{id}}
                            </h1>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "../components/Header.vue";
import JobService from '@/services/JobService.js';
export default {
    components: {
        Header,
    },
    props: ['id'],
    data() {
        return {
            job: {}
        }
    },
    created() {
        JobService.getEvent(this.id)
        .then(response => {
            this.event = response.id
        })
        .catch(error => {
            console.log("There was an error:", error.response);
        })
    },
}
</script>