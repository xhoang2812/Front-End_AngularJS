window.addNgDungController = function ($scope, $http, $location) {
    var url = "http://localhost:3000/nguoiDung"

    //Khai báo data gán ng-model cho input
    $scope.data = {
        name: "",
        email: "",
        phone: "",
        user: "",
        pass: "",
        role: ""
    }
    //thêm mới post()
    $scope.add = function () {
        if (checkEmty()) {
            let cp = angular.copy($scope.data)
            $http.post(url, cp)
                .then((response) => {
                    alert("Thêm thành công")
                    $location.path("/listNgDung")
                }).catch((err) => {
                    alert("Thêm thất bại")
                });
        }
    }

    // xóa delete()
    $scope.clear = function () {
        $scope.data = {
            name: "",
            email: "",
            phone: "",
            user: "",
            pass: "",
            status: "",
            role: ""
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