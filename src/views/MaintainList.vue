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
                    <h4 class="page-title">保养列表</h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card-box">
                    <table class="table">
                        <thead class="thead-default">
                        <tr>
                            <th>保养ID</th>
                            <th>设备名称</th>
                            <th>机器型号</th>
                            <th>保养信息</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <span class="label label-warning">待保养</span>
                            </td>
                            <td>
                                <a href="#"><i class="fa fa-edit"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <span class="label label-success">已保养</span>
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
