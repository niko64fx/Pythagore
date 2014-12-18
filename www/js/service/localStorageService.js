app.service(
  'localStorage',
  [
    "$window",
    function($window)
    {
      var save = function(key, value)
      {
        $window.localStorage.setItem(key, angular.toJson(value));
      };
      
      var load = function(key)
      {
        var value = $window.localStorage.getItem(key);
        
        return angular.fromJson(value);
      };

      return {
        save: save,
        load: load
      }
    }
  ]
);
