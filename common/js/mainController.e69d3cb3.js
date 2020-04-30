
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

var postId = getQueryString('id');
var category = getQueryString('category');
if(category==null){
    setTimeout(console.log($( ".category" ).text()), 10000)
    
    category = 8;
}

var myModule = angular.module('WPdata', ['ngSanitize', 'ui.bootstrap'], function($locationProvider) {
    // $locationProvider.html5Mode(true);
});

myModule.service('WordPressService', function($http, $q, $rootScope) {
    return {
        getProducts: function(currentPage, itemsPerPage) {
            var deffered = $q.defer();
            $http.get('../products.c6c927a8.json').then(
                function(response, date, contents) {
                    _.each(response.data.posts, function(post) {
                        if (post.thumbnail_images === undefined || post.thumbnail_images === null)
                            post.thumbnail_images = { full: { url: "../common/img/altimg.png" } };
                    });
                    deffered.resolve(response);
                    // $rootScope.$apply();
                },
                function(response, date, contents) {
                    deffered.reject(response);
                });
            return deffered.promise;

        },

        getBlogPosts: function(categoryId) {
            var deffered = $q.defer();
            $http.get('/?json=get_tag_posts&tag_slug=blog&count=3').then(
                function(response, date, contents) {
                    deffered.resolve(response);
                    // $rootScope.$apply();
                },
                function(response, date, contents) {
                    deffered.reject(response);
                });
            return deffered.promise;
        },

        getPost: function(categoryId) {
            var deffered = $q.defer();
            $http.get('/?json=get_post&post_id='+postId).then(
                function(response, date, contents) {
                    deffered.resolve(response);
                    // $rootScope.$apply();
                },
                function(response, date, contents) {
                    deffered.reject(response);
                });
            return deffered.promise;
        },

        getRelatedPosts: function(categoryId) {
            var deffered = $q.defer();
            $http.get('/?json=get_category_posts&orderby=rand&id='+category).then(
                function(response, date, contents) {
                    deffered.resolve(response);
                    // $rootScope.$apply();
                },
                function(response, date, contents) {
                    deffered.reject(response);
                });
            return deffered.promise;
        },



    }

})

myModule.directive('bindHtmlUnsafe', function($compile) {
    return function($scope, $element, $attrs) {

        var compile = function(newHTML) {
            newHTML = $compile(newHTML)($scope);
            $element.html('').append(newHTML);
        };

        var htmlName = $attrs.bindHtmlUnsafe;

        $scope.$watch(htmlName, function(newHTML) {
            if (!newHTML) return;
            compile(newHTML);
        });

    };
});

myModule.directive('allPost', function() {
    return {
        restrict: 'AEC',
        scope: {
            post: '=allPost'
        },
        templateUrl: '../common/directives/products.html'
    };
});

myModule.directive('getBlogPosts', function() {
    return {
        restrict: 'AEC',
        scope: {
            post: '=getBlogPosts'
        },
        templateUrl: '../common/directives/blog.html'
    };
});

myModule.directive('getRelatedPosts', function() {
    return {
        restrict: 'AEC',
        scope: {
            post: '=getRelatedPosts'
        },
        templateUrl: '../common/directives/relates.html'
    };
});

myModule.controller('AllProducts', function($scope, $location, WordPressService, $log) {
    $scope.itemsPerPage = 9;
    $scope.maxSize = 3;

    $scope.pageChanged = function(page) {
        WordPressService.getProducts($scope.currentPage, $scope.itemsPerPage, $scope.totalItems).then(function(data) {
            $scope.myList = data.data.posts;
            $scope.totalItems = data.data['count_total'];
        });
    };
    $scope.pageChanged();

});


myModule.controller('blogPosts', function($scope, $location, WordPressService, $log) {
    $scope.itemsPerPage = 6;
    $scope.pageChanged = function(page) {
        WordPressService.getBlogPosts().then(function(data) {
            $scope.myList = data.data.posts;
        });
    };
    $scope.pageChanged();

});

myModule.controller('getRelatedPosts', function($scope, $location, WordPressService, $log) {
    $scope.itemsPerPage = 6;
    $scope.pageChanged = function(page) {
        WordPressService.getRelatedPosts().then(function(data) {
            $scope.myList = data.data.posts;
        });
    };
    $scope.pageChanged();

});


myModule.controller('getPost', function($scope, $location, WordPressService, $log) {
        WordPressService.getPost().then(function(data) {
            $scope.post = data.data.post;
        });

});

