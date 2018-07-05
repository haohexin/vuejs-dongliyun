<template>
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
                    <h4 class="page-title">修改个人信息</h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <!--<h4 class="m-t-0 header-title"><b>修改个人信息</b></h4>-->

                    <div class="row">
                        <div class="col-12">
                            <div class="p-20">
                                <form class="form-horizontal" role="form">
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">密码</label>
                                        <div class="col-10">
                                            <input type="password" class="form-control" value="password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-2 col-form-label">确认密码</label>
                                        <div class="col-10">
                                            <input type="password" class="form-control" value="password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <button type="button"
                                                class="btn btn-custom waves-effect waves-light btn-md">
                                            提交
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <!-- end row -->

                </div> <!-- end card-box -->
            </div><!-- end col -->
        </div>
        <!-- end row -->

    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
</style>
