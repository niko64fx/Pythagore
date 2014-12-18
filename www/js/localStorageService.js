ContactManager.service(
	'localStorage',
	function ($window)
	{
		var save = function (key, value)
		{
			$window.localStorage.setItem(key, angular.toJson(value));
		};
		
		var load = function (key)
		{
			return angular.fromJson($window.localStorage.getItem(key));
		};
		
		return {
			save: save,
			load: load
		};
	}
);
