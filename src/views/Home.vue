<template>
    <div>
        <header id="topnav">
            <TheHeader/>
            <TheNav/>
        </header>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="page-title-box">
                            <div class="btn-group pull-right">
                                <ol class="breadcrumb hide-phone p-0 m-0">
                                    <li class="breadcrumb-item"><a href="#">Adminox</a></li>
                                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                            <h4 class="page-title">首页</h4>
                        </div>
                    </div>
                </div>
            </div>
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

<style>
</style>
