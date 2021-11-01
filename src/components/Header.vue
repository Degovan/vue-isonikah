<template>
    <div id="header">
        <header class="header">
            <div class="container">
                <div class="flex-header">
                    <div class="col-head">
                        <div class="title-brand-icons">
                           <img src="../assets/img/logo-isonikah.png" />
                        </div>
                    </div>
                    <div class="col-head">
                        <form action="">
                        <div class="input-search">
                            <input type="search" placeholder="Cari vendor" />
                            <button><fa :icon="['fas', 'search']" /></button>
                        </div>
                        </form>
                    </div>
                    <div class="col-head">
                        <div class="auth-link"><a href="#"><b>Masuk</b></a>|<a href="">Mendaftar</a></div>
                    </div>
                     <div class="col-head">
                         <div class="bar">
                       <a href="#"><fa :icon="['fas', 'bars']" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="small-header">
            <div class="container">
                <ul>
                    <li><a href="">Vendor</a></li>
                    <li><a href="">Undangan Online</a></li>
                    <li><a href="">Paket Spesial</a></li>
                    <li><a href="">Promosi & Acara</a></li>
                    <li><a href="">Galeri</a></li>
                    <li><a href="">Tentang</a></li>   
                </ul>
            </div>
        </div>
    </div>
</template>
