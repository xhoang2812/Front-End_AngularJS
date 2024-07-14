window.SPCTController = function ($scope, $http, $location, $routeParams) {

    var url = "http://localhost:3000/SPCT"

    $routeParams.id
    // $scope.data = {
    //     "name": "",
    //     "gia1": "",
    //     "gia2": "",
    //     "gia3": "",
    //     "banner": "",
    //     "img": ""
    // }
    $scope.SPCT = []
    var indexUrl = url + "/" + $routeParams.id
    $http.get(indexUrl)
        .then((response) => {
            // $scope.data = response.data
            $scope.SPCT = response.data
        }).catch((errr) => {
            console.log("Lỗi API")
        });
}