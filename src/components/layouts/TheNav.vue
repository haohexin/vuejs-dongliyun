<template>
    <div class="navbar-custom">
        <div class="container">
            <div id="navigation">
                <ul class="navigation-menu">
                    <li class="has-submenu" v-for="(item, index) in navList"
                        :class="{ active: index === activeNavIndex }"
                    >
                        <router-link v-bind:to="item.routeName" @click="changeNavIndex(index)">
                            <i class="fi-air-play"></i>{{ item.title }}
                        </router-link>
                    </li>
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
                activeNavIndex: 0
            }
        },
        methods: {
            changeNavIndex(index) {
                this.activeNavIndex = index
            }
        }
    }
</script>

<style scoped>
</style>
