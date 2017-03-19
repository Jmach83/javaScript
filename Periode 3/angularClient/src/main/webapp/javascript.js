angular.module('myModule', [])
        .controller('myController', ['$http', function ($http){
                var self = this;
                self.jokeData;
                
                
                $http.get('http://localhost:8000/api/jokes')
                        .then(function(response){
                            self.jokeData = response.data;
                        });
                
                self.getJoke = function(id){
                    $http.get('http://localhost:8000/api/jokes/' + id)
                            .then (function(response){
                                self.jokeById = response.data;
                    });
                };
                
                self.deleteJoke = function(id) {
                    $http.delete('http://localhost:8000/api/jokes' + id);                            
                };
}]);


