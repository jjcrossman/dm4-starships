angular.module( 'Starship' ).service( 'starshipService', function ( $http, $q, baseURL ) {

/* 'baseURL', 'http://swapi.co/api/'*/
var nextPage = "";

this.getStarships = function ( starshipUrlList ) {
  var deferred = $q.defer();
  var starships = [];
  //loop through list
  starshipUrlList.forEach( function ( url ) {
    $http.get( url ).then( function ( starship ) {
      starships.push( starship.data );

      if ( starships.length === starshipUrlList.length ) {
        deferred.resolve( starships );
      }
    } );
  } );
  return deferred.promise;
}

this.getCharacters = function () {
  if ( nextPage ) {
    return $http.get( nextPage ).then( saveNextPage );
  }
  return $http.get( baseURL + "people" ).then( saveNextPage );

  }

  function saveNextPage( result ) {
    nextPage = result.data.next;
    return result;
  }


} );
