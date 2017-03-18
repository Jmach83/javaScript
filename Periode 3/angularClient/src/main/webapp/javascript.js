angular.module('myModule', [])
        .controller('myController', ['$http', function ($http){
                var self = this;
                self.jokeData;
                self.jokeId;
                
                
                
                $http.get('http://localhost:8000/api/jokes')
                        .then(function(response){
                            self.jokeData = response.data;
                        });
                
                self.getJoke = function(){
                    $http.get('http://localhost:8000/api/jokes/' + self.jokeId)
                            .then (function(response){
                                self.jokeById = response.data;
                    });
                };
}]);


