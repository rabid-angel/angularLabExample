var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "Pet GPA", link: '/GPA'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "sugar gliders"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });

//==================== GPA CONTROLLER ==================================
mainApp.controller('gpaCtrl', function($scope){
    console.log("controller loaded!");

    $scope.classField = "";
    $scope.creditsField = "";
    $scope.gradeField = "";

    $scope.gpa = 0;

    // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
    $scope.data = [
    ];

    $scope.addData = function(){
        if($scope.classField.length >= 1 && $scope.creditsField.length >= 1 && $scope.gradeField.length  == 1) {
            $scope.data.push({class: $scope.classField, credits: $scope.creditsField, grade: $scope.gradeField});
            $scope.classField = "";
            $scope.creditsField = "";
            $scope.gradeField = "";
            $scope.calculateGPA();
        }
    };

    $scope.removeData = function(index){
        $scope.data.splice(index, 1);
        $scope.calculateGPA();
    };

    $scope.cat = function(str1, str2){
        return str1 + str2;
    };

    $scope.itemsInList = function(){
        return $scope.data.length;
    };

    toNumber = function(grade){
        if(grade=='A'){
            return 4;
        } else if(grade=='B'){
            return 3;
        } else if(grade=='C'){
            return 2;
        } else if(grade=='D'){
            return 1;
        } else if(grade=='F'){
            return 0;
        }
    };

    $scope.calculateGPA = function(){
        var gradeTotal = 0;
        var creditTotal = 0;
        for (var i = 0; i < $scope.data.length; i++) {
            gradeTotal = gradeTotal + (toNumber($scope.data[i].grade) * $scope.data[i].credits);
            creditTotal = creditTotal + parseInt($scope.data[i].credits);
        }
        var newGPA = gradeTotal / creditTotal;
        $scope.gpa = newGPA;
    };

    $scope.returnGPA = function(){
        return $scope.gpa;
    };

    $scope.returnColorClass = function(){
        if($scope.gpa <= 2){
            return "badGPA";
        } else if($scope.gpa >= 3){
            return "goodGPA";
        } else {
            return "okGPA";
        }
    }
});