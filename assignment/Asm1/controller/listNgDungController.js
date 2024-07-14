window.listNgDungController = function ($scope, $location, $http) {
    //Khai bao API
    var url = "http://localhost:3000/nguoiDung"
    $scope.nguoiDung = []
    $http.get(url)
        .then((response) => {
            $scope.nguoiDung = response.data
        }).catch((err) => {
            console.log("Loi API listNgDungController")
        });


    //xoa
    $scope.xoa = function (id) {
        let check = confirm("Bạn chắc có mún xóa không")
        if (check) {
            // xóa theo id Url
            let link = url + "/" + id
            $http.delete(link)
                .then((response) => {
                    alert("Xóa thành công")
                }).catch((err) => {
                    alert("Xóa thất bại")
                });
        }
    }
}