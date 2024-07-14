window.updateSanPhamController = function ($scope, $http, $location, $routeParams) {
    var urlSP = "http://localhost:3000/sanPham"
    var urlNgDung = "http://localhost:3000/nguoiDung"
    var indexUrl = urlSP + "/" + $routeParams.id
    $scope.NgDung = []
    $scope.data = {
        IDNgDung: "",
        name: "",
        type: "",
        price: "",
        brand: "",
        quantity: "",
        status: ""
    }
    $scope.convertToNumber = function () {
        $scope.data.price = parseFloat($scope.data.price);
    }
    $http.get(urlNgDung)
        .then((response) => {
            $scope.NgDung = response.data
        }).catch((err) => {
            console.log("Lỗi API ngDung ");
        });
    $http.get(indexUrl)
        .then((response) => {
            $scope.data = response.data
        }).catch((err) => {
            console.log("Lỗi API ngDung ");
        });
    $scope.update = () => {
        if (validate()) {
            let cp = angular.copy($scope.data)
            $http.patch(indexUrl, cp)
                .then((response) => {
                    alert("Sửa thành công")
                    $location.path("/")
                }).catch((err) => {
                    alert("Sửa thất bại")
                });
        }
    }

    $scope.validate = {
        IDNgDung: false,
        name: false,
        type: false,
        price1: false,
        price2: false,
        price3: false,
        brand: false,
        quantity1: false,
        quantity2: false,
        quantity3: false,
        status: false
    }

    function validate() {
        let check = true
        if ($scope.data.IDNgDung == "") {
            $scope.validate.IDNgDung = true
            check = false;
        }
        if ($scope.data.name.trim() == "") {
            $scope.validate.name = true
            check = false;
        }
        if ($scope.data.type == 0) {
            $scope.validate.type = true
            check = false;
        }
        if ($scope.data.price == "") {
            $scope.validate.price1 = true
            check = false;
        }
        if ($scope.data.price < 0) {
            $scope.validate.price2 = true
            check = false;
        }
        if (isNaN($scope.data.price)) {
            $scope.validate.price3 = true
            check = false;
        }
        if ($scope.data.brand == 0) {
            $scope.validate.brand = true
            check = false;
        }
        if ($scope.data.quantity.trim() == "") {
            $scope.validate.quantity1 = true
            check = false;
        }
        if ($scope.data.quantity < 0) {
            $scope.validate.quantity2 = true
            check = false;
        }
        if (isNaN($scope.data.quantity)) {
            $scope.validate.quantity3 = true
            check = false;
        }
        if ($scope.data.status == 0) {
            $scope.validate.status = true
            check = false;
        }
        return check;
    }

    $scope.changeUserId = function () {
        if ($scope.data.IDNgDung == "") {
            $scope.validate.IDNgDung = true
        } else {
            $scope.validate.IDNgDung = false
        }
    }
    $scope.changeName = () => {
        if ($scope.data.name.trim() == "") {
            $scope.validate.name = true
        } else $scope.validate.name = false
    }
    $scope.changeType = () => {
        if ($scope.data.type == 0) {
            $scope.validate.type = true
        } else $scope.validate.type = false
    }
    $scope.changePrice = () => {
        if ($scope.data.price == "") {
            $scope.validate.price1 = true
        } else $scope.validate.price1 = false
        if ($scope.data.price < 0) {
            $scope.validate.price2 = true
        } else $scope.validate.price2 = false
        if (isNaN($scope.data.price)) {
            $scope.validate.price3 = true
        } else $scope.validate.price3 = false
    }
    $scope.changeBrand = () => {
        if ($scope.data.brand == 0) {
            $scope.validate.brand = true
        } else $scope.validate.brand = false
    }
    $scope.changeQuantity = () => {
        if ($scope.data.quantity.trim() == "") {
            $scope.validate.quantity1 = true
        } else $scope.validate.quantity1 = false
        if ($scope.data.quantity < 0) {
            $scope.validate.quantity2 = true
        } else $scope.validate.quantity2 = false
        if (isNaN($scope.data.quantity)) {
            $scope.validate.quantity3 = true
        } else $scope.validate.quantity3 = false
    }
    $scope.changeStatus = () => {
        if ($scope.data.status == 0) {
            $scope.validate.status = true
        } else $scope.validate.status = false
    }

}