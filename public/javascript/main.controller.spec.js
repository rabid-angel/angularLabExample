'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.pages.length > 0).toEqual(true);
    });
});

//=== Testing gpaCtrl ===========================================
describe('Testing controller: gpaCtrl', function(){
    beforeEach(module('mainApp'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });
    }));

    describe("testing data functionality: ", function(){
        it("should not contain data by default", function(){
            expect(scope.data.length == 0).toEqual(true);
        });
    });

    describe("testing toNumber function: ", function(){
        it("should turn letter grades into corresponding point values", function(){
            expect(toNumber("A")).toEqual(4);
            expect(toNumber("B")).toEqual(3);
            expect(toNumber("C")).toEqual(2);
            expect(toNumber("D")).toEqual(1);
            expect(toNumber("F")).toEqual(0);
        });
    });

    describe("testing GPA calculation: ", function(){
        it("should calculate the GPA", function(){
            scope.classField = "Class 1";
            scope.creditsField = "4";
            scope.gradeField = "C";
            scope.addData();
            scope.classField = "Class 1";
            scope.creditsField = "2";
            scope.gradeField = "A";
            scope.addData();
            scope.classField = "Class 1";
            scope.creditsField = "2";
            scope.gradeField = "F";
            scope.addData();
            expect(scope.returnGPA()).toEqual(2);
        });
    });
})