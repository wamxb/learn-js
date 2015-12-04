var app = {};
app.controller('BlogCtrl', function ($scope, Blog) {
    $scope.blogs = null;
    $scope.blogOffset = 0;
    //
    $scope.doRefresh = function () {
        Blog.async('https://www.phodal.com/api/v1/app/?format=json').then(function (results) {
            $scope.blogs = results.objects;
        });
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply()
    };

    Blog.async('https://www.phodal.com/api/v1/app/?format=json').then(function (results) {
        $scope.blogs = results.objects;
    });

    $scope.loadMore = function() {
        $scope.blogOffset = $scope.blogOffset + 1;
        Blog.async('https://www.phodal.com/api/v1/app/?limit=10&offset='+ $scope.blogOffset * 20 +  '&format=json').then(function (results) {
            Array.prototype.push.apply($scope.blogs, results.objects);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })
    };
});