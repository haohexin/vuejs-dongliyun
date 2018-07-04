<template>
    <div class="navbar-custom">
        <div class="container">
            <div id="navigation">
                <ul class="navigation-menu">
                    <router-link tag="li"
                                 class="has-submenu"
                                 v-for="(item,idx) in navList"
                                 :key="idx"
                                 :to="item.routeName"
                                 active-class="active"
                                 exact
                    >
                        <a><i class="fi-air-play"></i>{{ item.title }}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheNav',
        data() {
            return {
                navList: [
                    {
                        title: '首页',
                        routeName: '/Home',
                    },
                    {
                        title: '设备管理',
                        routeName: '/DeviceList',
                    },
                    {
                        title: '报警管理',
                        routeName: '/WarningList',
                    },
                    {
                        title: '保养管理',
                        routeName: '/MaintainList',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
</style>
