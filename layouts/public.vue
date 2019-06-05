<template>
    <div id="container"> 
        <Header/> 
        <nuxt />
        <footer id="footer">
        </footer>
    </div>
</template>
<script>
    import Header from '~/components/layout/menu/Header'
    export default {
        components: {
            Header
        }
    }
</script>