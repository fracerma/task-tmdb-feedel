<template>
    <div>
        <nav>
            <div class="nav-section">
                <router-link to="/">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
                </router-link>
            </div>
            <div class="nav-section middle">
                <router-link to="/popular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="-80 0 511 512" ><path d="m285.4 133c-3.5-5.8-10.4-8.5-16.9-6.7-6.5 1.8-11 7.7-11 14.4 0 18.3-14.9 33.2-33.2 33.2-18.3 0-33.2-14.9-33.2-33.2v-125.7c0-6.1-3.7-11.5-9.3-13.9-5.6-2.3-12.1-1-16.3 3.3-1.7 1.7-41.7 41.9-82.2 102.7-23.9 35.8-43 71.4-56.7 105.7-17.4 43.4-26.2 85-26.2 123.6 0 96.9 78.8 175.7 175.7 175.7 96.9 0 175.7-78.8 175.7-175.7 0-62-22.4-130.4-66.4-203.4zm-109.2 349c-80.3 0-145.7-65.3-145.7-145.7 0-79.1 42.1-159 77.5-212.1 19.2-28.8 38.5-53.1 53.2-70.3v86.8c0 34.8 28.4 63.2 63.2 63.2 21.3 0 40.2-10.6 51.6-26.8 30.4 57.3 45.8 110.7 45.8 159.2 0 80.3-65.3 145.7-145.7 145.7zm0 0"/><path d="m261.3 253.2h-64.3c-8.3 0-15 6.7-15 15 0 8.3 6.7 15 15 15h28.1l-64.1 64.1-34.8-34.8c-5.9-5.9-15.4-5.9-21.2 0l-34.1 34.1c-5.9 5.9-5.9 15.4 0 21.2 5.9 5.9 15.4 5.9 21.2 0l23.5-23.5 34.8 34.8c2.8 2.8 6.6 4.4 10.6 4.4 4 0 7.8-1.6 10.6-4.4l74.7-74.7v28.1c0 8.3 6.7 15 15 15 8.3 0 15-6.7 15-15v-64.3c0-8.3-6.7-15-15-15zm0 0"/></svg>
                </router-link>
                <router-link to="/new">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 512 512"><path d="M497.1 301.7l-19.1-39.1c-2.1-4.2-2.1-9 0-13.3l19.1-39.1c10.6-21.8 2.2-47.7-19.2-59l-38.4-20.4c-4.1-2.2-7-6.1-7.8-10.7l-7.5-42.8c-4.2-23.8-26.2-39.9-50.2-36.5l-43.1 6.1c-4.6 0.7-9.2-0.8-12.6-4.1l-31.3-30.2c-17.4-16.8-44.7-16.8-62.1 0l-31.3 30.2c-3.4 3.3-8 4.8-12.6 4.1l-43.1-6.1c-24-3.4-46 12.6-50.2 36.5l-7.5 42.8c-0.8 4.6-3.7 8.5-7.8 10.7l-38.4 20.4c-21.4 11.3-29.8 37.3-19.2 59l19.1 39.1c2.1 4.2 2.1 9 0 13.3l-19.1 39.1c-10.6 21.8-2.2 47.7 19.2 59l38.4 20.4c4.1 2.2 7 6.1 7.8 10.7l7.5 42.8c4.2 23.8 26.2 39.9 50.2 36.5l43.1-6.1c4.6-0.7 9.2 0.8 12.6 4.1l31.3 30.2c8.7 8.4 19.9 12.6 31 12.6 11.2 0 22.3-4.2 31-12.6l31.3-30.2c3.4-3.3 8-4.8 12.6-4.1l43.1 6.1c2.2 0.3 4.3 0.5 6.4 0.5 21.4 0 40-15.2 43.8-36.9l7.5-42.8c0.8-4.6 3.7-8.5 7.8-10.7l38.4-20.4C499.3 349.4 507.7 323.4 497.1 301.7zM451.4 275.6l19.1 39.1c3.6 7.4 0.7 16.1-6.5 20l-38.4 20.4c-12.2 6.5-20.6 18.1-23 31.7l-7.5 42.8c-1.4 8.1-8.9 13.5-17 12.3l-43.1-6.1c-13.7-1.9-27.3 2.5-37.3 12.1l-31.3 30.2c-5.9 5.7-15.1 5.7-21 0l-31.3-30.2c-8.4-8.1-19.4-12.6-30.9-12.6 -2.1 0-4.2 0.1-6.4 0.4l-43.1 6.1c-8.1 1.1-15.6-4.3-17-12.3l-7.5-42.8c-2.4-13.7-10.8-25.2-23-31.7l-38.4-20.4c-7.2-3.8-10.1-12.6-6.5-20l19.1-39.1c6.1-12.5 6.1-26.7 0-39.2V236.4l-19.1-39.1c-3.6-7.4-0.7-16.1 6.5-20l38.4-20.4c12.2-6.5 20.6-18.1 23-31.7l7.5-42.8c1.4-8.1 8.9-13.5 17-12.3l43.1 6.1c13.7 1.9 27.3-2.5 37.3-12.1l31.3-30.2c5.9-5.7 15.1-5.7 21 0l31.3 30.2c10 9.6 23.6 14.1 37.3 12.1l43.1-6.1c8.1-1.1 15.6 4.3 17 12.3l7.5 42.8c2.4 13.7 10.8 25.2 23 31.7l38.4 20.4c7.2 3.8 10.1 12.6 6.5 20l-19.1 39.1C445.3 248.9 445.3 263.1 451.4 275.6z"/><path d="M187.1 182.2c-8.2 0-14.8 6.6-14.8 14.8v55.6l-31.1-62.2c-3.1-6.1-9.9-9.3-16.6-7.8 -6.7 1.6-11.4 7.5-11.4 14.4v118.1c0 8.2 6.6 14.8 14.8 14.8 8.2 0 14.8-6.6 14.8-14.8v-55.6l31.1 62.2c2.5 5.1 7.7 8.2 13.2 8.2 1.1 0 2.3-0.1 3.4-0.4 6.7-1.6 11.4-7.5 11.4-14.4V196.9C201.9 188.8 195.3 182.2 187.1 182.2z"/><path d="M285.5 300.3h-44.3v-29.5h34.5c8.2 0 14.8-6.6 14.8-14.8s-6.6-14.8-14.8-14.8h-34.5v-29.5h44.3c8.2 0 14.8-6.6 14.8-14.8s-6.6-14.8-14.8-14.8h-59.1c-8.2 0-14.8 6.6-14.8 14.8v118.1c0 8.2 6.6 14.8 14.8 14.8h59.1c8.2 0 14.8-6.6 14.8-14.8S293.7 300.3 285.5 300.3z"/><path d="M384 182.2c-8.2 0-14.8 6.6-14.8 14.8v55.6l-1.6-3.1c-2.5-5-7.6-8.2-13.2-8.2s-10.7 3.2-13.2 8.2l-1.6 3.1V196.9c0-8.2-6.6-14.8-14.8-14.8 -8.2 0-14.8 6.6-14.8 14.8v118.1c0 6.8 4.7 12.8 11.4 14.4 6.7 1.6 13.5-1.6 16.6-7.8l16.3-32.6 16.3 32.6c2.5 5.1 7.7 8.2 13.2 8.2 1.1 0 2.3-0.1 3.4-0.4 6.7-1.6 11.4-7.5 11.4-14.4V196.9C398.7 188.8 392.1 182.2 384 182.2z"/></svg>
                </router-link>
                <router-link to="/category">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 -52 512 512" ><path d="m0 113.3h113.3v-113.3h-113.3zm30-83.3h53.3v53.3h-53.3zm0 0"/><path d="m149.3 0v113.3h362.7v-113.3zm332.7 83.3h-302.7v-53.3h302.7zm0 0"/><path d="m0 260.3h113.3v-113.3h-113.3zm30-83.3h53.3v53.3h-53.3zm0 0"/><path d="m149.3 260.3h362.7v-113.3h-362.7zm30-83.3h302.7v53.3h-302.7zm0 0"/><path d="m0 407.3h113.3v-113.3h-113.3zm30-83.3h53.3v53.3h-53.3zm0 0"/><path d="m149.3 407.3h362.7v-113.3h-362.7zm30-83.3h302.7v53.3h-302.7zm0 0"/></svg>
                </router-link>
            </div>
            <div class="nav-section">
                <router-link class="right" to="/search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="-1 0 136 136.2" ><path d="M93.1 80.8C109.5 57.7 104 25.8 80.9 9.4 57.9-6.9 25.9-1.5 9.5 21.6 -6.8 44.7-1.4 76.7 21.7 93 38.2 104.7 60 105.6 77.4 95.3L115.2 132.9C119.2 137.2 126 137.3 130.3 133.3 134.6 129.2 134.8 122.4 130.7 118.1 130.6 118 130.5 117.9 130.3 117.7ZM51.3 84.3C33.1 84.3 18.3 69.6 18.3 51.3 18.3 33.1 33 18.3 51.3 18.3 69.5 18.3 84.3 33 84.3 51.2 84.4 69.5 69.6 84.3 51.3 84.3 51.3 84.3 51.3 84.3 51.3 84.3ZM51.3 84.3" /></svg>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>
    div{
        width: 100%;
        background: rgb(3,37,65);
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    .nav-section{
        width:20%;
    }
    .middle{
        display: flex;
        justify-content: space-between;
    }
    .right{
        float: right;
    }
    .right svg{
        float: right;
    }
    svg{
        fill: white;
    }
    svg:hover{
        fill: #18B8DB;
    }
    .router-link-active svg{
        fill: #18B8DB;
    }
    img {
        width: 200px;
    }
</style>