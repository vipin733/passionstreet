<template>
    <div id="container"> 
        <Header/> 
        <nuxt />
        <Footer/>
    </div>
</template>
<script>
    import Footer from '~/components/layout/footer/Footer'
    import Header from '~/components/layout/menu/Header'
    export default {
        components: {
            Footer, Header
        }
    }
</script>
