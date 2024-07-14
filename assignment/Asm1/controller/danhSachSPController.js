window.danhSachSPController = function ($scope, $http, $location, $routeParams) {
    var url = "http://localhost:3000/sanPham/"
    $scope.sanPham = []

    $http.get(url)
        .then(function (response) {
            $scope.sanPham = response.data
            console.log($scope.sanPham);
        })
        .catch(function (error) {
            console.log("Lỗi API")
        })

        
}