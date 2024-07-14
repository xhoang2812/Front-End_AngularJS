window.updateNgDungController = function ($scope, $http, $location, $routeParams) {
    var url = "http://localhost:3000/nguoiDung" // lấy api
    var indexUrl = url + "/" + $routeParams.id // lấy api vị trí index
    $scope.data = {
        name: "",
        email: "",
        phone: "",
        user: "",
        pass: "",
        role: ""
    }
    $http.get(indexUrl)
        .then((response) => {
            $scope.data = response.data
        }).catch((err) => {
            alert("Lỗi API updateController")
        });

    //Sửa patch()
    $scope.update = function () {
        if (checkEmty()) {
            let data = angular.copy($scope.data)
            $http.patch(indexUrl, data) // lấy vị tí id sửa data
                .then((response) => {
                    alert("Sửa thành công")
                    $location.path("/listNgDung")
                }).catch((err) => {
                    alert("Sửa thất bại")
                });
        }
    }

    //validate form
    $scope.validate = {
        name: false,
        email: false,
        email1: false,
        phone1: false,
        phone2: false,
        phone3: false,

        user: false,
        pass: false,
        role: false
    }

    function checkEmty() {
        let check = true
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if ($scope.data.name.trim() == "") {
            $scope.validate.name = true
            check = false
        }
        if ($scope.data.email.trim() == "") {
            $scope.validate.email = true
            check = false
        } if (!regexEmail.test($scope.data.email)) {
            $scope.validate.email1 = true
            check = false
        }
        if ($scope.data.user.trim() == "") {
            $scope.validate.user = true
            check = false
        }
        if ($scope.data.pass.trim() == "") {
            $scope.validate.pass = true
            check = false
        }
        if ($scope.data.phone.trim() == "") {
            $scope.validate.phone1 = true
            check = false
        }
        if (isNaN($scope.data.phone)) {
            $scope.validate.phone2 = true
            check = false
        }
        if ($scope.data.phone < 0) {
            $scope.validate.phone3 = true
            check = false
        }

        if ($scope.data.role == 0) {
            $scope.validate.role = true
            check = false
        }
        return check
    }

    $scope.validateName = () => {
        if ($scope.data.name.trim() == "") {
            $scope.validate.name = true
        } else $scope.validate.name = false
    }
    $scope.validateEmail = () => {
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if ($scope.data.email.trim() == "") {
            $scope.validate.email = true
        } else
            $scope.validate.email = false
        if (!regexEmail.test($scope.data.email)) {
            $scope.validate.email1 = true
            check = false
        } else $scope.validate.email1 = false
    }
    $scope.validatePhone = () => {
        if ($scope.data.phone.trim() == "") {
            $scope.validate.phone1 = true
        } else
            $scope.validate.phone1 = false
        if (isNaN($scope.data.phone)) {
            $scope.validate.phone2 = true
        } else $scope.validate.phone2 = false
        if ($scope.data.phone < 0) {
            $scope.validate.phone3 = true
        } else $scope.validate.phone3 = false

    }
    $scope.validateUser = () => {
        if ($scope.data.user.trim() == "") {
            $scope.validate.user = true
        } else
            $scope.validate.user = false
    }
    $scope.validatePass = () => {
        if ($scope.data.pass.trim() == "") {
            $scope.validate.pass = true
        } else
            $scope.validate.pass = false
    }
    $scope.validateRole = () => {
        if ($scope.data.role == 0) {
            $scope.validate.role = true
        } else
            $scope.validate.role = false
    }

}