<template>
    <router-link :to="{name: 'Detail-Produk', params: {id: job.id}}">
        <div class="card">
        <img src="../assets/img/makanan4.jpg" alt="" />

        <div class="content-card">
        <h1>{{job.title}}</h1>
        <h2>Rp 1.500.000</h2>
        <p>Makanan</p>
        </div>
        <div class="footer-card">
        <a href="#"
            ><fa :icon="['fas', 'map-marker-alt']" /><span
            >Tenggarang</span
            ></a
        >
        <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
        <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
        </div>
    </div>
    
    </router-link>
</template>

<script>
export default {
    props: {
        job: Object
    }
}
</script>