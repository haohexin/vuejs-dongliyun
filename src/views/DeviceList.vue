<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-title-box">
                    <h4 class="page-title">设备列表</h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card-box">
                    <table class="table">
                        <thead class="thead-default">
                        <tr>
                            <th>设备ID</th>
                            <th>设备名称</th>
                            <th>机器型号</th>
                            <th>机器序列号</th>
                            <th>设备状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>设备001</td>
                            <td>FRA-EDP冷干机</td>
                            <td>EDP2300-1</td>
                            <td>
                                <span class="label label-success">运行</span>
                                <span class="label label-danger">报警</span>
                                <span class="label label-warning">保养</span>
                                <span class="label label-default">停机</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-eye"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>设备002</td>
                            <td>FRA-EDP吸干机</td>
                            <td>EDP2300-2</td>
                            <td>
                                <span class="label label-success">运行</span>
                                <span class="label label-danger">报警</span>
                                <span class="label label-warning">保养</span>
                                <span class="label label-default">停机</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-eye"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>设备003</td>
                            <td>FRA-EDP流量计</td>
                            <td>EDP2300-3</td>
                            <td>
                                <span class="label label-success">运行</span>
                                <span class="label label-danger">报警</span>
                                <span class="label label-warning">保养</span>
                                <span class="label label-default">停机</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-eye"></i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
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
