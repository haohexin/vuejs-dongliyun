<template>
    <div>
        <header id="topnav">
            <TheHeader/>
            <TheNav/>
        </header>
        <div class="wrapper">
            <router-view/>
        </div>
        <TheFooter/>
    </div>
</template>

<script>
    import TheHeader from '@/components/layouts/TheHeader'
    import TheNav from '@/components/layouts/TheNav'
    import TheFooter from '@/components/layouts/TheFooter'

    export default {
        name: 'App',
        components: {
            TheHeader,
            TheNav,
            TheFooter
        }
    }
</script>

<style lang="scss">
</style>
