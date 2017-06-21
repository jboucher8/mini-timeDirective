app.directive('showTime', function(){
	return {
		templateUrl: '/views/time.html',
		restrict: 'E',
		scope: {
			getTime: '='
		}
	}
})