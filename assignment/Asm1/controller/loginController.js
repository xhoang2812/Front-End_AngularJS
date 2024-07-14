let myApp = angular.module('app',[])
myApp.controller('login',($scope,$http)=>{
    var url = "http://localhost:3000/nguoiDung?user="
    
    $scope.user = {
        userName: "",
        pass: ""
    }
    let listUser = []
    
    $scope.login= ()=> {
        if (checkLogin()) {
            $http.get(url +  $scope.user.userName)
        .then((response) => {
            listUser = response.data;
            if ($scope.user.userName == listUser[0].user && $scope.user.pass == listUser[0].pass ) {
                if (listUser[0].role == 3) {
                    alert("Đăng nhập thành công")
                    window.location.href = 'index.html'
                }else if(listUser[0].role == 1 || listUser[0].role == 2){
                    alert("Đăng nhập thành công")
                    window.location.href = 'admin.html'
                }

            }else{
                alert("Sai mật khẩu hoặc tài khoản" )
            }
        }).catch((err) => {
            alert("Sai tài khoản hoặc mật khẩu ")
        });    
        }
    }

    $scope.data = {
        name:"",
        email: "",
        phone: "",
        user: "",
        pass: "",
        role: 3,
    }
    $scope.validate = {
        name: false,
        email: false,
        email1: false,
        phone1: false,
        phone2: false,
        phone3: false,
        user: false,
        pass: false,
    }
    $scope.validatee = {
        user: false,
        pass: false,
    }

    function checkLogin() {
        let check = true
        if ($scope.user.userName.trim() == "") {
            $scope.validatee.user = true
            check = false
        }
        if ($scope.user.pass == "") {
            $scope.validatee.pass = true
            check = false
        }
        return check
    }

    $scope.changeUserName = ()=>{
        if ($scope.user.userName.trim() == "") {
            $scope.validatee.user = true
        }else $scope.validatee.user = false
    }
    $scope.changePass = function () {
        if ($scope.user.pass == "") {
            $scope.validatee.pass = true
        } $scope.validatee.pass = false
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
    var urlDk = "http://localhost:3000/nguoiDung"
    $scope.signin = function () {
       if (checkEmty()) {
        let cp = angular.copy($scope.data)
        $http.post(urlDk,cp)
        .then((response) => {
            alert("Đăng ký thành công")
        }).catch((err) => {
            alert("Đăng ký thất bại")
        });
       } 
    }

  
})

// window.loginController = function ($scope, $http, $location ) {
//     var url = "http://localhost:3000/nguoiDung?user="
    
//     $scope.user = {
//         userName: "",
//         pass: ""
//     }
//     let listUser = []
    
//     $scope.login = ()=> {
//         $http.get(url +  $scope.user.userName)
//         .then((response) => {
//             listUser = response.data;
//             if ($scope.user.userName == listUser[0].user && $scope.user.pass == listUser[0].pass ) {
//                 console.log(listUser[0]);
//                 // $location.path('index.html')
//             }
            
//         }).catch((err) => {
//         });    
//     }
    
// }