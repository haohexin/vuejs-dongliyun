<template>
    <div class="navbar-custom">
        <div class="container">
            <div id="navigation">
                <ul class="navigation-menu">
                    <!--<li class="has-submenu" v-for="(item, index) in navList"-->
                    <!--v-bind:class="{ active: index === activeNavIndex }"-->
                    <!--&gt;-->
                    <!--<router-link v-bind:to="item.routeName"-->
                    <!--:to="{path:item.routeName,query:{item:index}}"-->
                    <!--@click="changeNavIndex(index)">-->
                    <!--<i class="fi-air-play"></i>{{ item.title }}-->
                    <!--</router-link>-->
                    <!--</li>-->

                    <router-link tag="li"
                                 class="has-submenu"
                                 v-for="(item) in navList"
                                 v-bind:to="item.routeName"
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
                        routeName: '/',
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
