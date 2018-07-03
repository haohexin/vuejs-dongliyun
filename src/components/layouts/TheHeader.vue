<template>
    <div class="topbar-main">
        <div class="container">

            <!-- Logo container-->
            <div class="logo">
                <!-- Text Logo -->
                <!--<a href="index.html" class="logo">-->
                <!--Adminox-->
                <!--</a>-->
                <!-- Image Logo -->
                <router-link to="/Home" class="logo">
                    <img :src="logo_dark.src" alt="" height="24" class="logo-lg">
                    <img :src="logo.src" alt="" height="24" class="logo-sm">
                </router-link>
            </div>
            <!-- End Logo container-->


            <div class="menu-extras topbar-custom">

                <ul class="list-inline float-right mb-0">

                    <li class="menu-item list-inline-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle nav-link">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </li>
                    <li class="list-inline-item dropdown notification-list">
                        <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown"
                           href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <img :src="user_avatar.src" alt="user" class="rounded-circle">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                            <!-- item-->
                            <div class="dropdown-item noti-title">
                                <h5 class="text-overflow">
                                    <small>Welcome ! John</small>
                                </h5>
                            </div>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="zmdi zmdi-settings"></i> <span>设置</span>
                            </a>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="zmdi zmdi-power"></i> <span>登出</span>
                            </a>

                        </div>
                    </li>

                </ul>
            </div>
            <!-- end menu-extras -->

            <div class="clearfix"></div>

        </div> <!-- end container -->
    </div>
    <!-- end topbar-main -->
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                logo_dark: {
                    src: '../../static/images/logo_dark.png'
                },
                logo: {
                    src: '../../static/images/logo_sm.png'
                },
                user_avatar: {
                    src: '../../static/images/users/avatar-1.jpg'
                }
            }
        },
    }
</script>

<style scoped>
</style>
