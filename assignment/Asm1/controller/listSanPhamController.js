window.listSanPhamController = function ($scope, $http) {
    var url = "http://localhost:3000/sanPham"
    $scope.sanPham = []
    $http.get(url)
        .then((response) => {
            $scope.sanPham = response.data
            // console.log($scope.sanPham);
                // if ($scope.sanPham.type == 1) {
                //     $scope.sanPham.type = "Điện thoại"
                // }
                // else if ($scope.sanPham.type == 2) {
                //     $scope.sanPham.type = "Laptop"
                // } else if($scope.sanPham.type == 3){
                //     $scope.sanPham.type = "Laptop"
                // }
            
        }).catch((err) => {
            console.log("Lỗi API");
        });
        


    $scope.xoa = function (id) {
        let check = confirm("Bạn chắc có muốn xóa không?")
        let urlXoa = url + "/" + id
        if (check) {
            $http.delete(urlXoa)
                .then((response) => {
                    alert("Xóa thành công")
                }).catch((err) => {
                    alert("Xóa thất bại")
                });
        }
    }
}